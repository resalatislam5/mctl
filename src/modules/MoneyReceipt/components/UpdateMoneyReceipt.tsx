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

  const {
    additional_discount,
    admission_date,
    batch_id,
    course_ids,
    code,
    course_mode,
    course_type,
    agent_id,
    installment_type,
    discount,
    installment_date,
    student_id,
    total_amount,
    total_paid,
    total_price,
    package_id,
  } = data?.data || {};
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
        additional_discount,
        admission_date: dayjs(admission_date),
        batch_id,
        course_ids,
        code,
        course_mode,
        course_type,
        agent_id,
        installment_type,
        discount,
        installment_date: installment_date?.map((item) => ({
          name: item.name,
          date: dayjs(item.date),
        })),
        student_id,
        total_amount,
        total_paid,
        total_price,
        package_id,
      });
    }
  }, [
    form,
    additional_discount,
    admission_date,
    batch_id,
    course_ids,
    code,
    course_mode,
    course_type,
    agent_id,
    installment_type,
    discount,
    installment_date,
    student_id,
    total_amount,
    total_paid,
    total_price,
    package_id,
    data,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <MoneyReceiptInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateMoneyReceipt;
