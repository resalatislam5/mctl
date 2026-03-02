import { useForm } from 'antd/es/form/Form';
import { Card } from 'antd';
import { useEffect } from 'react';
import type { ICreateDivision, IDivisionList } from '../types/divisionTypes';
import { useUpdateDivisionMutation } from '../api/divisionEndpoints';
import DivisionInputs from './DivisionInputs';
import { sanitizeObjectValue } from '../../../../common/utils/sanitizeObjectValue';

type Props = {
  record: IDivisionList;
};
const UpdateDivision = ({ record }: Props) => {
  const [form] = useForm();
  const { name, code, status, _id, country_id } = record;
  const [update, { isLoading }] = useUpdateDivisionMutation();

  const onFinish = (values: ICreateDivision) => {
    const body = sanitizeObjectValue(values);
    update({ body, id: _id })
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        name,
        code,
        status,
        country_id,
      });
    }
  }, [form, name, code, status, country_id, record]);

  return (
    <Card size='small' className='modal-container'>
      <DivisionInputs
        onFinish={onFinish}
        form={form}
        loading={isLoading}
        editMode={true}
      />
    </Card>
  );
};

export default UpdateDivision;
