import { ConfigProvider, theme } from 'antd';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { useAppSelector } from './app/hooks/hooks';
import type { RootState } from './app/store';
import AntModal from './common/Modal/AntModal';
import { router } from './routes/router';

const { defaultAlgorithm, darkAlgorithm } = theme;
function App() {
  const { mode, color_themes, fontFamily, fontSize } = useAppSelector(
    (state: RootState) => state.theme,
  );

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
