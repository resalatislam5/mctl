import { Form, Row, type FormInstance } from 'antd';

import FromSubmit from '../../../common/Button/FromSubmit';
import {
  FormImageUpload_V1,
  FormInputDate,
  FormInputEmail,
  FormInputMobile,
  FormInputSelect,
  FormInputText,
} from '../../../common/Form/FormIInput';
import {
  SelectCountry,
  SelectDistrict,
  SelectDivision,
  SelectUpazila,
} from '../../../common/SelectWithApi/Select';
import type { ICreateStudent } from '../types/StudentTypes';
import { useWatch } from 'antd/es/form/Form';

type Props = {
  onFinish: (arg: ICreateStudent) => void;
  form: FormInstance<ICreateStudent>;
  loading: boolean;
  editMode?: boolean;
};

const StudentInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const country_id = useWatch('country_id', form);
  const division_id = useWatch('division_id', form);
  const district_id = useWatch('district_id', form);
  return (
    <Form layout='vertical' onFinish={onFinish} form={form}>
      <Row gutter={[8, 8]}>
        <FormInputText lg={8} name={'name'} label={'Name'} />
        <FormInputEmail lg={8} name={'email'} label={'Email'} />
        <FormInputText lg={8} name={'code'} label={'Code'} />
        <FormInputMobile lg={8} name={'mobile_no'} label={'Mobile No'} />
        <SelectCountry
          lg={8}
          name={'country_id'}
          label={'Country'}
          onChange={() =>
            form.resetFields(['division_id', 'district_id', 'upazila_id'])
          }
        />
        <SelectDivision
          lg={8}
          name={'division_id'}
          label={'Division'}
          country_id={country_id}
          option={{ skip: !country_id }}
          disabled={!country_id}
          onClick={() => form.resetFields(['district_id', 'upazila_id'])}
        />
        <SelectDistrict
          lg={8}
          name={'district_id'}
          label={'District'}
          division_id={division_id}
          option={{ skip: !division_id }}
          disabled={!division_id}
          onClick={() => form.resetFields(['upazila_id'])}
        />
        <SelectUpazila
          lg={8}
          name={'upazila_id'}
          label={'Upazila'}
          district_id={district_id}
          option={{ skip: !district_id }}
          disabled={!district_id}
        />

        <FormInputText lg={8} name={'village'} label={'Village'} />
        <FormInputText lg={8} name={'nationality'} label={'Nationality'} />
        <FormInputText
          lg={8}
          name={'office_address'}
          label={'Office Address'}
        />
        <FormInputDate lg={8} name={'dob'} label={'Date of Birth'} />
        <FormInputText lg={8} name={'occupation'} label={'Occupation'} />
        <FormInputText lg={8} name={'nid_no'} label={'NID'} />
        <FormInputMobile lg={8} name={'co_mobile'} label={'Co Mobile'} />
        <FormInputText lg={8} name={'relationship'} label={'Relationship'} />
        <FormInputText lg={8} name={'education'} label={'Education'} />

        <FormInputSelect
          name={'gender'}
          label={'Gender'}
          lg={8}
          options={[
            { label: 'MALE', value: 'MALE' },
            { label: 'FEMALE', value: 'FEMALE' },
            { label: 'OTHER', value: 'OTHER' },
          ]}
        />
        <FormImageUpload_V1 maxCount={1} name={'image'} label={'Photo'} />
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

export default StudentInputs;
