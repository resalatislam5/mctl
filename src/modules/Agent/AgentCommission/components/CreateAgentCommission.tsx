import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import AgentCommissionInputs from './AgentCommissionInputs';
import { useCreateAgentCommissionMutation } from '../api/agentCommissionEndpoints';
import type { ICreateAgentCommission } from '../types/agentCommissionTypes';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateAgentCommission = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateAgentCommissionMutation();
  const onFinish = (values: ICreateAgentCommission) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <AgentCommissionInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
      />
    </Card>
  );
};

export default CreateAgentCommission;
