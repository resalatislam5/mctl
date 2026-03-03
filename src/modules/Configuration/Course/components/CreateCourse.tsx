import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { ICreateCourse } from '../types/courseTypes';
import CourseInputs from './CourseInputs';
import { useCreateCourseMutation } from '../api/courseEndpoints';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

const CreateCourse = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateCourseMutation();
  const onFinish = (values: ICreateCourse) => {
    const body = sanitizeObjectValue(values);
    create(body);
    form.resetFields();
  };

  return (
    <Card size='small' className='modal-container'>
      <CourseInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateCourse;
