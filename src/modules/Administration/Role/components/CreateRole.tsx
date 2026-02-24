import { Card, Form } from 'antd';
import RoleInputs from './RoleInputs';
import type { ICreateRole } from '../types/roleTypes';
import { useCreateRoleMutation } from '../api/roleEndpoints';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateRole = () => {
  const [form] = Form.useForm();

  const [createRole, { isLoading }] = useCreateRoleMutation();
  const onFinish = (values: ICreateRole) => {
    const { permissions, ...rest } = values;
    const body = sanitizeObjectValue({
      ...rest,
      permissions: permissions?.map((item) => {
        return item?.selected
          ? {
              module_id: item.module_id,
              can_create: item.can_create || false,
              can_read: item.can_read || false,
              can_update: item.can_update || false,
              can_delete: item.can_delete || false,
            }
          : undefined;
      }),
    });

    createRole(body)
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
