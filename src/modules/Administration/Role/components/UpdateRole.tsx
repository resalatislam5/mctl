import { Card, Form } from 'antd';
import {
  useGetSingleRoleQuery,
  useUpdateRoleMutation,
} from '../api/roleEndpoints';
import type { ICreateRole } from '../types/roleTypes';
import RoleInputs from './RoleInputs';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const UpdateRole = ({ id }: { id: string }) => {
  const [form] = Form.useForm();

  const [update, { isLoading }] = useUpdateRoleMutation();
  const { data } = useGetSingleRoleQuery(id as string, {
    skip: !id,
  });

  const onFinish = (values: ICreateRole) => {
    const body = sanitizeObjectValue(values);
    update({ body, _id: id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };
  useEffect(() => {
    if (data?.data) {
      const { name, permissions, status } = data.data;
      form.setFieldsValue({
        name,
        permissions: permissions.map((item) => ({
          module_name: item.module_name,
          can_create: item.can_create,
          can_read: item.can_read,
          can_update: item.can_update,
          can_delete: item.can_delete,
          module_id: item.module_id,
          selected:
            item.can_create ||
            item.can_read ||
            item.can_update ||
            item.can_delete,
        })),
        status,
      });
    }
  }, [data, form]);
  return (
    <Card className='modal-container'>
      <RoleInputs
        form={form}
        onFinish={onFinish}
        loading={isLoading}
        editMode
      />
    </Card>
  );
};

export default UpdateRole;
