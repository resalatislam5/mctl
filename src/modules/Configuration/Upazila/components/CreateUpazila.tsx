import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import UpazilaInputs from './UpazilaInputs';
import { useCreateUpazilaMutation } from '../api/upazilaEndpoints';
import type { ICreateUpazila } from '../types/upazilaTypes';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateUpazila = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateUpazilaMutation();
  const onFinish = (values: ICreateUpazila) => {
    const body = sanitizeObjectValue(values, { ignoreKeys: ['country_id'] });
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <UpazilaInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateUpazila;
