import {
  BgColorsOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Card, Layout, Menu, Typography } from 'antd';
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router';

const { Title } = Typography;
const { Sider, Content } = Layout;

type MenuKey = 'profile' | 'password' | 'themes';

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  const [selectedKey, setSelectedKey] = useState<MenuKey>('profile');

  const menuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: <Link to='/profile'>Profile Settings</Link>,
    },
    {
      key: 'password',
      icon: <LockOutlined />,
      label: <Link to='/profile/password'>Change Password</Link>,
    },
    {
      key: 'themes',
      icon: <BgColorsOutlined />,
      label: <Link to='/profile/themes'>Themes</Link>,
    },
  ];

  return (
    <div style={{ background: '#f5f5f5', padding: 32 }}>
      <Card
        style={{ maxWidth: 960, borderRadius: 12 }}
        bodyStyle={{ padding: 0 }}
      >
        <Layout
          style={{ borderRadius: 12, overflow: 'hidden', background: '#fff' }}
        >
          {/* Sidebar */}
          <Sider
            width={220}
            style={{
              background: '#fff',
              borderRight: '1px solid #f0f0f0',
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
              selectedKeys={[selectedKey]}
              onClick={({ key }) => setSelectedKey(key as MenuKey)}
              items={menuItems}
              style={{ border: 'none', fontSize: 14 }}
            />
          </Sider>

          {/* Main Content */}
          <Content style={{ padding: '28px 32px', background: '#fff' }}>
            {children}
          </Content>
        </Layout>
      </Card>
    </div>
  );
};

export default ProfileLayout;
