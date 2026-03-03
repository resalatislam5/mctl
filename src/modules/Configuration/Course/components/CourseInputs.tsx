import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputNumber,
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import type { ICreateCourse } from '../types/courseTypes';

type Props = {
  onFinish: (arg: ICreateCourse) => void;
  form: FormInstance;
  loading: boolean;
  editMode?: boolean;
};

const CourseInputs = ({ onFinish, form, loading, editMode }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <FormInputText lg={24} name={'name'} label={'Name'} required />
        <FormInputNumber lg={24} name={'price'} label={'Price'} required />
        {editMode && (
          <FormInputSelect
            name={'status'}
            label={'Status'}
            lg={24}
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

export default CourseInputs;
