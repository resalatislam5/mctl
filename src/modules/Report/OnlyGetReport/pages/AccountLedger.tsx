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

const AccountLedger = () => {
  const { query, setQuery } = useQueryParams<IAccountLedgerQuery>();
  const { data, isLoading, isFetching } = useGetAccountLedgerQuery(query, {
    skip: !query.from_date || !query.to_date || !query.account_id,
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
            required
          />
        </>
      }
    >
      <AntTable
        dataSource={data?.data?.transactions}
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
            dataIndex: 'description',
            key: 'description',
            title: 'Description',
            width: 400,
          },
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
            title: 'Last Balance',
            dataIndex: 'last_balance',
            render: (text) => advanceNumberFormat(text),
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
                <Table.Summary.Cell index={0} colSpan={5}>
                  <Typography.Paragraph
                    strong
                    style={{ margin: 0, textAlign: 'right' }}
                  >
                    Total:
                  </Typography.Paragraph>
                </Table.Summary.Cell>

                <Table.Summary.Cell index={1}>
                  {dueNumberFormat(total.debit)}
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  {advanceNumberFormat(total?.credit)}
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}></Table.Summary.Cell>
              </Table.Summary.Row>

              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={5}>
                  <Typography.Paragraph
                    strong
                    style={{ margin: 0, textAlign: 'right' }}
                  >
                    Available Balance:
                  </Typography.Paragraph>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={3}>
                  {total.credit > total.debit
                    ? advanceNumberFormat(total.credit + total.debit)
                    : dueNumberFormat(total.credit + total.debit)}
                </Table.Summary.Cell>
              </Table.Summary.Row>

              <Table.Summary.Row>
                <Table.Summary.Cell index={0} colSpan={5}>
                  <Typography.Paragraph
                    strong
                    style={{ margin: 0, textAlign: 'right' }}
                  >
                    Last Available Balance:
                  </Typography.Paragraph>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} colSpan={3}>
                  {data?.data?.total_last_balance || 0}
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
