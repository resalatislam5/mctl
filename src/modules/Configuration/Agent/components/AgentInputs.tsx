import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputEmail,
  FormInputMobile,
  FormInputNumber,
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import type { ICreateAgent } from '../types/agentTypes';

type Props = {
  onFinish: (arg: ICreateAgent) => void;
  form: FormInstance<ICreateAgent>;
  loading: boolean;
  editMode?: boolean;
};

const AgentInputs = ({ onFinish, form, loading, editMode }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <FormInputText lg={24} name={'name'} label={'Name'} required />
        <FormInputEmail lg={24} name={'email'} label={'Email'} required />
        <FormInputMobile lg={24} name={'mobile_no'} label={'Mobile'} required />
        <FormInputNumber
          lg={24}
          name={'min_limit'}
          label={'Min Limit'}
          required
        />
        <FormInputNumber
          lg={24}
          name={'commission'}
          label={'Commission (%)'}
          required
        />

        {editMode && (
          <FormInputSelect
            name={'status'}
            label={'Status'}
            lg={24}
            options={[
              { label: 'ACTIVE', value: 'ACTIVE' },
              { label: 'INACTIVE', value: 'INACTIVE' },
            ]}
          />
        )}
      </Row>
      <FromSubmit text={editMode ? 'Update' : 'Create'} loading={loading} />
    </Form>
  );
};

export default AgentInputs;
