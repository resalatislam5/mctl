import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import {
  useGetSingleCourseProgressQuery,
  useUpdateCourseProgressMutation,
} from '../api/courseProgressEndpoints';
import type { ICreateCourseProgress } from '../types/courseProgressTypes';
import CourseProgressInputs from './CourseProgressInputs';

type Props = {
  _id: string;
};
const UpdateCourseProgress = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleCourseProgressQuery(_id, { skip: !_id });

  const { courses } = data?.data || {};
  const [update, { isLoading }] = useUpdateCourseProgressMutation();

  const onFinish = (values: ICreateCourseProgress) => {
    const body = sanitizeObjectValue(values);
    update({ body, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (courses) {
      form.setFieldsValue({
        courses: courses.map((course) => ({
          course_id: course.course_id,
          status: course.status,
          soft_copy: course.soft_copy,
        })),
      });
    }
  }, [form, courses]);

  return (
    <Card size='small' className='modal-container'>
      <CourseProgressInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateCourseProgress;
