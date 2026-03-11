import { Form, Row, type FormInstance } from 'antd';

import { useWatch } from 'antd/es/form/Form';
import FromSubmit from '../../../common/Button/FromSubmit';
import {
  FormInputDate,
  FormInputNumber,
  FormInputSelect,
} from '../../../common/Form/FormIInput';
import {
  SelectAccount,
  SelectEnrollment,
  SelectStudent,
} from '../../../common/SelectWithApi/Select';
import { ACCOUNT_TYPE_OPTIONS } from '../../Account/types/accountTypes';
import type { ICreateMoneyReceipt } from '../types/moneyReceiptTypes';
import dayjs from 'dayjs';

type Props = {
  onFinish: (arg: ICreateMoneyReceipt) => void;
  form: FormInstance<ICreateMoneyReceipt>;
  loading: boolean;
  editMode?: boolean;
};

const MoneyReceiptInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const student_id = useWatch('student_id', form);
  const payment_method = useWatch('payment_method', form);

  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      form={form}
      initialValues={{ date: dayjs() }}
    >
      <Row gutter={[8, 8]}>
        <FormInputDate lg={8} name={'date'} label={'Date'} required />
        <SelectStudent
          lg={8}
          name={'student_id'}
          label={'Student'}
          required
          onChange={() => form.resetFields(['enrollment_id'])}
        />
        <SelectEnrollment
          lg={8}
          name={'enrollment_id'}
          label={'Enrollment'}
          student_id={student_id}
          required
          disabled={!student_id}
          option={{ skip: !student_id }}
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
          options={ACCOUNT_TYPE_OPTIONS}
          required
          payment_method={payment_method}
          option={{ skip: !payment_method }}
        />

        <FormInputNumber name={'amount'} lg={8} label={'Amount'} required />
      </Row>
      <FromSubmit
        text={editMode ? 'Update' : 'Create'}
        loading={loading}
        style={{ marginTop: 16 }}
      />
    </Form>
  );
};

export default MoneyReceiptInputs;
