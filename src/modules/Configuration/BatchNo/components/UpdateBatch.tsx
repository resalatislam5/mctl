import { useForm } from 'antd/es/form/Form';
import { useUpdateBatchMutation } from '../api/batchEndpoints';
import type { IBatchList, ICreateBatch } from '../types/batchTypes';
import { Card } from 'antd';
import BatchInputs from './BatchInputs';
import { useEffect } from 'react';

type Props = {
  record: IBatchList;
};
const UpdateBatch = ({ record }: Props) => {
  const [form] = useForm();
  const { batch_no, status, _id } = record;
  const [update, { isLoading }] = useUpdateBatchMutation();

  const onFinish = (values: ICreateBatch) => {
    update({ body: values, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        batch_no,
        status,
      });
    }
  }, [form, batch_no, status, record]);

  return (
    <Card size='small' className='modal-container'>
      <BatchInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateBatch;
