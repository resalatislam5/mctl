import { Button, Col, Flex, Input, Row, theme, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import { useQueryParams } from '../../common/hooks/useQueryParams';
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
  additionalFilter?: ReactNode;
  onClick?: () => void;
}
const ContainerLayout = ({
  children,
  title,
  options,
  buttonText = 'Create',
  onClick,
  additionalFilter,
}: Props) => {
  const { showButton = true, showSearch = true } = options || {};
  const [searchParams] = useSearchParams();
  const { setQuery, query } = useQueryParams();
  const [search, seSearch] = useState(searchParams.get('search'));
  const debouncedValue = useDebounce(search);

  const updateSearchQuery = useCallback(() => {
    const value = debouncedValue?.trim();

    if (!value) {
      if (!query.search) return;
      setQuery({ search: '' });
      return;
    }

    if (query.search === value) return;

    setQuery({ search: value });
  }, [debouncedValue, query.search, setQuery]);

  useEffect(() => {
    updateSearchQuery();
  }, [updateSearchQuery]);

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
        {/* <h1>{title}</h1> */}

        <Row align={'middle'} gutter={[12, 12]}>
          {showButton && (
            <Col>
              <Button onClick={onClick} type='primary' size='middle'>
                <Iconify icon='ic:baseline-plus' />
                {buttonText}
              </Button>
            </Col>
          )}

          {showSearch && (
            <Col xs={24} sm={8} lg={4}>
              <Input
                onChange={(e) => seSearch(e.target.value)}
                name={'search'}
                value={search || ''}
                placeholder='Search'
              />
            </Col>
          )}
          {additionalFilter}
        </Row>

        <div style={{ marginTop: 20 }}>{children}</div>
      </Content>
    </div>
  );
};

export default ContainerLayout;
