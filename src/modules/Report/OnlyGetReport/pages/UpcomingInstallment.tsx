import { Card, Divider, Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import ViewButton from '../../../../common/Button/ViewButton';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import {
  advanceNumberFormat,
  dueNumberFormat,
  numberWithComma,
} from '../../../../common/utils/numberFormate';
import ReportContainer from '../../../../layout/components/ReportContainer';
import { useGetUpcomingInstallmentQuery } from '../api/OnlyGetReportEndpoints';
import type {
  IUpcomingInstallment,
  IUpcomingInstallmentQuery,
} from '../types/OnlyGetReportTypes';

const InstallmentModal = ({ record }: { record: IUpcomingInstallment }) => {
  return (
    <Card className='modal-container'>
      <Card title='Match Installment' size='small'>
        <AntTable
          dataSource={record.matched_installments}
          rowKey={'_id'}
          bordered
          size='small'
          pagination={false}
          showTotal={false}
          columns={[
            {
              dataIndex: 'name',
              key: 'name',
              title: 'Name',
            },
            {
              dataIndex: 'date',
              key: 'date',
              title: 'Date',
              render: (text) => dateAndTimeFormat(text),
            },
          ]}
        />
      </Card>
      <Divider />
      <Card title='All Installment' size='small' style={{ marginTop: 16 }}>
        <AntTable
          dataSource={record.installment_date}
          rowKey={'_id'}
          bordered
          size='small'
          pagination={false}
          showTotal={false}
          columns={[
            {
              dataIndex: 'name',
              key: 'name',
              title: 'Name',
            },
            {
              dataIndex: 'date',
              key: 'date',
              title: 'Date',
              render: (text) => dateAndTimeFormat(text),
            },
          ]}
        />
      </Card>
    </Card>
  );
};
const UpcomingInstallment = () => {
  const { query } = useQueryParams<IUpcomingInstallmentQuery>();
  const { data, isLoading, isFetching } = useGetUpcomingInstallmentQuery(
    query,
    {
      skip: !query?.from_date || !query?.to_date,
    },
  );

  const dispatch = useAppDispatch();

  return (
    <ReportContainer
      title='Upcoming Installment'
      additionalFilter={
        <>
          {/* <FormInputDate
            label='Date'
            name='date'
            sm={8}
            md={8}
            lg={5}
            onChange={(e) => setQuery({ date: dayjs(e).format('YYYY-MM-DD') })}
            defaultValue={query.date ? dayjs(query?.date) : null}
            required
          /> */}
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
          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'View Upcoming Installment',
                        content: <InstallmentModal record={record} />,
                        width: 700,
                        open: true,
                      }),
                    )
                  }
                />
              </Space>
            ),
          },
        ]}
      />
    </ReportContainer>
  );
};

export default UpcomingInstallment;
