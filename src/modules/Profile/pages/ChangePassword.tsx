import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  SafetyOutlined,
} from '@ant-design/icons';
import {
  Alert,
  Button,
  Col,
  Form,
  Input,
  Progress,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import React, { useState } from 'react';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import { useChangePasswordMutation } from '../api/profileEndpoints';
import type { IChangePassword } from '../types/profileTypes';

const { Title, Text } = Typography;

interface ChangePasswordFormValues {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

const getPasswordStrength = (
  password: string,
): { percent: number; label: string; color: string } => {
  if (!password) return { percent: 0, label: '', color: '#e8e8e8' };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score === 1) return { percent: 25, label: 'Weak', color: '#ff4d4f' };
  if (score === 2) return { percent: 50, label: 'Fair', color: '#faad14' };
  if (score === 3) return { percent: 75, label: 'Good', color: '#1677ff' };
  if (score === 4) return { percent: 100, label: 'Strong', color: '#52c41a' };
  return { percent: 0, label: '', color: '#e8e8e8' };
};

const ChangePassword: React.FC = () => {
  const [changePassword] = useChangePasswordMutation();
  const [form] = Form.useForm<ChangePasswordFormValues>();
  const [new_password, setNew_password] = useState('');

  const user = {
    name: 'Resalat Islam',
    email: 'resalat.m360ict@gmail.com',
    type: 'ADMIN',
  };

  const strength = getPasswordStrength(new_password);

  const handleFinish = async (values: IChangePassword) => {
    const body = sanitizeObjectValue(values);
    await changePassword(body)
      .unwrap()
      .then(() => {
        form.resetFields();
        setNew_password('');
      });
  };

  return (
    <div>
      <Title level={5} style={{ marginBottom: 24, fontWeight: 700 }}>
        Change Password
      </Title>

      {/* Profile Hero */}
      <Space align='start' size={24} style={{ marginBottom: 28 }}>
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

      {/* Info Bar */}
      <Alert
        message='Update your password below. Use a strong password to keep your account secure.'
        type='info'
        showIcon
        icon={<SafetyOutlined style={{ color: '#2563eb' }} />}
        style={{ marginBottom: 24, borderRadius: 8 }}
      />

      {/* Form */}
      <Form
        form={form}
        layout='vertical'
        onFinish={handleFinish}
        autoComplete='off'
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label='Current Password'
              name='old_password'
              rules={[
                {
                  required: true,
                  message: 'Please enter your current password',
                },
              ]}
            >
              <Input.Password
                placeholder='Enter current password'
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label='New Password'
              name='new_password'
              rules={[
                {
                  required: true,
                  message: 'Please enter a new password',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters',
                },
              ]}
            >
              <Input.Password
                placeholder='Enter new password'
                onChange={(e) => setNew_password(e.target.value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            {/* Password Strength */}
            {new_password && (
              <div style={{ marginTop: -16, marginBottom: 20 }}>
                <Progress
                  percent={strength.percent}
                  showInfo={false}
                  strokeColor={strength.color}
                  size='small'
                  style={{ marginBottom: 4 }}
                />
                <Text style={{ fontSize: 12, color: strength.color }}>
                  Strength: <strong>{strength.label}</strong>
                </Text>
              </div>
            )}
          </Col>

          <Col span={12}>
            <Form.Item
              label='Confirm New Password'
              name='confirm_password'
              dependencies={['new_password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your new password',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('new_password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match'));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder='Re-enter new password'
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Password Tips */}
        <div
          style={{
            background: '#f9fafb',
            border: '1px solid #e8e8e8',
            borderRadius: 8,
            padding: '12px 16px',
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: '#555',
              display: 'block',
              marginBottom: 6,
            }}
          >
            Password requirements:
          </Text>
          {[
            {
              rule: 'At least 8 characters',
              met: new_password.length >= 8,
            },
            {
              rule: 'One uppercase letter (A–Z)',
              met: /[A-Z]/.test(new_password),
            },
            { rule: 'One number (0–9)', met: /[0-9]/.test(new_password) },
            {
              rule: 'One special character (!@#$...)',
              met: /[^A-Za-z0-9]/.test(new_password),
            },
          ].map((item) => (
            <div
              key={item.rule}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 3,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: item.met ? '#16a34a' : '#d1d5db',
                  flexShrink: 0,
                  transition: 'background .2s',
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: item.met ? '#16a34a' : '#9ca3af',
                  transition: 'color .2s',
                }}
              >
                {item.rule}
              </Text>
            </div>
          ))}
        </div>

        <Space>
          <Button
            type='primary'
            htmlType='submit'
            style={{ background: '#16a34a', borderColor: '#16a34a' }}
          >
            Update Password
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
              setNew_password('');
            }}
          >
            Cancel
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default ChangePassword;
