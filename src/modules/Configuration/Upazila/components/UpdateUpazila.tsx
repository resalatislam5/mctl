import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';
import {
  useGetSingleUpazilaQuery,
  useUpdateUpazilaMutation,
} from '../api/upazilaEndpoints';
import type { ICreateUpazila } from '../types/upazilaTypes';
import UpazilaInputs from './UpazilaInputs';

type Props = {
  _id: string;
};
const UpdateUpazila = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleUpazilaQuery(_id, { skip: !_id });
  const { name, code, status, division_id, country_id, district_id } =
    data?.data || {};
  const [update, { isLoading }] = useUpdateUpazilaMutation();

  const onFinish = (values: ICreateUpazila) => {
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
        district_id,
      });
    }
  }, [form, name, code, status, division_id, country_id, district_id, data]);

  return (
    <Card size='small' className='modal-container'>
      <UpazilaInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateUpazila;
