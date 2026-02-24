import { Card } from 'antd';
import UserInputs from './UserInputs';
import { useForm } from 'antd/es/form/Form';
import type { ICreateUser } from '../types/userTypes';
import { useCreateUserMutation } from '../api/userEndpoints';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateUser = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateUserMutation();

  const onFinish = (values: ICreateUser) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };
  return (
    <Card size='small' className='modal-container'>
      <UserInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateUser;
