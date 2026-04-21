import {
  BgColorsOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Card, Divider, Layout, Menu, theme, Typography } from 'antd';
import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router';

const { Title } = Typography;
const { Sider, Content } = Layout;

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const menuItems = [
    {
      key: '/profile',
      icon: <UserOutlined />,
      label: <Link to='/profile'>Profile Settings</Link>,
    },
    {
      key: '/profile/password',
      icon: <LockOutlined />,
      label: <Link to='/profile/password'>Change Password</Link>,
    },
    {
      key: '/profile/themes',
      icon: <BgColorsOutlined />,
      label: <Link to='/profile/themes'>Themes</Link>,
    },
  ];

  const { token } = theme.useToken();
  return (
    <div style={{ padding: 32 }}>
      <Card
        style={{ maxWidth: 960, borderRadius: 12 }}
        bodyStyle={{ padding: 0 }}
      >
        <Layout style={{ borderRadius: 12, overflow: 'hidden' }}>
          {/* Sidebar */}
          <Sider
            width={220}
            style={{
              background: token.colorBgContainer,
              // borderRight: '1px solid #f0f0f0',
              borderRadius: '12px 0 0 12px',
            }}
          >
            <div style={{ padding: '24px 20px 16px' }}>
              <Title level={5} style={{ margin: 0, fontWeight: 700 }}>
                Account Settings
              </Title>
            </div>
            <Menu
              mode='inline'
              selectedKeys={[location.pathname]}
              items={menuItems}
              style={{ border: 'none', fontSize: 14 }}
            />
          </Sider>
          <Divider
            type='vertical'
            style={{
              margin: 0,
            }}
          />
          {/* Main Content */}
          <Content
            style={{ padding: '28px 32px', background: token.colorBgContainer }}
          >
            {children}
          </Content>
        </Layout>
      </Card>
    </div>
  );
};

export default ProfileLayout;
