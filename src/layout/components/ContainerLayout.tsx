import { Button, Col, Flex, Row, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import type { ReactNode } from 'react';
import { FormInputText } from '../../common/Form/FormIInput';
import Iconify from '../../common/Table/Iconify';
import DynamicBreadcrumb from '../../common/ui/DynamicBreadcrumb';

interface Props {
  children: ReactNode;
  title: string;
  options?: {
    showButton?: boolean;
    showSearch?: boolean;
  };
  buttonText?: string;
  onClick?: () => void;
}
const ContainerLayout = ({
  children,
  title,
  options,
  buttonText = 'Create',
  onClick,
}: Props) => {
  const { showButton = true, showSearch = true } = options || {};
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Flex
        align='center'
        justify='space-between'
        style={{ margin: '24px 16px 0px 24px' }}
      >
        <h1>{title}</h1>
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
        {/* <h1>{title}</h1> */}
        <Row align={'middle'} gutter={[12, 12]}>
          <Col>
            {showButton && (
              <Button onClick={onClick} type='primary' size='large'>
                <Iconify icon='ic:baseline-plus' />
                {buttonText}
              </Button>
            )}
          </Col>

          {showSearch && (
            <FormInputText lg={5} label={'search'} name={'search'} noStyle />
          )}
        </Row>
        <div style={{ marginTop: 20 }}>{children}</div>
      </Content>
    </div>
  );
};

export default ContainerLayout;
