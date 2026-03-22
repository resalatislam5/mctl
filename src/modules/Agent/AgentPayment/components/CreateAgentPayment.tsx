import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import { useCreateAgentPaymentMutation } from '../api/agentPaymentEndpoints';
import type { ICreateAgentPayment } from '../types/agentPaymentTypes';
import AgentPaymentInputs from './AgentPaymentInputs';

const CreateAgentPayment = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateAgentPaymentMutation();
  const onFinish = (values: ICreateAgentPayment) => {
    const body = sanitizeObjectValue(values);

    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <AgentPaymentInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateAgentPayment;
