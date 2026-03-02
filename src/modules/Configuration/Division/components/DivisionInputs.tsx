import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import { SelectCountry } from '../../../../common/SelectWithApi/Select';
import type { ICreateDivision } from '../types/divisionTypes';

type Props = {
  onFinish: (arg: ICreateDivision) => void;
  form: FormInstance<ICreateDivision>;
  loading: boolean;
  editMode?: boolean;
};

const DivisionInputs = ({ onFinish, form, loading, editMode }: Props) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <SelectCountry lg={24} name={'country_id'} label={'Country'} required />
        <FormInputText lg={24} name={'name'} label={'Name'} required />
        <FormInputText lg={24} name={'code'} label={'Code'} required />

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

export default DivisionInputs;
