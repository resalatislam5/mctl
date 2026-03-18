import { Form, Row, type FormInstance } from 'antd';

import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputDate,
  FormInputNumber,
  FormInputTextArea,
} from '../../../../common/Form/FormIInput';
import { SelectAccount } from '../../../../common/SelectWithApi/Select';
import type { ICreateBalanceTransfer } from '../types/balanceTransferTypes';
import dayjs from 'dayjs';

type Props = {
  onFinish: (arg: ICreateBalanceTransfer) => void;
  form: FormInstance<ICreateBalanceTransfer>;
  loading: boolean;
  editMode?: boolean;
};

const BalanceTransferInputs = ({
  onFinish,
  form,
  loading,
  editMode,
}: Props) => {
  return (
    <Form onFinish={onFinish} form={form} initialValues={{ date: dayjs() }}>
      <Row gutter={[8, 8]}>
        <FormInputDate lg={12} name={'date'} label={'Date'} required />
        <SelectAccount
          lg={12}
          name={'from_acc_id'}
          label={'From Account'}
          required
        />
        <SelectAccount
          lg={12}
          name={'to_acc_id'}
          label={'To Account'}
          required
        />
        <FormInputNumber lg={12} name={'amount'} label={'Amount'} required />
        <FormInputTextArea lg={24} name={'note'} label={'Note'} />
      </Row>
      <FromSubmit text={editMode ? 'Update' : 'Create'} loading={loading} />
    </Form>
  );
};

export default BalanceTransferInputs;
