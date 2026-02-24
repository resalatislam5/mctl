/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SelectProps } from 'antd';
import { Col, Empty, Form, Select, Spin } from 'antd';
import {
  useGetRoleSelectQuery,
  useGetUserSelectQuery,
} from './SelectEndpoints';

type Props = {
  label: string;
  name: string;
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
};

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
