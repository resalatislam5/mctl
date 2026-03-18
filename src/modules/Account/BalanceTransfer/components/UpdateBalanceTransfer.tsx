import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import { useUpdateBalanceTransferMutation } from '../api/balanceTransferEndpoints';
import type {
  IBalanceTransferList,
  ICreateBalanceTransfer,
} from '../types/balanceTransferTypes';
import BalanceTransferInputs from './BalanceTransferInputs';
import dayjs from 'dayjs';

type Props = {
  record: IBalanceTransferList;
};
const UpdateBalanceTransfer = ({ record }: Props) => {
  const [form] = useForm();
  const { _id, amount, date, from_acc_id, note, to_acc_id } = record;
  const [update, { isLoading }] = useUpdateBalanceTransferMutation();

  const onFinish = (values: ICreateBalanceTransfer) => {
    const body = sanitizeObjectValue(values);
    update({ body, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        amount,
        date: dayjs(),
        from_acc_id,
        note,
        to_acc_id,
      });
    }
  }, [form, amount, date, from_acc_id, note, to_acc_id, record]);

  return (
    <Card size='small' className='modal-container'>
      <BalanceTransferInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateBalanceTransfer;
