import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeFormData } from '../../../common/utils/sanitizeFormData';
import { useCreateStudentMutation } from '../api/StudentEndpoints';
import type { ICreateStudent } from '../types/StudentTypes';
import StudentInputs from './StudentInputs';

const CreateStudent = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateStudentMutation();
  const onFinish = (values: ICreateStudent) => {
    const body = sanitizeFormData(values, { fileKeys: ['image'] });
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <StudentInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateStudent;
