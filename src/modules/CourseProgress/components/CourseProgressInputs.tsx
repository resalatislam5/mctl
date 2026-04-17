import {
  Col,
  Form,
  Row,
  type FormInstance,
  type FormListFieldData,
} from 'antd';

import dayjs from 'dayjs';
import FromSubmit from '../../../common/Button/FromSubmit';
import { FormInputSelect } from '../../../common/Form/FormIInput';
import { SelectCourse } from '../../../common/SelectWithApi/Select';
import AntTable from '../../../common/Table/AntTable';
import type { ICreateCourseProgress } from '../types/courseProgressTypes';

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
                      required
                      disabled
                      lg={24}
                    />
                  ),
                  width: 200,
                },
                {
                  title: 'Hard Copy',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputSelect
                      name={[field.name, 'status']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Select Hard Copy'
                      options={[
                        { label: 'Yes', value: 'YES' },
                        { label: 'No', value: 'NO' },
                      ]}
                      lg={24}
                      required
                    />
                  ),
                },
                {
                  title: 'Soft Copy',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputSelect
                      name={[field.name, 'soft_copy']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Select Soft Copy'
                      options={[
                        { label: 'Yes', value: 'YES' },
                        { label: 'No', value: 'NO' },
                      ]}
                      lg={24}
                      required
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
