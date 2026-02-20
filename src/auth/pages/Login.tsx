import { Button, Col, Flex, Form, Row, Space, Typography } from 'antd';
import { Link, useNavigate } from 'react-router';
import {
  FormInputEmail,
  FormInputPassword,
} from '../../common/Form/FormIInput';
import { useBreakpoint } from '../../common/utils/constant';
import { useLoginMutation } from '../api/authEndpoint';
import type { LoginTypes } from '../types/authTypes';

const { Text } = Typography;
const Login = () => {
  const { sm } = useBreakpoint();
  const [form] = Form.useForm();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onFinish = (values: LoginTypes) => {
    login(values)
      .unwrap()
      .then((data) => {
        if (data.data) {
          localStorage.setItem('mctl_token', data?.data?.token);
          navigate('/');
        }
      });
  };

  return (
    <Flex style={{ flexDirection: 'column' }} gap={40}>
      <Space orientation='vertical'>
        <h1 style={{ fontSize: sm ? 50 : 40 }}>Welcome Back!</h1>
        <Text>Please enter log in details below</Text>
      </Space>
      <Form form={form} onFinish={onFinish}>
        <Row>
          <FormInputEmail lg={24} label='Email' name='email' required />
          <FormInputPassword
            lg={24}
            label='Password'
            name='password'
            required
            style={{ marginBottom: 10 }}
          />
          <Flex justify='end' style={{ width: '100%' }}>
            <Link
              to={'/forgot-password'}
              style={{
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              Forgot Password?
            </Link>
          </Flex>
          <Col xs={24}>
            <Button size='large' type='primary' htmlType='submit' block>
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
};

export default Login;
