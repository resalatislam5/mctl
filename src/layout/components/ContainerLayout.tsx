import { Button, Col, Flex, Input, Row, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import Iconify from '../../common/Table/Iconify';
import DynamicBreadcrumb from '../../common/ui/DynamicBreadcrumb';
import useDebounce from '../../common/utils/debounced';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, seSearch] = useState(searchParams.get('search'));
  const debouncedValue = useDebounce(search);

  useEffect(() => {
    setSearchParams({ search: debouncedValue || '' });
  }, [debouncedValue, setSearchParams]);

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
              <Button onClick={onClick} type='primary' size='middle'>
                <Iconify icon='ic:baseline-plus' />
                {buttonText}
              </Button>
            )}
          </Col>

          {showSearch && (
            <Col xs={24} sm={8} lg={6}>
              <Input
                onChange={(e) => seSearch(e.target.value)}
                name={'search'}
                value={search || ''}
                placeholder='Search'
              />
            </Col>
          )}
        </Row>

        <div style={{ marginTop: 20 }}>{children}</div>
      </Content>
    </div>
  );
};

export default ContainerLayout;
