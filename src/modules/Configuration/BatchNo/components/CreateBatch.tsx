import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { ICreateBatch } from '../types/batchTypes';
import BatchInputs from './BatchInputs';
import { useCreateBatchMutation } from '../api/batchEndpoints';

const CreateBatch = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateBatchMutation();
  const onFinish = (values: ICreateBatch) => {
    create(values);
    form.resetFields();
  };

  return (
    <Card size='small' className='modal-container'>
      <BatchInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateBatch;
