import type { FormItemProps, SelectProps } from 'antd';
import { Col, Empty, Form, Select, Space, Spin, Typography } from 'antd';
import {
  useGetAccountSelectQuery,
  useGetAgentSelectQuery,
  useGetBatchSelectQuery,
  useGetCountrySelectQuery,
  useGetCourseSelectQuery,
  useGetDistrictSelectQuery,
  useGetDivisionSelectQuery,
  useGetEnrollmentSelectQuery,
  useGetHeadSelectQuery,
  useGetPackageSelectQuery,
  useGetRoleSelectQuery,
  useGetStudentSelectQuery,
  useGetUpazilaSelectQuery,
  useGetUserSelectQuery,
} from './SelectEndpoints';
import type { ICreateAccount } from '../../modules/Account/Account/types/accountTypes';

type Props = {
  label: string;
  // name: string;
  name: string | number | (string | number)[];
  required?: boolean;
  disabled?: boolean;
  layout?: 'horizontal' | 'vertical';
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  size?: SelectProps['size'];
  mode?: SelectProps['mode'];
  onChange?: (value: any) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  placeholder?: string;
} & FormItemProps;

export const SelectUser = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  onChange,
  ...rest
}: Props) => {
  const { data, isLoading } = useGetUserSelectQuery();

  // If API returns empty array or undefined
  const options = data?.data?.length
    ? data.data.map(({ name, _id }) => ({
        label: name,
        value: _id,
      }))
    : [];

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
        {...rest}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={options}
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
          style={{ width: '100%' }}
        />
      </Form.Item>
    </Col>
  );
};

export const SelectRole = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  onChange,
}: Props) => {
  const { data, isLoading } = useGetRoleSelectQuery();

  // If API returns empty array or undefined
  const options = data?.data?.length
    ? data.data.map(({ name, _id }) => ({
        label: name,
        value: _id,
      }))
    : [];

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={options}
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};

export const SelectCountry = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  onChange,
  ...rest
}: Props) => {
  const { data, isLoading } = useGetCountrySelectQuery();

  // If API returns empty array or undefined
  const options = data?.data?.length
    ? data.data.map(({ name, _id }) => ({
        label: name,
        value: _id,
      }))
    : [];

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
        {...rest}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={options}
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectDivision = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  onChange,
  country_id,
  option,
}: Props & {
  country_id?: string;
  option?: Record<string, string | boolean>;
}) => {
  const { data, isLoading } = useGetDivisionSelectQuery({ country_id }, option);

  // If API returns empty array or undefined
  const options = data?.data?.length
    ? data.data.map(({ name, _id }) => ({
        label: name,
        value: _id,
      }))
    : [];

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={options}
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectDistrict = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  onChange,
  division_id,
  option,
}: Props & {
  division_id?: string;
  option?: Record<string, string | boolean>;
}) => {
  const { data, isLoading } = useGetDistrictSelectQuery(
    { division_id },
    option,
  );

  // If API returns empty array or undefined
  const options = data?.data?.length
    ? data.data.map(({ name, _id }) => ({
        label: name,
        value: _id,
      }))
    : [];

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={options}
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};

export const SelectCourse = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  onChange,
}: Props & {}) => {
  const { data, isLoading } = useGetCourseSelectQuery({});

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ name, price, _id }) => ({
                  label: (
                    <Space size='small' title={`${name}- ${price}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {name}
                      </Typography.Text>

                      <Typography.Text
                        style={{ fontSize: 12 }}
                        type='secondary'
                      >
                        - {price}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${name}- ${price}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectUpazila = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  district_id,
  option,
  onChange,
}: Props & {
  district_id?: string;
  option?: Record<string, string | boolean>;
}) => {
  const { data, isLoading } = useGetUpazilaSelectQuery({ district_id }, option);

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ name, code, _id }) => ({
                  label: (
                    <Space size='small' title={`${name}- ${code}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {name}
                      </Typography.Text>

                      <Typography.Text
                        style={{ fontSize: 12 }}
                        type='secondary'
                      >
                        - {code}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${name}- ${code}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectBatch = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,

  onChange,
}: Props) => {
  const { data, isLoading } = useGetBatchSelectQuery({});

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ batch_no, _id }) => ({
                  label: (
                    <Space size='small' title={`${batch_no}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {batch_no}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${batch_no}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectPackage = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,

  onChange,
}: Props) => {
  const { data, isLoading } = useGetPackageSelectQuery({});

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ name, net_price, _id }) => ({
                  label: (
                    <Space size='small' title={`${name} -${net_price}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {name}
                      </Typography.Text>
                      <Typography.Text
                        style={{ fontSize: 12 }}
                        type='secondary'
                      >
                        - {net_price}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${name} - ${net_price}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectStudent = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  onChange,
  ...rest
}: Props) => {
  const { data, isLoading } = useGetStudentSelectQuery({});

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
        {...rest}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          style={{ width: '100%' }}
          options={
            data?.data?.length
              ? data.data.map(({ name, code, _id }) => ({
                  label: (
                    <Space size='small' title={`${name}- ${code}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {name}
                      </Typography.Text>

                      <Typography.Text
                        style={{ fontSize: 12 }}
                        type='secondary'
                      >
                        - {code}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${name}- ${code}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectAgent = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,

  onChange,
}: Props) => {
  const { data, isLoading } = useGetAgentSelectQuery({});

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ name, email, _id }) => ({
                  label: (
                    <Space size='small' title={`${name}- ${email}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {name}
                      </Typography.Text>

                      <Typography.Text
                        style={{ fontSize: 12 }}
                        type='secondary'
                      >
                        - {email}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${name}- ${email}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectEnrollment = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  student_id,
  onChange,
  option,
}: Props & {
  student_id?: string;
  option?: Record<string, string | boolean>;
}) => {
  const { data, isLoading } = useGetEnrollmentSelectQuery(
    { student_id },
    option,
  );

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ code, total_paid, total_amount, _id }) => ({
                  label: (
                    <Space
                      size='small'
                      title={`${code} - ${Number(total_amount || 0) - Number(total_paid || 0)}`}
                    >
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {code}
                      </Typography.Text>
                      -
                      <Typography.Text style={{ fontSize: 12, color: 'red' }}>
                        {Number(total_amount || 0) - Number(total_paid || 0)}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${code}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
export const SelectAccount = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  payment_method,
  onChange,
  option,
}: Props & {
  payment_method?: ICreateAccount['account_type'];
  option?: Record<string, string | boolean>;
}) => {
  const { data, isLoading } = useGetAccountSelectQuery(
    { payment_method },
    option,
  );

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required, message: `${label} is required` }]}
        layout={layout}
      >
        <Select
          placeholder={`Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ name, _id }) => ({
                  label: (
                    <Space size='small' title={`${name}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {name}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${name}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};

export const SelectHead = ({
  label,
  name,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  size = 'middle',
  mode,
  noStyleLabel,
  onChange,
  placeholder,
  ...rest
}: Props & {
  noStyleLabel?: string;
}) => {
  const { data, isLoading } = useGetHeadSelectQuery({});

  // If API returns empty array or undefined

  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        rules={[
          { required, message: `${label ? label : noStyleLabel} is required` },
        ]}
        layout={layout}
        {...rest}
      >
        <Select
          placeholder={placeholder ? placeholder : `Select ${label}`}
          disabled={disabled || isLoading}
          loading={isLoading}
          size={size}
          options={
            data?.data?.length
              ? data.data.map(({ name, _id }) => ({
                  label: (
                    <Space size='small' title={`${name}`}>
                      <Typography.Text style={{ fontSize: 14 }} strong>
                        {name}
                      </Typography.Text>
                    </Space>
                  ),
                  value: _id,
                  searchText: `${name}`,
                }))
              : []
          }
          mode={mode}
          allowClear
          showSearch
          filterOption={(input, option) =>
            (option?.searchText ?? '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          notFoundContent={isLoading ? <Spin size='small' /> : <Empty />}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};
