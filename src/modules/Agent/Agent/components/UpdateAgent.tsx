import { useForm } from 'antd/es/form/Form';
import { Card } from 'antd';
import { useEffect } from 'react';
import type { ICreateAgent, IAgentList } from '../types/agentTypes';
import { useUpdateAgentMutation } from '../api/agentEndpoints';
import AgentInputs from './AgentInputs';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

type Props = {
  record: IAgentList;
};
const UpdateAgent = ({ record }: Props) => {
  const [form] = useForm();
  const {
    name,
    status,
    _id,
    commission,
    email,
    min_limit,
    mobile_no,
    min_payment_percent,
  } = record;
  const [update, { isLoading }] = useUpdateAgentMutation();

  const onFinish = (values: ICreateAgent) => {
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
        commission,
        email,
        min_limit,
        mobile_no,
        min_payment_percent,
      });
    }
  }, [
    form,
    name,
    status,
    commission,
    email,
    min_limit,
    mobile_no,
    min_payment_percent,
    record,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <AgentInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateAgent;
