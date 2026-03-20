import { PlusOutlined } from '@ant-design/icons';
import {
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Select,
  Upload,
  type FormItemProps,
  type SelectProps,
  type UploadFile,
  type UploadProps,
} from 'antd';
import type { Rule } from 'antd/es/form';
import type { RcFile } from 'antd/es/upload';
import type { Dayjs } from 'dayjs';
import { useState, type ChangeEvent } from 'react';

type Props = {
  label: string;
  name: string | (string | number)[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  layout?: 'vertical' | 'horizontal';
  rules?: Rule[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  size?: 'small' | 'middle' | 'large';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  allowClear?: boolean;
  readOnly?: boolean;
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
  allowClear = true,
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
          allowClear={allowClear}
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
  allowClear = true,
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
          allowClear={allowClear}
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
  allowClear = true,
  noStyleLabel,
  ...rest
}: Props & { value?: string | null; noStyleLabel?: string }) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        layout={layout}
        rules={[
          {
            required: required,
            message: `${noStyleLabel ? noStyleLabel : label} is required`,
          },

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
          allowClear={allowClear}
        />
      </Form.Item>
    </Col>
  );
};

export const FormInputDate = ({
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
  noStyleLabel,
  // value,
  allowClear = true,
  defaultValue,
  ...rest
}: Omit<Props, 'onChange' | 'defaultValue'> & {
  value?: string | null;
  noStyleLabel?: string;
  onChange?: (date: Dayjs | null) => void;
  defaultValue?: Dayjs | null;
}) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        layout={layout}
        rules={[
          {
            required: required,
            message: `${noStyleLabel ? noStyleLabel : label} is required`,
          },

          ...(rules || []),
        ]}
        {...rest}
      >
        <DatePicker
          style={{ width: '100%' }}
          type='text'
          placeholder={placeholder ? placeholder : `Enter Your ${label}`}
          disabled={disabled}
          size={size}
          onChange={onChange}
          // value={value || ''}
          allowClear={allowClear}
          defaultValue={defaultValue}
        />
      </Form.Item>
    </Col>
  );
};

export const FormInputNumber = ({
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
  allowClear = true,
  readOnly,
  noStyleLabel,
  ...rest
}: Props & { value?: string | null; noStyleLabel?: string }) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Form.Item
        name={name}
        label={label}
        layout={layout}
        rules={[
          {
            required: required,
            message: `${label ? label : noStyleLabel} is required`,
          },

          ...(rules || []),
        ]}
        {...rest}
      >
        <Input
          type='number'
          placeholder={placeholder ? placeholder : `Enter Your ${label}`}
          disabled={disabled}
          size={size}
          onChange={onChange}
          value={value || ''}
          allowClear={allowClear}
          readOnly={readOnly}
        />
      </Form.Item>
    </Col>
  );
};
export const FormInputMobile = ({
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
  allowClear = true,
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
          type='number'
          placeholder={placeholder ? placeholder : `Enter Your ${label}`}
          disabled={disabled}
          size={size}
          onChange={onChange}
          value={value || ''}
          allowClear={allowClear}
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
  allowClear = true,
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
          allowClear={allowClear}
          {...rest}
        />
      </Form.Item>
    </Col>
  );
};

interface ImageUploadProps {
  label: string;
  name: string;
  required?: boolean;
  option?: { label: string; value: string }[];
  placeholder?: string;
  accept?: string | undefined;
  type?: string;
  setFileList?: React.Dispatch<React.SetStateAction<UploadFile<any>[]>>;
  offPrefixCls?: boolean;
  fileList?: UploadFile<any>[];
  buttonText?: string;
  style?: React.CSSProperties | undefined;
  maxCount?: number | undefined;
  span?: number;
  md?: number;
  lg?: number;
  onRemove?:
    | ((file: UploadFile<any>) => void | boolean | Promise<void | boolean>)
    | undefined;
}
export const FormImageUpload_V1 = ({
  label,
  name,
  required,
  fileList,
  setFileList,
  offPrefixCls,
  buttonText,
  accept = 'image/*',
  style,
  maxCount,
  span = 24,
  md = 24,
  lg = 12,
  onRemove,
}: ImageUploadProps) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const getBase64 = (file: any): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as any);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
    );
  };

  // const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
  //   return setFileList ? setFileList(newFileList) : null;
  // };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    if (setFileList) {
      setFileList(Array.isArray(newFileList) ? newFileList : [newFileList]);
    }
  };
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{buttonText || 'Upload Logo'}</div>
    </button>
  );

  const handleCancel = () => setPreviewOpen(false);

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG or PNG files!');
      return Upload.LIST_IGNORE;
    }

    const fileSizeMB = file.size / 1024 / 1024;
    const isLt2M = fileSizeMB < 2;
    if (!isLt2M) {
      message.error(
        `Image must be smaller than 2MB! (Current size: ${fileSizeMB.toFixed(2)}MB)`,
      );
      return Upload.LIST_IGNORE;
    }

    return false;
  };

  return (
    <Col span={span} md={md} lg={lg}>
      <Form.Item
        label={label}
        name={name}
        rules={[
          { required: required || false, message: `Please input this field` },
        ]}
        valuePropName='fileList'
        getValueFromEvent={(e: any) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e?.fileList;
        }}
      >
        <Upload
          style={style}
          prefixCls={offPrefixCls ? '' : 'ant-custom-upload'}
          action={() =>
            new Promise((resolve) => {
              resolve('');
            })
          }
          beforeUpload={beforeUpload}
          accept={accept}
          maxCount={maxCount}
          listType='picture-card'
          fileList={fileList || []}
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={onRemove}
        >
          {fileList && fileList.length >= (maxCount || 1) ? null : uploadButton}
        </Upload>
      </Form.Item>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </Col>
  );
};

export const FormInputTextArea = ({
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
  allowClear = true,
  readOnly,
  rows = 2,
  ...rest
}: Props & {
  value?: string | null;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
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
        <Input.TextArea
          rows={rows}
          placeholder={placeholder ? placeholder : `Enter Your ${label}`}
          disabled={disabled}
          size={size}
          onChange={onChange}
          value={value || ''}
          allowClear={allowClear}
          readOnly={readOnly}
        />
      </Form.Item>
    </Col>
  );
};
