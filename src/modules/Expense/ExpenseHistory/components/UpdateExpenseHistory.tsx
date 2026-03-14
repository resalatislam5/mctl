import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import {
  useGetSingleExpenseHistoryQuery,
  useUpdateExpenseHistoryMutation,
} from '../api/expenseHistoryEndpoints';
import type { ICreateExpenseHistory } from '../types/expenseHistoryTypes';
import ExpenseHistoryInputs from './ExpenseHistoryInputs';
import dayjs from 'dayjs';

type Props = {
  _id: string;
};
const UpdateExpenseHistory = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleExpenseHistoryQuery(_id as string, {
    skip: !_id,
  });
  const {
    acc_id,
    account_type,
    date,
    expense_details,
    note,
    total_amount,
    voucher_no,
  } = data?.data || {};
  const [update, { isLoading }] = useUpdateExpenseHistoryMutation();

  const onFinish = (values: ICreateExpenseHistory) => {
    const body = sanitizeObjectValue(values);
    update({ body, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        acc_id,
        account_type,
        date: dayjs(date),
        expense_details,
        note,
        total_amount,
        voucher_no,
      });
    }
  }, [
    form,
    acc_id,
    account_type,
    date,
    expense_details,
    note,
    total_amount,
    voucher_no,
    data?.data,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <ExpenseHistoryInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateExpenseHistory;
