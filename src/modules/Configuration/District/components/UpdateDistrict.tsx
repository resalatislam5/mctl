import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import {
  useGetSingleDistrictQuery,
  useUpdateDistrictMutation,
} from '../api/districtEndpoints';
import type { ICreateDistrict } from '../types/districtTypes';
import DistrictInputs from './DistrictInputs';

type Props = {
  _id: string;
};
const UpdateDistrict = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleDistrictQuery(_id, { skip: !_id });
  const { name, code, status, division_id, country_id } = data?.data || {};
  const [update, { isLoading }] = useUpdateDistrictMutation();

  const onFinish = (values: ICreateDistrict) => {
    const body = sanitizeObjectValue(values, { ignoreKeys: ['country_id'] });
    update({ body, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        name,
        code,
        status,
        division_id,
        country_id,
      });
    }
  }, [form, name, code, status, division_id, country_id, data]);

  return (
    <Card size='small' className='modal-container'>
      <DistrictInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateDistrict;
