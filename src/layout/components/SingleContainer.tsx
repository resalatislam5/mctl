import { Flex, theme, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { type ReactNode } from 'react';
import DynamicBreadcrumb from '../../common/ui/DynamicBreadcrumb';

interface Props {
  children: ReactNode;
  title: string;
  options?: {
    showButton?: boolean;
    showSearch?: boolean;
  };
  buttonText?: string;
  additionalFilter?: ReactNode;
  onClick?: () => void;
}
const SingleContainer = ({ children, title }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Flex
        align='center'
        justify='space-between'
        style={{ margin: '24px 16px 0px 24px' }}
        wrap
      >
        <Typography.Title style={{ margin: 0 }} level={2}>
          {title}
        </Typography.Title>
        <DynamicBreadcrumb />
      </Flex>

      <Content
        style={{
          margin: '24px 16px',
          padding: 16,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <div style={{ marginTop: 20 }}>{children}</div>
      </Content>
    </div>
  );
};

export default SingleContainer;
