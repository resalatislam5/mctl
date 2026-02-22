import { useForm } from 'antd/es/form/Form';
import { useUpdateCountryMutation } from '../api/countryEndpoints';
import type { ICountryList, ICreateCountry } from '../types/countryTypes';
import { Card } from 'antd';
import CountryInputs from './CountryInputs';
import { useEffect } from 'react';

type Props = {
  record: ICountryList;
};
const UpdateCountry = ({ record }: Props) => {
  const [form] = useForm();
  const { name, code, status, _id } = record;
  const [update, { isLoading }] = useUpdateCountryMutation();

  const onFinish = (values: ICreateCountry) => {
    console.log(values);
    update({ body: values, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        name,
        code,
        status,
      });
    }
  }, [form, name, code, status, record]);

  return (
    <Card size='small' className='modal-container'>
      <CountryInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateCountry;
