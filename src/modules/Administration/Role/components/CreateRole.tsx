import { Card, Form } from 'antd';
import RoleInputs from './RoleInputs';
import type { ICreateRole } from '../types/roleTypes';
import { useCreateRoleMutation } from '../api/roleEndpoints';

const CreateRole = () => {
  const [form] = Form.useForm();

  const [createRole, { isLoading }] = useCreateRoleMutation();
  const onFinish = (values: ICreateRole) => {
    console.log('Form Values:', values);
    createRole(values)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };
  return (
    <Card className='modal-container'>
      <RoleInputs form={form} onFinish={onFinish} loading={isLoading} />
    </Card>
  );
};

export default CreateRole;
