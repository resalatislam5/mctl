import { InfoCircleFilled } from '@ant-design/icons';
import {
  Alert,
  Button,
  Col,
  Form,
  Input,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import React from 'react';

const { Title, Text } = Typography;

interface ProfileFormValues {
  name: string;
  phoneNumber: string;
}

const ProfileSettings: React.FC = () => {
  const [form] = Form.useForm<ProfileFormValues>();

  const user = {
    username: 'resalat',
    name: 'Resalat Islam',
    email: 'resalat.m360ict@gmail.com',
    phone: '01765975545',
    phoneCode: '+88',
    type: 'ADMIN',
  };

  const handleFinish = (values: ProfileFormValues) => {
    console.log('Saved:', values);
  };
  return (
    <div>
      <Title level={5} style={{ marginBottom: 24, fontWeight: 700 }}>
        Profile Settings
      </Title>

      {/* Profile Hero */}
      <Space align='start' size={24} style={{ marginBottom: 28 }}>
        {/* Avatar */}
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: 10,
            border: '1px solid #e8e8e8',
            background: '#f9f9f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <svg
            width='88'
            height='88'
            viewBox='0 0 90 90'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='45' cy='32' r='18' fill='#FDDBB4' />
            <rect x='27' y='48' width='36' height='30' rx='6' fill='#E8F5E9' />
            <rect x='32' y='54' width='26' height='24' rx='4' fill='#fff' />
            <rect x='38' y='56' width='14' height='4' rx='2' fill='#E53E3E' />
            <ellipse cx='38' cy='33' rx='2' ry='2.5' fill='#3D2B1F' />
            <ellipse cx='52' cy='33' rx='2' ry='2.5' fill='#3D2B1F' />
            <path
              d='M40 40 Q45 44 50 40'
              stroke='#C87941'
              strokeWidth='1.2'
              fill='none'
              strokeLinecap='round'
            />
            <path
              d='M27 30 Q45 16 63 30'
              stroke='#5C3D1E'
              strokeWidth='3'
              fill='#5C3D1E'
              strokeLinecap='round'
            />
            <rect
              x='34'
              y='29'
              width='10'
              height='5'
              rx='2'
              fill='none'
              stroke='#3A3A3A'
              strokeWidth='1.2'
            />
            <rect
              x='46'
              y='29'
              width='10'
              height='5'
              rx='2'
              fill='none'
              stroke='#3A3A3A'
              strokeWidth='1.2'
            />
            <line
              x1='44'
              y1='31'
              x2='46'
              y2='31'
              stroke='#3A3A3A'
              strokeWidth='1.2'
            />
          </svg>
        </div>

        {/* Info */}
        <div>
          <Title level={3} style={{ margin: 0, marginBottom: 6 }}>
            {user.name}
          </Title>
          <Text
            type='secondary'
            style={{ fontSize: 14, display: 'block', marginBottom: 8 }}
          >
            E-mail: {user.email}
          </Text>
          <Space>
            <Text type='secondary' style={{ fontSize: 14 }}>
              Type:
            </Text>
            <Tag
              color='success'
              style={{
                fontWeight: 700,
                fontSize: 12,
                padding: '2px 10px',
              }}
            >
              {user.type}
            </Tag>
          </Space>
        </div>
      </Space>

      {/* Additional Info Bar */}
      <Alert
        message='Additional Information:'
        type='info'
        showIcon
        icon={<InfoCircleFilled style={{ color: '#2563eb' }} />}
        style={{ marginBottom: 22, borderRadius: 8 }}
      />

      {/* Form */}
      <Form
        form={form}
        layout='vertical'
        initialValues={{
          name: user.name,
          phoneNumber: user.phone,
        }}
        onFinish={handleFinish}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label='Username (Read Only)'>
              <Input value={user.username} disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder='Enter your name' />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label='Email Address (Read Only)'>
              <Input value={user.email} disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Phone Number'
              name='phoneNumber'
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input addonBefore={user.phoneCode} placeholder='Phone number' />
            </Form.Item>
          </Col>
        </Row>

        <Space style={{ marginTop: 8 }}>
          <Button type='primary' htmlType='submit'>
            Save Changes
          </Button>
          <Button onClick={() => form.resetFields()}>Cancel</Button>
        </Space>
      </Form>
    </div>
  );
};

export default ProfileSettings;
