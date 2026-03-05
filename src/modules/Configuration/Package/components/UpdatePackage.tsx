import { useForm } from 'antd/es/form/Form';
import { useUpdatePackageMutation } from '../api/packageEndpoints';
import type { IPackageList, ICreatePackage } from '../types/packageTypes';
import { Card } from 'antd';
import PackageInputs from './PackageInputs';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

type Props = {
  record: IPackageList;
};
const UpdatePackage = ({ record }: Props) => {
  const [form] = useForm();
  const {
    name,
    additional_discount,
    course_ids,
    discount,
    net_price,
    total_price,
    status,
    _id,
  } = record;
  const [update, { isLoading }] = useUpdatePackageMutation();

  const onFinish = (values: ICreatePackage) => {
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
        name,
        additional_discount,
        course_ids,
        discount,
        net_price,
        total_price,
        status,
      });
    }
  }, [
    form,
    name,
    additional_discount,
    course_ids,
    discount,
    net_price,
    total_price,
    status,
    record,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <PackageInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdatePackage;
