import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import { SelectBatch } from '../../../../common/SelectWithApi/Select';
import type { ICreateAgentCommission } from '../types/agentCommissionTypes';

type Props = {
  onFinish: (arg: ICreateAgentCommission) => void;
  form: FormInstance<ICreateAgentCommission>;
  loading: boolean;
  editMode?: boolean;
};

const AgentCommissionInputs = ({ onFinish, form, loading }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <SelectBatch lg={24} name={'batch_id'} label={'Batch'} required />
      </Row>
      <FromSubmit text={'Generate'} loading={loading} />
    </Form>
  );
};

export default AgentCommissionInputs;
