import { Table, Typography } from 'antd';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import { SelectHead } from '../../../../common/SelectWithApi/Select';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import { numberWithComma } from '../../../../common/utils/numberFormate';
import ReportContainer from '../../../../layout/components/ReportContainer';
import { useGetExpenseReportQuery } from '../api/OnlyGetReportEndpoints';
import type { IExpenseReportQuery } from '../types/OnlyGetReportTypes';

const ExpenseReport = () => {
  const { query, setQuery } = useQueryParams<IExpenseReportQuery>();
  const { data, isLoading, isFetching } = useGetExpenseReportQuery(query, {
    skip: !query?.from_date && !query.to_date,
  });

  return (
    <ReportContainer
      title='Expense Report'
      additionalFilter={
        <>
          <SelectHead
            label='Head'
            name='head_id'
            sm={8}
            md={8}
            lg={5}
            onChange={(e) => setQuery({ head_id: e })}
            defaultValue={query.head_id ? query?.head_id : undefined}
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
            dataIndex: 'account_name',
            key: 'account_name',
            title: 'Account Name',
          },
          {
            dataIndex: 'expense_head_names',
            key: 'expense_head_names',
            title: 'Heads',
            render: (text) =>
              text?.map((item: string, index: number, record: string[]) => (
                <Typography.Text>
                  {item} {index !== record.length - 1 && ','}
                </Typography.Text>
              )),
          },
          {
            dataIndex: 'total_amount',
            key: 'total_amount',
            title: 'Total Amount',
          },
        ]}
        summary={(record) => {
          const total = {
            total_amount: 0,
            total_paid: 0,
            due: 0,
          };
          record.forEach((item) => {
            total.total_amount += Number(item.total_amount);
          });
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={5}></Table.Summary.Cell>

              <Table.Summary.Cell index={1}>
                {numberWithComma(total.total_amount)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          );
        }}
      />
    </ReportContainer>
  );
};

export default ExpenseReport;
