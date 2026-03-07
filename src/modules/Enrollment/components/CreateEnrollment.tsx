import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import { useCreateEnrollmentMutation } from '../api/enrollmentEndpoints';
import type { ICreateEnrollment } from '../types/enrollmentTypes';
import EnrollmentInputs from './EnrollmentInputs';

const CreateEnrollment = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateEnrollmentMutation();
  const onFinish = (values: ICreateEnrollment) => {
    const body = sanitizeObjectValue(values);

    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <EnrollmentInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateEnrollment;
