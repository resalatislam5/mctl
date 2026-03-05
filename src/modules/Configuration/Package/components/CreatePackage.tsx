import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { ICreatePackage } from '../types/packageTypes';
import PackageInputs from './PackageInputs';
import { useCreatePackageMutation } from '../api/packageEndpoints';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreatePackage = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreatePackageMutation();
  const onFinish = (values: ICreatePackage) => {
    const body = sanitizeObjectValue(values);
    create(body);
    form.resetFields();
  };

  return (
    <Card size='small' className='modal-container'>
      <PackageInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreatePackage;
