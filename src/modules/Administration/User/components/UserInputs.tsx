import { Form, Row, type FormInstance } from 'antd';
import {
  FormInputEmail,
  FormInputPassword,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import type { ICreateRole } from '../../Role/types/roleTypes';

type Props = {
  onFinish: (arg: ICreateRole) => void;
  form: FormInstance;
};

const UserInputs = ({ onFinish, form }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[20, 20]}>
        <FormInputText lg={24} name={'name'} label={'Name'} required />
        <FormInputEmail lg={24} name={'email'} label={'Email'} required />
        <FormInputPassword
          lg={24}
          name={'password'}
          label={'Password'}
          required
        />
      </Row>
    </Form>
  );
};

export default UserInputs;
