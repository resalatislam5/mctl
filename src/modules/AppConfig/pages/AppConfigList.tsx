import useCheckPermission from '../../../common/hooks/useCheckPermission';

import { ColorPicker, Form, Input, Row, Space, Typography } from 'antd';
import React, { useEffect } from 'react';
import FromSubmit from '../../../common/Button/FromSubmit';
import {
  FormImageUpload_V1,
  FormInputText,
} from '../../../common/Form/FormIInput';
import { sanitizeFormData } from '../../../common/utils/sanitizeFormData';
import { toUploadFileList } from '../../../common/utils/toUploadFileList ';
import {
  useGetAppConfigListQuery,
  useUpdateAppConfigMutation,
} from '../api/appConfigEndpoints';
import type { ICreateAppConfig } from '../types/appConfigTypes';

const { Text } = Typography;

const sectionTitle = (label: string) => (
  <Text
    style={{
      fontSize: 11,
      fontWeight: 500,
      color: 'rgba(0,0,0,0.45)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      display: 'block',
      marginBottom: 14,
    }}
  >
    {label}
  </Text>
);

const cardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #f0f0f0',
  borderRadius: 12,
  padding: '20px 22px',
  marginBottom: 12,
};

const fieldLabel = (text: string) => (
  <Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.55)' }}>{text}</Text>
);

const AppConfigList = () => {
  const { can_update } = useCheckPermission('APP_CONFIG');

  const { data } = useGetAppConfigListQuery();
  const [updateAppConfig, { isLoading: updating }] =
    useUpdateAppConfigMutation();

  const [form] = Form.useForm<ICreateAppConfig>();

  const { company_name, domain_name, support_email, address, phone, phone_2 } =
    data?.data || {};
  const onFinish = (values: ICreateAppConfig) => {
    const body = sanitizeFormData(values, { fileKeys: ['logo', 'favicon'] });
    updateAppConfig(body);
  };

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        logo: toUploadFileList(data?.data?.logo),
        favicon: toUploadFileList(data?.data?.favicon),
        company_name,
        domain_name,
        support_email,
        address,
        phone,
        phone_2,
      });
    }
  }, [
    data?.data,
    form,
    company_name,
    domain_name,
    support_email,
    address,
    phone,
    phone_2,
  ]);

  return (
    <div style={{ padding: '24px 28px', maxWidth: 760 }}>
      <Form form={form} layout='vertical' onFinish={onFinish}>
        {/* ── Brand assets ── */}
        <div style={{ marginBottom: 28 }}>
          {sectionTitle('Brand assets')}
          <div style={cardStyle}>
            <Row gutter={[8, 8]}>
              <FormImageUpload_V1
                label='Logo'
                name='logo'
                maxCount={1}
                accept='image/*'
              />
              <FormImageUpload_V1
                label='Favicon'
                name='favicon'
                maxCount={1}
                accept='image/*'
              />
            </Row>
          </div>
        </div>

        {/* ── Identity ── */}
        <div style={{ marginBottom: 28 }}>
          {sectionTitle('Identity')}
          <div style={cardStyle}>
            <Row gutter={[8, 8]}>
              <FormInputText name={'company_name'} label={'Company Name'} />
              <FormInputText name={'domain_name'} label={'Domain Name'} />
              <FormInputText name={'support_email'} label={'Support Email'} />
              <FormInputText name={'address'} label={'Address'} />
              <FormInputText name={'phone'} label={'Phone'} />
              <FormInputText name={'phone_2'} label={'Phone 2'} />
            </Row>
          </div>
        </div>

        {/* ── Theme ── */}
        <div style={{ marginBottom: 28 }}>
          {sectionTitle('Theme')}
          <div style={cardStyle}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '0 16px',
              }}
            >
              <Form.Item
                label={fieldLabel('Primary color')}
                name='primaryColor'
                style={{ marginBottom: 0 }}
              >
                <Space>
                  <ColorPicker size='middle' defaultValue='#1677ff' />
                  <Input
                    size='middle'
                    defaultValue='#1677ff'
                    style={{ width: 100 }}
                  />
                </Space>
              </Form.Item>

              <Form.Item
                label={fieldLabel('Accent color')}
                name='accentColor'
                style={{ marginBottom: 0 }}
              >
                <Space>
                  <ColorPicker size='middle' defaultValue='#52c41a' />
                  <Input
                    size='middle'
                    defaultValue='#52c41a'
                    style={{ width: 100 }}
                  />
                </Space>
              </Form.Item>
            </div>
          </div>
        </div>

        {can_update && <FromSubmit text='Update' loading={updating} />}
      </Form>
    </div>
  );
};

export default AppConfigList;
