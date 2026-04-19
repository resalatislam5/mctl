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

const AppConfigList = () => {
  const { can_update } = useCheckPermission('APP_CONFIG');

  const { data } = useGetAppConfigListQuery();
  const [updateAppConfig, { isLoading: updating }] =
    useUpdateAppConfigMutation();

  const [form] = Form.useForm<ICreateAppConfig>();

  const {
    company_name,
    domain_name,
    support_email,
    address,
    phone,
    phone_2,
    enrollment_color,
    short_company_name,
    seal_stamp,
    favicon,
    logo,
  } = data?.data || {};
  const onFinish = (values: ICreateAppConfig) => {
    const body = sanitizeFormData(values, {
      fileKeys: ['logo', 'favicon', 'seal_stamp'],
    });
    updateAppConfig(body);
  };

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        logo: toUploadFileList(logo),
        favicon: toUploadFileList(favicon),
        company_name,
        domain_name,
        support_email,
        address,
        phone,
        phone_2,
        enrollment_color,
        short_company_name,
        seal_stamp: toUploadFileList(seal_stamp),
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
    enrollment_color,
    short_company_name,
    seal_stamp,
    favicon,
    logo,
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
              <FormImageUpload_V1
                label='Seal Stamp'
                name='seal_stamp'
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
              <FormInputText
                name={'short_company_name'}
                label={'Short Company Name'}
              />
              <FormInputText name={'domain_name'} label={'Domain Name'} />
              <FormInputText name={'support_email'} label={'Support Email'} />
              <FormInputText name={'address'} label={'Address'} />
              <FormInputText name={'phone'} label={'Phone'} />
              <FormInputText name={'phone_2'} label={'Secondary Phone'} />
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
              {/* <Form.Item
                label={'Enrollment Form Color'}
                name='enrollment_color'
                style={{ marginBottom: 0 }}
              >
                <Space>
                  <ColorPicker size='middle' />
                  <Input
                    size='middle'
                    placeholder='#03645a'
                    style={{ width: 100 }}
                  />
                </Space>
              </Form.Item> */}
              <Form.Item
                label='Enrollment Form Color'
                name='enrollment_color'
                style={{ marginBottom: 0 }}
              >
                <Form.Item noStyle shouldUpdate>
                  {({ getFieldValue, setFieldsValue }) => {
                    const color = getFieldValue('enrollment_color');

                    return (
                      <Space>
                        <ColorPicker
                          value={color}
                          onChange={(color) => {
                            setFieldsValue({
                              enrollment_color: color.toHexString(),
                            });
                          }}
                        />

                        <Input
                          size='middle'
                          placeholder='#03645a'
                          style={{ width: 100 }}
                          value={color}
                          onChange={(e) => {
                            setFieldsValue({
                              enrollment_color: e.target.value,
                            });
                          }}
                        />
                      </Space>
                    );
                  }}
                </Form.Item>
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
