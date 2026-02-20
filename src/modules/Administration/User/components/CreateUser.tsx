import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { ICreateUser } from '../types/userTypes';
import UserInputs from './UserInputs';

const CreateUser = () => {
  const [form] = useForm();
  const onFinish = (values: ICreateUser) => {
    console.log(values);
  };
  return (
    <Card size='small' className='modal-container'>
      <UserInputs onFinish={onFinish} form={form} />
    </Card>
  );
};

export default CreateUser;
