import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { sanitizeFormData } from '../../../common/utils/sanitizeFormData';
import { toUploadFileList } from '../../../common/utils/toUploadFileList ';
import {
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
} from '../api/StudentEndpoints';
import type { ICreateStudent } from '../types/StudentTypes';
import StudentInputs from './StudentInputs';

type Props = {
  _id: string;
};
const UpdateStudent = ({ _id }: Props) => {
  const [form] = useForm();
  const { data } = useGetSingleStudentQuery(_id, { skip: !_id });

  const {
    name,
    code,
    status,
    country_id,
    co_mobile,
    district_id,
    division_id,
    dob,
    education,
    email,
    gender,
    nid_no,
    nationality,
    occupation,
    office_address,
    relationship,
    upazila_id,
    village,
    mobile_no,
    image,
  } = data?.data || {};
  const [update, { isLoading }] = useUpdateStudentMutation();

  const onFinish = (values: ICreateStudent) => {
    const body = sanitizeFormData(values, { fileKeys: ['image'] });
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
        country_id,
        co_mobile,
        district_id,
        division_id,
        dob: dayjs(dob),
        education,
        email,
        gender,
        nid_no,
        nationality,
        occupation,
        office_address,
        relationship,
        upazila_id,
        village,
        mobile_no,
        image: toUploadFileList(image),
      });
    }
  }, [
    form,
    name,
    code,
    status,
    country_id,
    co_mobile,
    district_id,
    division_id,
    dob,
    education,
    email,
    gender,
    nid_no,
    nationality,
    occupation,
    office_address,
    relationship,
    upazila_id,
    village,
    image,
    mobile_no,
    data,
  ]);

  return (
    <Card size='small' className='modal-container'>
      <StudentInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateStudent;
