import {
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
  theme,
  Typography,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import dayjs from 'dayjs';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import { useReactToPrint } from 'react-to-print';
import CommonButton from '../../common/Button/CommonButton';
import { useQueryParams } from '../../common/hooks/useQueryParams';
import DynamicBreadcrumb from '../../common/ui/DynamicBreadcrumb';
import { cleanQuery } from '../../common/utils/cleanQuery';
import { datePresets } from '../../common/utils/constant';
import useDebounce from '../../common/utils/debounced';
import { dateForPost } from '../../common/utils/helper.function';

interface Props {
  children: ReactNode;
  title: string;
  options?: {
    showSearch?: boolean;
    showDateRange?: boolean;
  };
  buttonText?: string;
  onClick?: () => void;
  additionalFilter?: ReactNode;
}

type AuditQuery = {
  limit: number;
  skip: number;
  search?: string;
  from_date?: string;
  to_date?: string;
};

const ReportContainer = ({
  children,
  title,
  options,
  additionalFilter,
}: Props) => {
  const { showSearch = false, showDateRange = true } = options || {};
  const [searchParams, setSearchParams] = useSearchParams();
  const { query, setQuery } = useQueryParams<AuditQuery>();
  const [search, seSearch] = useState(searchParams.get('search'));
  const debouncedValue = useDebounce(search);

  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  useEffect(() => {
    setSearchParams((prev) => {
      const prevObj: Record<string, string> = {};
      prev.forEach((value, key) => {
        prevObj[key] = value;
      });

      const updated = cleanQuery({
        ...prevObj,
        search: encodeURIComponent(debouncedValue || ''),
      });

      return updated;
    });
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
        <Flex wrap gap={8}>
          <Row style={{ flexGrow: 1 }} align={'middle'} gutter={[8, 8]}>
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
            {showDateRange && (
              <Col xs={24} sm={8} lg={6}>
                <Form.Item
                  name={'date'}
                  label={'Date'}
                  rules={[{ required: true, message: `Date is required` }]}
                  layout='vertical'
                >
                  <DatePicker.RangePicker
                    onChange={(e) =>
                      setQuery({
                        from_date: dateForPost(e?.[0]),
                        to_date: dateForPost(e?.[1]),
                      })
                    }
                    defaultValue={[
                      query.from_date ? dayjs(query.from_date) : null,
                      query.to_date ? dayjs(query.to_date) : null,
                    ]}
                    presets={datePresets}
                    name={'date'}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            )}
            {additionalFilter}
          </Row>

          <CommonButton
            onClick={handlePrint}
            text='Print'
            icon='material-symbols-light:print-outline'
          />
        </Flex>

        <div style={{ marginTop: 20 }} ref={contentRef}>
          {children}
        </div>
      </Content>
    </div>
  );
};

export default ReportContainer;
