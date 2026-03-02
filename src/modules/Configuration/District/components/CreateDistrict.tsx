import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import DistrictInputs from './DistrictInputs';
import { useCreateDistrictMutation } from '../api/districtEndpoints';
import type { ICreateDistrict } from '../types/districtTypes';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateDistrict = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateDistrictMutation();
  const onFinish = (values: ICreateDistrict) => {
    const body = sanitizeObjectValue(values, { ignoreKeys: ['country_id'] });
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <DistrictInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateDistrict;
