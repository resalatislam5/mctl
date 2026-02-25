import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Icon } from '@iconify/react';
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Layout,
  Space,
  theme,
  type MenuProps,
} from 'antd';
import { useCallback, useRef, useState } from 'react';
import { Outlet } from 'react-router';
import { toggleTheme } from '../../app/features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import SideMenu from '../components/SideMenu';

const { Header } = Layout;

const items: MenuProps['items'] = [
  {
    label: (
      <Button
        onClick={() => {
          localStorage.removeItem('mctl_token');
          setTimeout(() => {
            window.location.href = '/auth/login';
          }, 50);
        }}
      >
        Logout
      </Button>
    ),
    key: 'logout',
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(260);

  const [resizing, setResizing] = useState(false);
  const raf = useRef<number | null>(null);

  const startResize = () => {
    setResizing(true);
  };

  const stopResize = () => {
    setResizing(false);
  };

  const resize = (e: React.MouseEvent) => {
    if (!resizing) return;

    if (raf.current) return;

    raf.current = requestAnimationFrame(() => {
      const newWidth = e.clientX;

      if (newWidth >= 180 && newWidth <= 420) {
        setWidth(newWidth);
      }

      raf.current = null;
    });
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  const handleCollapse = useCallback((value: boolean) => {
    setCollapsed(value);
  }, []);

  return (
    <Layout
      style={{ minHeight: '100vh', maxHeight: '100vh', overflow: 'hidden' }}
      onMouseMove={(e) => resize(e)}
      onMouseUp={stopResize}
      onMouseLeave={stopResize}
    >
      <SideMenu
        handleCollapse={handleCollapse}
        collapsed={collapsed}
        startResize={startResize}
        width={width}
        style={{
          position: 'relative',
          transition: resizing ? 'none' : 'width 0.12s ease-out',
        }}
      />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Space>
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            {/* <Flex style={{ flexDirection: 'column', gap: 0 }}> */}
            <p>Welcome</p>
            {/* <h4>Role</h4>
            </Flex> */}
          </Space>
          <Flex gap={16} align='center' style={{ marginRight: 30 }}>
            <Button size='small' onClick={() => dispatch(toggleTheme())}>
              {mode === 'light' ? (
                <Icon style={{}} icon={'material-symbols:dark-mode'} />
              ) : (
                <Icon style={{}} icon={'material-symbols:light-mode'} />
              )}
            </Button>
            {/* <Button size='small'> */}
            <Dropdown menu={{ items }}>
              <Avatar
                style={{ cursor: 'pointer' }}
                size='small'
                shape='square'
                icon={<UserOutlined />}
              />
            </Dropdown>

            {/* </Button> */}
          </Flex>
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
