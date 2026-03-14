import {
  Col,
  Flex,
  Form,
  Row,
  Table,
  type FormInstance,
  type FormListFieldData,
} from 'antd';

import { useWatch } from 'antd/es/form/Form';
import CommonButton from '../../../../common/Button/CommonButton';
import FromSubmit from '../../../../common/Button/FromSubmit';
import {
  FormInputDate,
  FormInputNumber,
  FormInputSelect,
  FormInputTextArea,
} from '../../../../common/Form/FormIInput';
import {
  SelectAccount,
  SelectHead,
} from '../../../../common/SelectWithApi/Select';
import AntTable from '../../../../common/Table/AntTable';
import { ACCOUNT_TYPE_OPTIONS } from '../../../Account/types/accountTypes';
import type { ICreateExpenseHistory } from '../types/expenseHistoryTypes';
import dayjs from 'dayjs';
import { useEffect } from 'react';

type Props = {
  onFinish: (arg: ICreateExpenseHistory) => void;
  form: FormInstance<ICreateExpenseHistory>;
  loading: boolean;
  editMode?: boolean;
};

const ExpenseHistoryInputs = ({ onFinish, form, loading, editMode }: Props) => {
  const account_type = useWatch('account_type', form);
  const expense_details = useWatch('expense_details', form);
  useEffect(() => {
    if (expense_details) {
      const totalAmount = expense_details?.reduce(
        (acc, cur) => acc + Number(cur?.amount || 0),
        0,
      );
      form.setFieldValue('total_amount', totalAmount);
    }
  }, [form, expense_details]);
  return (
    <Form onFinish={onFinish} form={form} initialValues={{ date: dayjs() }}>
      <Row gutter={[8, 8]}>
        <FormInputDate lg={12} name={'date'} label={'Date'} required />
        <FormInputSelect
          name={'account_type'}
          label={'Account Type'}
          lg={12}
          options={ACCOUNT_TYPE_OPTIONS}
          required
          onChange={() => form.resetFields(['acc_id'])}
        />
        <SelectAccount
          name={'acc_id'}
          label={'Account'}
          lg={12}
          payment_method={account_type}
          option={{ Skip: !account_type }}
          required
          disabled={!account_type}
        />
        <FormInputNumber
          lg={12}
          name={'total_amount'}
          label={'Amount'}
          required
          readOnly
        />
        <FormInputTextArea lg={24} name={'note'} label={'Note'} />
        <Col span={24}>
          <Form.List name='expense_details' initialValue={[{}]}>
            {(fields: FormListFieldData[], { add, remove }) => {
              const columns = [
                {
                  title: 'Head',
                  render: (_: string, field: FormListFieldData) => (
                    <SelectHead
                      name={[field.name, 'head_id']}
                      style={{ margin: 0, width: '250px' }}
                      label={''}
                      noStyleLabel={'Head'}
                      placeholder='Enter Your Head'
                      required
                      lg={24}
                    />
                  ),
                },
                {
                  title: 'Amount',
                  render: (_: string, field: FormListFieldData) => (
                    <FormInputNumber
                      name={[field.name, 'amount']}
                      style={{ margin: 0 }}
                      label={''}
                      placeholder='Enter Your Amount'
                      noStyleLabel={'Amount'}
                      required
                      lg={24}
                    />
                  ),
                },
                {
                  title: 'Action',
                  render: (_: any, field: FormListFieldData) => (
                    <CommonButton
                      disabled={fields.length === 1}
                      onClick={() => remove(field.name)}
                      danger
                      size='small'
                      type='dashed'
                      icon='ic:baseline-minus'
                    />
                  ),
                },
              ];

              return (
                <>
                  <AntTable
                    columns={columns}
                    dataSource={fields}
                    pagination={false}
                    showTotal={false}
                    rowKey='key'
                    summary={() => (
                      <Table.Summary.Row>
                        <Table.Summary.Cell index={0} colSpan={4}>
                          <Flex justify='end'>
                            <CommonButton
                              onClick={() => add()}
                              icon={'ic:round-plus'}
                              text='Add'
                            />
                          </Flex>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                    )}
                  />
                </>
              );
            }}
          </Form.List>
        </Col>
      </Row>
      <FromSubmit
        text={editMode ? 'Update' : 'Create'}
        loading={loading}
        style={{ marginTop: '18px' }}
      />
    </Form>
  );
};

export default ExpenseHistoryInputs;
