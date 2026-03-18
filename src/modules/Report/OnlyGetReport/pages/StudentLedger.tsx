import { Table } from 'antd';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import { SelectBatch } from '../../../../common/SelectWithApi/Select';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import {
  advanceNumberFormat,
  dueNumberFormat,
  numberWithComma,
} from '../../../../common/utils/numberFormate';
import ReportContainer from '../../../../layout/components/ReportContainer';
import { useGetStudentLedgerQuery } from '../api/OnlyGetReportEndpoints';
import type { IStudentLedgerQuery } from '../types/OnlyGetReportTypes';

const StudentLedger = () => {
  const { query, setQuery } = useQueryParams<IStudentLedgerQuery>();
  const { data, isLoading, isFetching } = useGetStudentLedgerQuery(query, {
    skip: !query?.batch_id,
  });

  return (
    <ReportContainer
      title='Student Ledger'
      options={{ showDateRange: false }}
      additionalFilter={
        <>
          <SelectBatch
            label='Batch'
            name='batch_id'
            sm={8}
            md={8}
            lg={5}
            onChange={(e) => setQuery({ batch_id: e })}
            defaultValue={query.batch_id ? query?.batch_id : undefined}
            required
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
            dataIndex: 'admission_date',
            key: 'admission_date',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          { dataIndex: 'student_name', key: 'student_name', title: 'Name' },
          {
            dataIndex: 'student_code',
            key: 'student_code',
            title: 'Student Code',
          },
          { dataIndex: 'code', key: 'code', title: 'Enrollment Code' },
          {
            dataIndex: 'total_amount',
            key: 'total_amount',
            title: 'Total Amount',
            render: (text) => numberWithComma(text),
          },
          {
            dataIndex: 'total_paid',
            key: 'total_paid',
            title: 'Paid Amount',
            render: (text) => advanceNumberFormat(text),
          },
          {
            title: 'Due',
            render: (_, record) =>
              dueNumberFormat(
                Number(record?.total_amount || 0) -
                  Number(record?.total_paid || 0),
              ),
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
            total.total_paid += Number(item.total_paid);
            total.due += Number(item.total_amount) - Number(item.total_paid);
          });
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={5}></Table.Summary.Cell>

              <Table.Summary.Cell index={1}>
                {numberWithComma(total.total_amount)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                {advanceNumberFormat(total?.total_paid)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3}>
                {dueNumberFormat(total.due)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          );
        }}
      />
    </ReportContainer>
  );
};

export default StudentLedger;
