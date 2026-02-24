import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputEmail,
  FormInputPassword,
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import { SelectRole } from '../../../../common/SelectWithApi/Select';
import type { ICreateUser } from '../types/userTypes';

type Props = {
  onFinish: (values: ICreateUser) => void;
  loading?: boolean;
  form: FormInstance<ICreateUser>;
  editMode?: boolean;
};

const UserInputs = ({ onFinish, form, loading, editMode }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <FormInputText lg={24} name={'name'} label={'Name'} required />
        <FormInputEmail lg={24} name={'email'} label={'Email'} required />
        <SelectRole name={'role_id'} label={'Role'} lg={24} required />
        <FormInputPassword
          lg={24}
          name={'password'}
          label={'Password'}
          required={!editMode}
        />

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

export default UserInputs;
