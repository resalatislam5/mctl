import {
  Col,
  Flex,
  Form,
  Row,
  Table,
  type FormInstance,
  type FormListFieldData,
} from 'antd';

import { useWatch } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import CommonButton from '../../../common/Button/CommonButton';
import FromSubmit from '../../../common/Button/FromSubmit';
import {
  FormInputDate,
  FormInputNumber,
  FormInputSelect,
  FormInputText,
} from '../../../common/Form/FormIInput';
import {
  SelectAgent,
  SelectBatch,
  SelectCourse,
  SelectPackage,
  SelectStudent,
} from '../../../common/SelectWithApi/Select';
import AntTable from '../../../common/Table/AntTable';
import { useGetCourseListQuery } from '../../Configuration/Course/api/courseEndpoints';
import { useGetSinglePackageQuery } from '../../Configuration/Package/api/packageEndpoints';
import type { ICreateEnrollment } from '../types/enrollmentTypes';

type Props = {
  onFinish: (arg: ICreateEnrollment) => void;
  form: FormInstance<ICreateEnrollment>;
  loading: boolean;
  editMode?: boolean;
};

const EnrollmentInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const course_ids = useWatch('course_ids', form);
  const total_price = useWatch('total_price', form);
  const discount = useWatch('discount', form);
  const additional_discount = useWatch('additional_discount', form);
  const course_type = useWatch('course_type', form);
  const package_id = useWatch('package_id', form);
  const installment_type = useWatch('installment_type', form);

  const { data: courseData } = useGetCourseListQuery(
    {},
    { skip: !course_ids?.length },
  );

  const { data: packageData } = useGetSinglePackageQuery(package_id, {
    skip: !package_id,
  });

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
    if (course_type === 'SPECIFIC') {
      const discountPrice =
        Number(total_price) -
        (Number(total_price) * Number(discount || 0)) / 100;
      const totalAmount =
        Number(discountPrice) - Number(additional_discount || 0);

      form.setFieldValue('total_amount', totalAmount);
    }
  }, [total_price, discount, additional_discount, form, course_type]);

  useEffect(() => {
    if (packageData) {
      form.setFieldsValue({
        discount: Number(packageData?.data?.discount) || 0,
        total_price: Number(packageData?.data?.total_price) || 0,
        additional_discount:
          Number(packageData?.data?.additional_discount) || 0,
        total_amount: Number(packageData?.data?.net_price) || 0,
      });
    }
  }, [packageData, form]);

  return (
    <Form
      layout='vertical'
      onFinish={onFinish}
      form={form}
      initialValues={{
        admission_date: dayjs(),
        course_type: 'SPECIFIC',
        installment_type: 'YES',
      }}
    >
      <Row gutter={[8, 8]}>
        <SelectAgent lg={8} name={'agent_id'} label={'Agent'} />
        <SelectStudent lg={8} name={'student_id'} label={'Student'} required />
        <SelectBatch lg={8} name={'batch_id'} label={'Batch'} required />
        <FormInputDate
          lg={8}
          name={'admission_date'}
          label={'Admission Date'}
          required
        />
        <FormInputSelect
          name={'course_mode'}
          label={'Course Mode'}
          lg={8}
          options={[
            { label: 'ONLINE', value: 'ONLINE' },
            { label: 'OFFLINE', value: 'OFFLINE' },
          ]}
          required
        />
        <FormInputSelect
          name={'course_type'}
          label={'Course Type'}
          lg={8}
          options={[
            { label: 'SPECIFIC', value: 'SPECIFIC' },
            { label: 'PACKAGE', value: 'PACKAGE' },
          ]}
          required
          onChange={() =>
            form.resetFields([
              'additional_discount',
              'discount',
              'course_ids',
              'package_id',
              'total_price',
              'total_amount',
            ])
          }
        />
        {course_type === 'PACKAGE' ? (
          <SelectPackage lg={8} name={'package_id'} label={'Package'} />
        ) : (
          <SelectCourse
            mode='multiple'
            lg={8}
            name={'course_ids'}
            label={'Course'}
            required
          />
        )}

        <FormInputNumber
          lg={8}
          name={'total_price'}
          label={'Total Price'}
          readOnly
          required
        />
        <FormInputNumber
          lg={8}
          name={'discount'}
          label={'Discount (%)'}
          readOnly={course_type === 'PACKAGE'}
          required
        />
        <FormInputNumber
          name={'additional_discount'}
          lg={8}
          label={'Additional Discount'}
          required
          readOnly={course_type === 'PACKAGE'}
        />
        <FormInputNumber
          name={'total_amount'}
          lg={8}
          label={'Total Amount'}
          required
          readOnly
        />
        <FormInputSelect
          lg={8}
          name='installment_type'
          label={'Installment'}
          required
          options={[
            { label: 'YES', value: 'YES' },
            { label: 'NO', value: 'NO' },
          ]}
        />
        {installment_type === 'YES' && (
          <Col span={24}>
            <Form.List name='installment_date' initialValue={[{ name: '' }]}>
              {(fields: FormListFieldData[], { add, remove }) => {
                const columns = [
                  {
                    title: 'Installment Name',
                    render: (_: string, field: FormListFieldData) => (
                      <FormInputText
                        name={[field.name, 'name']}
                        style={{ margin: 0 }}
                        label={''}
                        noStyleLabel={'Name'}
                        placeholder='Enter Installment Name'
                        required
                      />
                    ),
                  },
                  {
                    title: 'Installment Data',
                    render: (_: string, field: FormListFieldData) => (
                      <FormInputDate
                        name={[field.name, 'date']}
                        style={{ margin: 0 }}
                        label={''}
                        placeholder='Enter Installment Date'
                        noStyleLabel={'Date'}
                        required
                      />
                    ),
                  },
                  {
                    title: 'Action',
                    render: (_: any, field: FormListFieldData) => (
                      <CommonButton
                        disabled={fields.length === 1}
                        onClick={() => remove(field.name)}
                        danger
                        size='small'
                        type='dashed'
                        icon='ic:baseline-minus'
                      />
                    ),
                  },
                ];

                return (
                  <>
                    <AntTable
                      columns={columns}
                      dataSource={fields}
                      pagination={false}
                      showTotal={false}
                      rowKey='key'
                      summary={() => (
                        <Table.Summary.Row>
                          <Table.Summary.Cell index={0} colSpan={4}>
                            <Flex justify='end'>
                              <CommonButton
                                onClick={() => add()}
                                icon={'ic:round-plus'}
                                text='Add Date'
                              />
                            </Flex>
                          </Table.Summary.Cell>
                        </Table.Summary.Row>
                      )}
                    />
                  </>
                );
              }}
            </Form.List>
          </Col>
        )}
      </Row>
      <FromSubmit
        text={editMode ? 'Update' : 'Create'}
        loading={loading}
        style={{ marginTop: 16 }}
      />
    </Form>
  );
};

export default EnrollmentInputs;
