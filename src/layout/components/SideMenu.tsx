import { Divider, Image, Layout, Menu, theme, Typography } from 'antd';
import type { SliderProps } from 'antd/es/slider';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useBreakpoint } from '../../common/utils/constant';
import { navItems, renderItems } from '../utils/navItems';

interface Props extends SliderProps {
  handleCollapse: (value: boolean) => void;
  collapsed: boolean;
  startResize: () => void;
  width?: string | number;
  style?: React.CSSProperties;
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
  const [time, setTime] = useState('');

  const onOpenChange = useCallback((keys: string[]) => setOpenKeys(keys), []);

  const filteredMenuItems = () => {
    return navItems;
  };

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

  useEffect(() => {
    const tick = () => setTime(dayjs().format('ddd DD MMM YYYY hh:mm:ss A'));

    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={width}
      style={{ ...style, background: colorBgContainer }}
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
            <Typography.Text type='secondary'>{time}</Typography.Text>
          </>
        )}
        <Divider style={{ margin: '10px 0 0px 0' }} />
      </div>
      <Menu
        mode='inline'
        selectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={[...filteredMenuItems()].map(renderItems)}
        style={{ height: '100%', borderRight: 0 }}
      />
    </Sider>
  );
};

export default SideMenu;
