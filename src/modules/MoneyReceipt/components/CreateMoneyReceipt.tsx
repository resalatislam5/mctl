import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import { useCreateMoneyReceiptMutation } from '../api/moneyReceiptEndpoints';
import type { ICreateMoneyReceipt } from '../types/moneyReceiptTypes';
import MoneyReceiptInputs from './MoneyReceiptInputs';

const CreateMoneyReceipt = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateMoneyReceiptMutation();
  const onFinish = (values: ICreateMoneyReceipt) => {
    const body = sanitizeObjectValue(values);

    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <MoneyReceiptInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateMoneyReceipt;
