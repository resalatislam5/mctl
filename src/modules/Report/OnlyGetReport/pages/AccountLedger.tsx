import { Table, Typography } from 'antd';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import { SelectAccount } from '../../../../common/SelectWithApi/Select';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import {
  advanceNumberFormat,
  dueNumberFormat,
} from '../../../../common/utils/numberFormate';
import ReportContainer from '../../../../layout/components/ReportContainer';
import { useGetAccountLedgerQuery } from '../api/OnlyGetReportEndpoints';
import type { IAccountLedgerQuery } from '../types/OnlyGetReportTypes';
import { FormInputSelect } from '../../../../common/Form/FormIInput';

const AccountLedger = () => {
  const { query, setQuery } = useQueryParams<IAccountLedgerQuery>();
  const { data, isLoading, isFetching } = useGetAccountLedgerQuery(query, {
    skip: !query.from_date && !query.to_date,
  });

  return (
    <ReportContainer
      title='Account Ledger'
      additionalFilter={
        <>
          <SelectAccount
            label='Account'
            name='account_id'
            sm={8}
            md={8}
            lg={5}
            onChange={(e) => setQuery({ account_id: e })}
            defaultValue={query.account_id ? query?.account_id : undefined}
          />
          <FormInputSelect
            label='With Balance Transfer'
            name='is_balance_transfer'
            sm={8}
            md={8}
            lg={5}
            onChange={(e) => setQuery({ is_balance_transfer: e })}
            defaultValue={
              query.is_balance_transfer ? query?.is_balance_transfer : undefined
            }
            options={[
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ]}
          />
        </>
      }
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        pagination={false}
        columns={[
          {
            dataIndex: 'date',
            key: 'date',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          { dataIndex: 'voucher_no', key: 'voucher_no', title: 'Voucher No' },
          {
            dataIndex: 'type',
            key: 'type',
            title: 'Type',
          },
          {
            title: 'Debit',
            render: (_, record) =>
              record.type === 'DEBIT' && dueNumberFormat(record?.amount),
          },
          {
            title: 'Credit',
            render: (_, record) =>
              record.type === 'CREDIT' && advanceNumberFormat(record?.amount),
          },
          {
            dataIndex: 'description',
            key: 'description',
            title: 'Description',
            width: 400,
          },
        ]}
        summary={(record) => {
          const total = {
            debit: 0,
            credit: 0,
          };
          record.forEach((item) => {
            if (item.type === 'DEBIT') {
              total.debit += Number(item.amount);
            } else {
              total.credit += Number(item.amount);
            }
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}></Table.Summary.Cell>

                <Table.Summary.Cell index={1}>
                  {dueNumberFormat(total.debit)}
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  {advanceNumberFormat(total?.credit)}
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}></Table.Summary.Cell>
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={4}>
                  <Typography.Paragraph
                    strong
                    style={{ margin: 0, textAlign: 'right' }}
                  >
                    Available Balance:
                  </Typography.Paragraph>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={0} colSpan={4}>
                  {total.credit > total.debit
                    ? advanceNumberFormat(total.credit - total.debit)
                    : dueNumberFormat(total.credit - total.debit)}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </ReportContainer>
  );
};

export default AccountLedger;
