import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { ICreateCountry } from '../types/countryTypes';
import CountryInputs from './CountryInputs';
import { useCreateCountryMutation } from '../api/countryEndpoints';

const CreateCountry = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateCountryMutation();
  const onFinish = (values: ICreateCountry) => {
    create(values);
    form.resetFields();
  };

  return (
    <Card size='small' className='modal-container'>
      <CountryInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateCountry;
