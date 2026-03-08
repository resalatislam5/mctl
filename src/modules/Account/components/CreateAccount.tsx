import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import { useCreateAccountMutation } from '../api/accountEndpoints';
import type { ICreateAccount } from '../types/accountTypes';
import AccountInputs from './AccountInputs';

const CreateAccount = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateAccountMutation();
  const onFinish = (values: ICreateAccount) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <AccountInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateAccount;
