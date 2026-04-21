import { ConfigProvider, theme } from 'antd';
import { RouterProvider } from 'react-router';
import { useAppSelector } from './app/hooks/hooks';
import AntModal from './common/Modal/AntModal';
import { router } from './routes/router';
import type { RootState } from './app/store';
import { useEffect } from 'react';
import { useDynamicHead } from './common/hooks/useDynamicHead';

const { defaultAlgorithm, darkAlgorithm } = theme;
function App() {
  const { mode, color_themes, fontFamily, fontSize } = useAppSelector(
    (state: RootState) => state.theme,
  );
  const { user } = useAppSelector((state: RootState) => state.auth);
  useDynamicHead(user?.short_company_name, user?.favicon);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: mode === 'light' ? defaultAlgorithm : darkAlgorithm,
          token: {
            colorPrimary: color_themes?.primary || '#00b96b',
            // marginLG: 0,
            paddingMD: 10,
            fontFamily:
              fontFamily?.value ||
              '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: fontSize?.value || 14,
          },
          components: {
            Table: {
              ...(mode === 'light' && {
                headerBg: color_themes?.accent || '#6ce7b3',
              }),
            },
          },
        }}
      >
        <AntModal />
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
