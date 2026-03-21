import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import { useUpdateAccountMutation } from '../api/accountEndpoints';
import type { IAccountList, ICreateAccount } from '../types/accountTypes';
import AccountInputs from './AccountInputs';

type Props = {
  record: IAccountList;
};
const UpdateAccount = ({ record }: Props) => {
  const [form] = useForm();
  const {
    name,
    status,
    _id,
    acc_number,
    account_type,
    bank_name,
    branch_name,
    opening_balance,
    charge_percent,
  } = record;
  const [update, { isLoading }] = useUpdateAccountMutation();

  const onFinish = (values: ICreateAccount) => {
    const body = sanitizeObjectValue(values);
    update({ body, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        name,
        status,
        _id,
        acc_number,
        account_type,
        bank_name,
        branch_name,
        opening_balance,
        charge_percent,
      });
    }
  }, [
    form,
    name,
    status,
    _id,
    acc_number,
    account_type,
    bank_name,
    branch_name,
    opening_balance,
    charge_percent,
    record,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <AccountInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateAccount;
