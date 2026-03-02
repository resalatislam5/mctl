import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import DivisionInputs from './DivisionInputs';
import { useCreateDivisionMutation } from '../api/divisionEndpoints';
import type { ICreateDivision } from '../types/divisionTypes';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateDivision = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateDivisionMutation();
  const onFinish = (values: ICreateDivision) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <DivisionInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateDivision;
