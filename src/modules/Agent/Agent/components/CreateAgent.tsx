import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import AgentInputs from './AgentInputs';
import { useCreateAgentMutation } from '../api/agentEndpoints';
import type { ICreateAgent } from '../types/agentTypes';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateAgent = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateAgentMutation();
  const onFinish = (values: ICreateAgent) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <AgentInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateAgent;
