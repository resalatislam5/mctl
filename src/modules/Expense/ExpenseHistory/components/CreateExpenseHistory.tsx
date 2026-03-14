import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import { useCreateExpenseHistoryMutation } from '../api/expenseHistoryEndpoints';
import type { ICreateExpenseHistory } from '../types/expenseHistoryTypes';
import ExpenseHistoryInputs from './ExpenseHistoryInputs';

const CreateExpenseHistory = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateExpenseHistoryMutation();
  const onFinish = (values: ICreateExpenseHistory) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <ExpenseHistoryInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
      />
    </Card>
  );
};

export default CreateExpenseHistory;
