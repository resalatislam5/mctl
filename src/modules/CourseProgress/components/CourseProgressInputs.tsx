import {
  Col,
  Form,
  Row,
  type FormInstance,
  type FormListFieldData,
} from 'antd';

import dayjs from 'dayjs';
import FromSubmit from '../../../common/Button/FromSubmit';
import {
  FormInputDate,
  FormInputSelect,
  FormInputText,
} from '../../../common/Form/FormIInput';
import { SelectCourse } from '../../../common/SelectWithApi/Select';
import AntTable from '../../../common/Table/AntTable';
import {
  CertificateStatusEnum,
  type ICreateCourseProgress,
} from '../types/courseProgressTypes';

type Props = {
  onFinish: (arg: ICreateCourseProgress) => void;
  form: FormInstance<ICreateCourseProgress>;
  loading: boolean;
  editMode?: boolean;
};

const CourseProgressInputs = ({ onFinish, form, loading, editMode }: Props) => {
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
        <Col span={24}>
          <Form.List name='courses' initialValue={[{ name: '' }]}>
            {(fields: FormListFieldData[]) => {
              const columns = [
                {
                  title: 'Course Name',
                  render: (_: string, field: FormListFieldData) => (
                    <SelectCourse
                      name={[field.name, 'course_id']}
                      label={''}
                      noStyleLabel={'Course'}
                      noStyle
                      style={{ margin: 0 }}
                      disabled
                      lg={24}
                    />
                  ),
                  width: 200,
                },
                {
                  title: 'Completion Status',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputSelect
                      name={[field.name, 'completion_status']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Select Completion Status'
                      options={[
                        { label: 'ONGOING', value: 'ONGOING' },
                        { label: 'COMPLETED', value: 'COMPLETED' },
                        { label: 'ABSENT', value: 'ABSENT' },
                        { label: 'CANCELLED', value: 'CANCELLED' },
                      ]}
                      lg={24}
                    />
                  ),
                },
                {
                  title: 'Certificate Status',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputSelect
                      name={[field.name, 'certificate_status']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Select Certificate Status'
                      options={CertificateStatusEnum}
                      lg={24}
                    />
                  ),
                },
                {
                  title: 'Doll Card Status',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputSelect
                      name={[field.name, 'doll_card_status']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Select Doll Card Status'
                      options={CertificateStatusEnum}
                      lg={24}
                    />
                  ),
                },
                {
                  title: 'Delivery Status',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputSelect
                      name={[field.name, 'delivery_status']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Select Delivery Status'
                      options={[
                        { label: 'ONLINE_COPY', value: 'ONLINE_COPY' },
                        { label: 'HARD_COPY', value: 'HARD_COPY' },
                      ]}
                      lg={24}
                    />
                  ),
                },
                {
                  title: 'Delivery Date',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputDate
                      name={[field.name, 'delivery_date']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Select Delivery Date'
                      lg={24}
                    />
                  ),
                },
                {
                  title: 'Certificate No',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputText
                      name={[field.name, 'certificate_no']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Enter Certificate No'
                      lg={24}
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
                  />
                </>
              );
            }}
          </Form.List>
        </Col>
      </Row>
      <FromSubmit
        text={editMode ? 'Update' : 'Create'}
        loading={loading}
        style={{ marginTop: 16 }}
      />
    </Form>
  );
};

export default CourseProgressInputs;
