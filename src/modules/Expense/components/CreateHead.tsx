import { Card } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { sanitizeObjectValue } from '../../../common/utils/sanitizeObjectValue';
import { useCreateHeadMutation } from '../api/headEndpoints';
import type { ICreateHead } from '../types/headTypes';
import HeadInputs from './HeadInputs';

const CreateHead = () => {
  const [form] = useForm();
  const [create, { isLoading }] = useCreateHeadMutation();
  const onFinish = (values: ICreateHead) => {
    const body = sanitizeObjectValue(values);
    create(body)
      .unwrap()
      .then(() => {
        form.resetFields();
      });
  };

  return (
    <Card size='small' className='modal-container'>
      <HeadInputs onFinish={onFinish} form={form} loading={isLoading} />
    </Card>
  );
};

export default CreateHead;
