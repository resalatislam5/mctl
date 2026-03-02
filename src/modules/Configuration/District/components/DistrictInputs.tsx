import { Form, Row, type FormInstance } from 'antd';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputSelect,
  FormInputText,
} from '../../../../common/Form/FormIInput';
import type { ICreateDistrict } from '../types/districtTypes';
import {
  SelectCountry,
  SelectDivision,
} from '../../../../common/SelectWithApi/Select';
import { useWatch } from 'antd/es/form/Form';

type Props = {
  onFinish: (arg: ICreateDistrict) => void;
  form: FormInstance<ICreateDistrict>;
  loading: boolean;
  editMode?: boolean;
};

const DistrictInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const country_id = useWatch('country_id', form);

  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <SelectCountry
          lg={24}
          name={'country_id'}
          label={'Country'}
          required
          onClick={() => form.resetFields(['division_id'])}
        />
        <SelectDivision
          lg={24}
          name={'division_id'}
          label={'Division'}
          required
          country_id={country_id}
          option={{ skip: !country_id }}
          disabled={!country_id}
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

export default DistrictInputs;
