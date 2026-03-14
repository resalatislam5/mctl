import { Form, Row, type FormInstance } from 'antd';

import FromSubmit from '../../../../common/Button/FromSubmit';
import { FormInputText } from '../../../../common/Form/FormIInput';
import type { ICreateHead } from '../types/headTypes';

type Props = {
  onFinish: (arg: ICreateHead) => void;
  form: FormInstance<ICreateHead>;
  loading: boolean;
  editMode?: boolean;
};

const HeadInputs = ({ onFinish, form, loading, editMode }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <FormInputText lg={24} name={'name'} label={'Name'} required />
      </Row>
      <FromSubmit text={editMode ? 'Update' : 'Create'} loading={loading} />
    </Form>
  );
};

export default HeadInputs;
