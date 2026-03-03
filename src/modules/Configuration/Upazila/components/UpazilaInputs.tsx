import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import type { ICreateUpazila } from '../types/upazilaTypes';
import {
  SelectCountry,
  SelectDistrict,
  SelectDivision,
} from '../../../../common/SelectWithApi/Select';
import { useWatch } from 'antd/es/form/Form';

type Props = {
  onFinish: (arg: ICreateUpazila) => void;
  form: FormInstance<ICreateUpazila>;
  loading: boolean;
  editMode?: boolean;
};

const UpazilaInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const country_id = useWatch('country_id', form);
  const division_id = useWatch('division_id', form);

  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <SelectCountry
          lg={24}
          name={'country_id'}
          label={'Country'}
          required
          onClick={() => form.resetFields(['division_id', 'district_id'])}
        />
        <SelectDivision
          lg={24}
          name={'division_id'}
          label={'Division'}
          required
          country_id={country_id}
          option={{ skip: !country_id }}
          disabled={!country_id}
          onClick={() => form.resetFields(['district_id'])}
        />
        <SelectDistrict
          lg={24}
          name={'district_id'}
          label={'District'}
          required
          division_id={division_id}
          option={{ skip: !division_id }}
          disabled={!division_id}
        />
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

export default UpazilaInputs;
