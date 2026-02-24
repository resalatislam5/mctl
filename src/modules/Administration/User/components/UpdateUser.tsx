import { Card, Form } from 'antd';

import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import { useUpdateUserMutation } from '../api/userEndpoints';
import type { ICreateUser, IUserList } from '../types/userTypes';
import UserInputs from './UserInputs';

const UpdateUser = ({ record }: { record: IUserList }) => {
  const [form] = Form.useForm();

  const [update, { isLoading }] = useUpdateUserMutation();

  const onFinish = (values: ICreateUser) => {
    const body = sanitizeObjectValue(values);
    update({ body, _id: record._id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };
  useEffect(() => {
    if (record) {
      const { email, name, role_id, status } = record;

      form.setFieldsValue({
        name,
        email,
        role_id,
        status,
      });
    }
  }, [record, form]);

  return (
    <Card className='modal-container'>
      <UserInputs
        form={form}
        onFinish={onFinish}
        loading={isLoading}
        editMode
      />
    </Card>
  );
};

export default UpdateUser;
