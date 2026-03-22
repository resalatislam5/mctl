import { Form, Row, type FormInstance } from 'antd';

import { useWatch } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputDate,
  FormInputNumber,
  FormInputSelect,
  FormInputText,
  FormInputTextArea,
} from '../../../../common/Form/FormIInput';
import {
  SelectAccount,
  SelectAgent,
  SelectAgentCommission,
} from '../../../../common/SelectWithApi/Select';
import { ACCOUNT_TYPE_OPTIONS } from '../../../Account/Account/types/accountTypes';
import { useGetSingleAgentCommissionQuery } from '../../AgentCommission/api/agentCommissionEndpoints';
import type { ICreateAgentPayment } from '../types/agentPaymentTypes';

type Props = {
  onFinish: (arg: ICreateAgentPayment) => void;
  form: FormInstance<ICreateAgentPayment>;
  loading: boolean;
  editMode?: boolean;
  oldAmount?: string;
};

const AgentPaymentInputs = ({
  onFinish,
  form,
  loading,
  editMode,
  oldAmount,
}: Props) => {
  const agent_id = useWatch('agent_id', form);
  const commission_id = useWatch('commission_id', form);
  const payment_method = useWatch('payment_method', form);
  const { data } = useGetSingleAgentCommissionQuery(commission_id, {
    skip: !commission_id,
  });
  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      form={form}
      initialValues={{ date: dayjs() }}
    >
      <Row gutter={[8, 8]}>
        <FormInputDate lg={8} name={'date'} label={'Date'} required />
        <SelectAgent
          lg={8}
          name={'agent_id'}
          label={'Agent'}
          required
          onChange={() => form.resetFields(['commission_id'])}
        />
        <SelectAgentCommission
          lg={8}
          name={'commission_id'}
          label={'Commission'}
          required
          agent_id={agent_id}
          option={{ skip: !agent_id }}
        />

        <FormInputSelect
          name={'payment_method'}
          label={'Payment Type'}
          lg={8}
          options={ACCOUNT_TYPE_OPTIONS}
          required
          onChange={() => form.resetFields(['acc_id'])}
        />
        <SelectAccount
          name={'acc_id'}
          label={'Account'}
          lg={8}
          required
          payment_method={payment_method}
          option={{ skip: !payment_method }}
        />

        <FormInputNumber
          name={'amount'}
          lg={8}
          label={'Amount'}
          required
          rules={[
            {
              validator(_, value) {
                const dueAmount =
                  Number(data?.data?.commission_amount || 0) -
                  Number(data?.data?.paid_amount || 0);
                if (!value || value <= dueAmount) {
                  return Promise.resolve();
                }
                if (editMode && Number(oldAmount) + dueAmount >= value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Amount can't be greater than the due amount"),
                );
              },
            },
          ]}
        />
        <FormInputText lg={8} name={'reference_no'} label={'Reference No'} />
        <FormInputTextArea lg={24} name={'note'} label={'Note'} />
      </Row>
      <FromSubmit
        text={editMode ? 'Update' : 'Create'}
        loading={loading}
        style={{ marginTop: 16 }}
      />
    </Form>
  );
};

export default AgentPaymentInputs;
