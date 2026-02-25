import {
  Col,
  Form,
  Input,
  Select,
  type FormItemProps,
  type SelectProps,
} from 'antd';
import type { ChangeEvent } from 'react';

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  layout?: 'vertical' | 'horizontal';
  rules?: Record<string, string>[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  size?: 'small' | 'middle' | 'large';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & FormItemProps;

export const FormInputEmail = ({
  label,
  name,
  placeholder,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  rules,
  size = 'middle',
  onChange,
  ...rest
}: Props) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        layout={layout}
        rules={[
          { required: required, message: `${label} is required` },
          { type: 'email' },
          ...(rules || []),
        ]}
        {...rest}
      >
        <Input
          type='email'
          autoComplete='email'
          placeholder={placeholder ? placeholder : `Enter Your ${label}`}
          disabled={disabled}
          size={size}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};

export const FormInputPassword = ({
  label,
  name,
  placeholder,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  rules,
  size = 'middle',
  onChange,
  ...rest
}: Props) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        layout={layout}
        rules={[
          { required: required, message: `${label} is required` },

          ...(rules || []),
        ]}
        {...rest}
      >
        <Input.Password
          type='password'
          autoComplete='password'
          placeholder={placeholder ? placeholder : `Enter Your ${label}`}
          disabled={disabled}
          size={size}
          onChange={onChange}
        />
      </Form.Item>
    </Col>
  );
};

export const FormInputText = ({
  label,
  name,
  placeholder,
  required,
  disabled,
  layout = 'vertical',
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  rules,
  size = 'middle',
  onChange,
  value,
  ...rest
}: Props & { value?: string | null }) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        layout={layout}
        rules={[
          { required: required, message: `${label} is required` },

          ...(rules || []),
        ]}
        {...rest}
      >
        <Input
          type='text'
          placeholder={placeholder ? placeholder : `Enter Your ${label}`}
          disabled={disabled}
          size={size}
          onChange={onChange}
          value={value || ''}
        />
      </Form.Item>
    </Col>
  );
};

export const FormInputSelect = ({
  label,
  name,
  placeholder,
  required,
  disabled,
  layout = 'vertical',
  options,
  xs = 24,
  sm = 24,
  md = 24,
  lg = 12,
  xl,
  xxl,
  rules,
  size = 'middle',
  onChange,
  ...rest
}: Props & SelectProps) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        layout={layout}
        rules={[
          { required, message: `${label} is required` },
          ...(rules || []),
        ]}
      >
        <Select
          placeholder={placeholder || `Select ${label}`}
          disabled={disabled}
          size={size}
          options={options}
          onChange={onChange}
          allowClear
          {...rest}
        />
      </Form.Item>
    </Col>
  );
};
