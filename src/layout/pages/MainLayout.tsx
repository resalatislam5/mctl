import {
  BellOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Icon } from '@iconify/react';
import {
  Badge,
  Button,
  Dropdown,
  Flex,
  Layout,
  Space,
  theme,
  Tooltip,
  type MenuProps,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useCallback, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router';
import { toggleTheme } from '../../app/features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import SideMenu from '../components/SideMenu';

const { Header } = Layout;

// const items: MenuProps['items'] = [
//   {
//     label: (
//       <Link to='/profile'>
//         <Button>Profile</Button>
//       </Link>
//     ),
//     key: 'profile',
//   },
//   {
//     label: (
//       <Button
//         onClick={() => {
//           localStorage.removeItem('mctl_token');
//           setTimeout(() => {
//             window.location.href = '/auth/login';
//           }, 50);
//         }}
//       >
//         Logout
//       </Button>
//     ),
//     key: 'logout',
//   },
// ];

const items: MenuProps['items'] = [
  {
    key: 'profile',
    label: (
      <Link
        to='/profile'
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <UserOutlined style={{ fontSize: 13, color: '#6366f1' }} />
        <span style={{ fontSize: 13, fontWeight: 500, color: '#1e1e2e' }}>
          Profile
        </span>
      </Link>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    danger: true,
    label: (
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        onClick={() => {
          localStorage.removeItem('mctl_token');
          setTimeout(() => (window.location.href = '/auth/login'), 50);
        }}
      >
        <LogoutOutlined style={{ fontSize: 13 }} />
        <span style={{ fontSize: 13, fontWeight: 500 }}>Logout</span>
      </div>
    ),
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
      style={{ minHeight: '100vh', overflow: 'hidden' }}
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
      <Layout style={{ marginLeft: collapsed ? 80 : 260, minHeight: '100vh' }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
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
          <Flex gap={12} align='center' style={{ marginRight: 30 }}>
            <Tooltip title='Notifications'>
              <Badge count={5} size='small'>
                <Button type='text' icon={<BellOutlined />} size='small' />
              </Badge>
            </Tooltip>
            <Tooltip title='Theme'>
              <Button
                size='middle'
                style={{ padding: '2px 8px' }}
                onClick={() => dispatch(toggleTheme())}
                type='text'
              >
                {mode === 'light' ? (
                  <Icon style={{}} icon={'material-symbols:dark-mode'} />
                ) : (
                  <Icon style={{}} icon={'material-symbols:light-mode'} />
                )}
              </Button>
            </Tooltip>

            <Tooltip title='Settings'>
              <Dropdown
                menu={{ items }}
                trigger={['click']}
                placement='bottomRight'
                overlayStyle={{ minWidth: 160 }}
              >
                <Button type='text' icon={<SettingOutlined />} size='small' />
                {/* <Avatar
                size={30}
                shape='square'
                icon={<UserOutlined />}
                style={{
                  cursor: 'pointer',

                  borderRadius: 6,
                  fontSize: 13,
                  }}
              /> */}
              </Dropdown>
            </Tooltip>
          </Flex>
        </Header>
        <Content
          style={{
            overflow: 'auto',
            height: 'calc(100vh - 64px)',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
