import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import {
  useGetSingleMoneyReceiptQuery,
  useUpdateMoneyReceiptMutation,
} from '../api/moneyReceiptEndpoints';
import type { ICreateMoneyReceipt } from '../types/moneyReceiptTypes';
import MoneyReceiptInputs from './MoneyReceiptInputs';

type Props = {
  _id: string;
};
const UpdateMoneyReceipt = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleMoneyReceiptQuery(_id, { skip: !_id });

  const { acc_id, date, student_id, enrollment_id, payment_method, amount } =
    data?.data || {};
  const [update, { isLoading }] = useUpdateMoneyReceiptMutation();

  const onFinish = (values: ICreateMoneyReceipt) => {
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
        date: dayjs(date),
        student_id,
        enrollment_id,
        payment_method,
        amount,
      });
    }
  }, [
    form,
    acc_id,
    date,
    student_id,
    enrollment_id,
    payment_method,
    amount,
    data,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <MoneyReceiptInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
        oldAmount={amount}
      />
    </Card>
  );
};

export default UpdateMoneyReceipt;
