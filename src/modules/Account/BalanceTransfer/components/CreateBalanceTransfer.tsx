import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import { useCreateBalanceTransferMutation } from '../api/balanceTransferEndpoints';
import type { ICreateBalanceTransfer } from '../types/balanceTransferTypes';
import BalanceTransferInputs from './BalanceTransferInputs';

const CreateBalanceTransfer = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateBalanceTransferMutation();
  const onFinish = (values: ICreateBalanceTransfer) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <BalanceTransferInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
      />
    </Card>
  );
};

export default CreateBalanceTransfer;
