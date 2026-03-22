import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import {
  useGetSingleAgentPaymentQuery,
  useUpdateAgentPaymentMutation,
} from '../api/agentPaymentEndpoints';
import type { ICreateAgentPayment } from '../types/agentPaymentTypes';
import AgentPaymentInputs from './AgentPaymentInputs';

type Props = {
  _id: string;
};
const UpdateAgentPayment = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleAgentPaymentQuery(_id, { skip: !_id });

  const {
    acc_id,
    date,
    agent_id,
    commission_id,
    reference_no,
    note,
    payment_method,
    amount,
  } = data?.data || {};
  const [update, { isLoading }] = useUpdateAgentPaymentMutation();

  const onFinish = (values: ICreateAgentPayment) => {
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
        agent_id,
        commission_id,
        reference_no,
        note,
        payment_method,
        amount,
        date: dayjs(date),
      });
    }
  }, [
    form,
    acc_id,
    date,
    agent_id,
    commission_id,
    reference_no,
    note,
    payment_method,
    amount,
    data,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <AgentPaymentInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
        oldAmount={amount}
      />
    </Card>
  );
};

export default UpdateAgentPayment;
