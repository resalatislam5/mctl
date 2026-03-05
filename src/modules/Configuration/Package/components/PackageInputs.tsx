import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputNumber,
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import type { ICreatePackage } from '../types/packageTypes';
import { SelectCourse } from '../../../../common/SelectWithApi/Select';
import { useGetCourseListQuery } from '../../Course/api/courseEndpoints';
import { useWatch } from 'antd/es/form/Form';
import { useEffect } from 'react';

type Props = {
  onFinish: (arg: ICreatePackage) => void;
  form: FormInstance;
  loading: boolean;
  editMode?: boolean;
};

const PackageInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const course_ids = useWatch('course_ids', form);
  const total_price = useWatch('total_price', form);
  const discount = useWatch('discount', form);
  const additional_discount = useWatch('additional_discount', form);

  const { data: courseData } = useGetCourseListQuery(
    {},
    { skip: !course_ids?.length },
  );

  useEffect(() => {
    if (course_ids?.length) {
      const total_price = courseData?.data?.reduce((prev, curr) => {
        const item = course_ids.find((item: string) => curr._id === item);
        if (item) {
          return prev + Number(curr.price);
        }
        return prev + 0;
      }, 0);
      form.setFieldValue('total_price', total_price);
    }
  }, [course_ids, form, courseData]);

  useEffect(() => {
    const discountPrice =
      Number(total_price) - (Number(total_price) * Number(discount || 0)) / 100;
    const netPrice = Number(discountPrice) - Number(additional_discount || 0);
    form.setFieldValue('net_price', netPrice);
  }, [total_price, discount, additional_discount, form]);

  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <FormInputText name={'name'} label={'Name'} required />
        <SelectCourse
          name={'course_ids'}
          label={'Course'}
          required
          mode='multiple'
        />
        <FormInputNumber
          name={'total_price'}
          label={'Total Price'}
          readOnly
          required
        />
        <FormInputNumber name={'discount'} label={'Discount (%)'} required />
        <FormInputNumber
          name={'additional_discount'}
          label={'Additional Discount'}
          required
        />
        <FormInputNumber
          name={'net_price'}
          label={'Net Price'}
          required
          readOnly
        />

        {editMode && (
          <FormInputSelect
            name={'status'}
            label={'Status'}
            options={[
              { label: 'ACTIVE', value: 'ACTIVE' },
              { label: 'INACTIVE', value: 'INACTIVE' },
            ]}
          />
        )}
      </Row>
      <FromSubmit text={editMode ? 'Update' : 'Create'} loading={loading} />
    </Form>
  );
};

export default PackageInputs;
