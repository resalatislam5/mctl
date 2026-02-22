import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import { FormInputText } from '../../../../common/Form/FormIInput';
import type { ICreateCountry } from '../types/countryTypes';

type Props = {
  onFinish: (arg: ICreateCountry) => void;
  form: FormInstance;
  loading: boolean;
  editMode?: boolean;
};

const CountryInputs = ({ onFinish, form, loading, editMode }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <FormInputText lg={24} name={'name'} label={'Name'} required />
        <FormInputText lg={24} name={'code'} label={'Code'} required />
      </Row>
      <FromSubmit text={editMode ? 'Update' : 'Create'} loading={loading} />
    </Form>
  );
};

export default CountryInputs;
