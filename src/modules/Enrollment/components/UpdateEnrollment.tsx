import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import {
  useGetSingleEnrollmentQuery,
  useUpdateEnrollmentMutation,
} from '../api/enrollmentEndpoints';
import type { ICreateEnrollment } from '../types/enrollmentTypes';
import EnrollmentInputs from './EnrollmentInputs';
import dayjs from 'dayjs';

type Props = {
  _id: string;
};
const UpdateEnrollment = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleEnrollmentQuery(_id, { skip: !_id });

  const {
    additional_discount,
    admission_date,
    batch_id,
    course_ids,
    code,
    course_mode,
    course_type,
    courses,
    discount,
    installment_date,
    student_id,
    total_amount,
    total_paid,
    total_price,
  } = data?.data || {};
  const [update, { isLoading }] = useUpdateEnrollmentMutation();

  const onFinish = (values: ICreateEnrollment) => {
    const body = sanitizeObjectValue(values);
    update({ body, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (data?.data) {
      form.setFieldsValue({
        additional_discount,
        admission_date: dayjs(admission_date),
        batch_id,
        course_ids,
        code,
        course_mode,
        course_type,
        courses,
        discount,
        installment_date: installment_date?.map((item) => ({
          name: item.name,
          date: dayjs(item.date),
        })),
        student_id,
        total_amount,
        total_paid,
        total_price,
      });
    }
  }, [
    form,
    additional_discount,
    admission_date,
    batch_id,
    course_ids,
    code,
    course_mode,
    course_type,
    courses,
    discount,
    installment_date,
    student_id,
    total_amount,
    total_paid,
    total_price,
    data,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <EnrollmentInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateEnrollment;
