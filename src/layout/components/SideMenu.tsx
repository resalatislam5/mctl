import { Divider, Image, Layout, Menu, theme, Typography } from 'antd';
import type { SliderProps } from 'antd/es/slider';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { useCheckPermissionQuery } from '../../auth/api/authEndpoint';
import { useBreakpoint } from '../../common/utils/constant';
import type { INavItem } from '../types/layoutTypes';
import { navItems, renderItems } from '../utils/navItems';
import HeaderTime from './HeaderTime';
import { useAppDispatch } from '../../app/hooks/hooks';
import { addUser } from '../../app/features/authSlice';

interface Props extends SliderProps {
  handleCollapse: (value: boolean) => void;
  collapsed: boolean;
  startResize: () => void;
  width?: string | number;
  style?: React.CSSProperties;
}

function normalizePath(path: string) {
  if (path === '/') return '/';
  const newPath = path.replace(/\/+$/, ''); // remove trailing slash

  // Only removes the last path segment if it's a number; used for dynamic sidebar highlighting
  const pathSplit = newPath.split('/');
  const catchLastPathElement = pathSplit.pop();
  if (Number(catchLastPathElement)) {
    return pathSplit.join('/');
  }

  return newPath;
}

const { Sider } = Layout;

const SideMenu = ({
  handleCollapse,
  collapsed,
  startResize,
  width,
  style,
}: Props) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const location = useLocation();
  const screens = useBreakpoint();

  const onOpenChange = useCallback((keys: string[]) => setOpenKeys(keys), []);
  const { data } = useCheckPermissionQuery();

  const dispatch = useAppDispatch();
  const menuItems = useMemo(() => {
    if (!data?.data?.permissions) return [];
    dispatch(addUser({ user: data?.data }));

    return navItems
      .map((item) => {
        if (item.children) {
          const children = item.children.filter((child) =>
            data?.data?.permissions.some((p) => p.name === child.name),
          );

          if (children.length) return { ...item, children };
          return null;
        }

        return data?.data?.permissions.some((p) => p.name === item.name)
          ? item
          : null;
      })
      .filter((item): item is INavItem => item !== null)
      .map(renderItems);
  }, [data?.data, dispatch]);

  useEffect(() => {
    const matchingKeys: string[] = navItems
      .filter((item) =>
        item.children?.some((child) =>
          location.pathname.startsWith(String(child.to)),
        ),
      )
      .map((item) => item.key);

    setOpenKeys(matchingKeys);
  }, [location.pathname]);

  useEffect(() => {
    if (!screens.md) {
      handleCollapse(true);
    } else {
      handleCollapse(false);
    }
  }, [screens, handleCollapse]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={width}
      style={{
        ...style,
        background: colorBgContainer,
        position: 'fixed',
        height: '100vh',
      }}
    >
      <div
        onMouseDown={startResize}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: 5,
          cursor: 'col-resize',
        }}
      />
      <div
        style={{
          margin: '20px 0',
          textAlign: 'center',
        }}
      >
        {collapsed ? (
          <Image src='/logo.png' width={35} height={35} alt='logo' />
        ) : (
          <>
            <Divider style={{ margin: 0 }}>Admin Panel</Divider>
            <Typography.Title level={5} style={{ fontWeight: 700 }}>
              MTCL Global Private Limited
            </Typography.Title>
            <HeaderTime />
          </>
        )}
        <Divider style={{ margin: '10px 0 0px 0' }} />
      </div>
      <Menu
        mode='inline'
        selectedKeys={[normalizePath(location.pathname)]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={menuItems}
        style={{ height: '100%', borderRight: 0 }}
      />
    </Sider>
  );
};

export default SideMenu;
