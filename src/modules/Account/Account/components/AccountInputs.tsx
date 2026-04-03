import { Form, Row, type FormInstance } from 'antd';
import {
  ACCOUNT_TYPE,
  ACCOUNT_TYPE_OPTIONS,
  type ICreateAccount,
} from '../types/accountTypes';
import {
  FormInputNumber,
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import FromSubmit from '../../../../common/Button/FromSubmit';
import { useWatch } from 'antd/es/form/Form';
import { SelectAccount } from '../../../../common/SelectWithApi/Select';

type Props = {
  onFinish: (arg: ICreateAccount) => void;
  form: FormInstance<ICreateAccount>;
  loading: boolean;
  editMode?: boolean;
};

const AccountInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const account_type = useWatch('account_type', form);
  const balance_transfer = useWatch('balance_transfer', form);
  const transfer_acc_type = useWatch('transfer_acc_type', form);
  return (
    <Form
      onFinish={onFinish}
      form={form}
      initialValues={{
        account_type: ACCOUNT_TYPE.CASH,
        balance_transfer: 'NO',
      }}
    >
      <Row gutter={[8, 8]}>
        <FormInputSelect
          name={'account_type'}
          label={'Account Type'}
          lg={12}
          options={ACCOUNT_TYPE_OPTIONS}
          required
        />

        <FormInputText lg={12} name={'name'} label={'Name'} required />
        {(account_type === ACCOUNT_TYPE.BANK ||
          account_type === ACCOUNT_TYPE.MOBILE_BANKING) && (
          <FormInputNumber
            lg={12}
            name={'acc_number'}
            label={'Account No.'}
            required
          />
        )}
        {account_type === ACCOUNT_TYPE.BANK && (
          <>
            <FormInputText
              lg={12}
              name={'bank_name'}
              label={'Bank Name'}
              required
            />
            <FormInputText
              lg={12}
              name={'branch_name'}
              label={'Branch Name'}
              required
            />
          </>
        )}
        <FormInputSelect
          name={'balance_transfer'}
          label={'Balance Transfer'}
          lg={12}
          options={[
            { label: 'YES', value: 'YES' },
            { label: 'NO', value: 'NO' },
          ]}
          required
        />
        {balance_transfer === 'YES' ? (
          <>
            <FormInputSelect
              name={'transfer_acc_type'}
              label={'Transfer Account Type'}
              lg={12}
              options={ACCOUNT_TYPE_OPTIONS}
              required
            />
            <SelectAccount
              name={'transfer_acc_id'}
              label={'Transfer Account'}
              lg={12}
              payment_method={transfer_acc_type}
              option={{ Skip: !transfer_acc_type }}
              required
              disabled={!transfer_acc_type}
            />
            <FormInputNumber
              lg={12}
              name={'charge_percent'}
              label={'Charge (%)'}
              required
              step={0.1}
            />
          </>
        ) : (
          <FormInputNumber
            lg={12}
            name={'opening_balance'}
            label={'Opening Balance'}
            required
          />
        )}
        {editMode && (
          <FormInputSelect
            name={'status'}
            label={'Status'}
            lg={12}
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

export default AccountInputs;
