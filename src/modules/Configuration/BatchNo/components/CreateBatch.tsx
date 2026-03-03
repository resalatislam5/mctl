import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { ICreateBatch } from '../types/batchTypes';
import BatchInputs from './BatchInputs';
import { useCreateBatchMutation } from '../api/batchEndpoints';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateBatch = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateBatchMutation();
  const onFinish = (values: ICreateBatch) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <BatchInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateBatch;
