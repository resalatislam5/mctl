import { useForm } from 'antd/es/form/Form';
import { useUpdateCourseMutation } from '../api/courseEndpoints';
import type { ICourseList, ICreateCourse } from '../types/courseTypes';
import { Card } from 'antd';
import CourseInputs from './CourseInputs';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

type Props = {
  record: ICourseList;
};
const UpdateCourse = ({ record }: Props) => {
  const [form] = useForm();
  const { name, price, status, _id } = record;
  const [update, { isLoading }] = useUpdateCourseMutation();

  const onFinish = (values: ICreateCourse) => {
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
        price,
        status,
      });
    }
  }, [form, name, price, status, record]);

  return (
    <Card size='small' className='modal-container'>
      <CourseInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateCourse;
