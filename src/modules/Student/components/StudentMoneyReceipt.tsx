import AntTable from '../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import { useGetMoneyReceiptListQuery } from '../../MoneyReceipt/api/moneyReceiptEndpoints';

const StudentMoneyReceipt = ({ id }: { id: string | undefined }) => {
  const { data, isFetching, isLoading } = useGetMoneyReceiptListQuery({
    student_id: id,
  });
  return (
    <div>
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        columns={[
          {
            dataIndex: 'date',
            key: 'date',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          {
            dataIndex: 'student_name',
            key: 'student_name',
            title: 'Student Name',
          },

          { dataIndex: 'batch_no', key: 'batch_no', title: 'Batch No' },
          {
            dataIndex: 'voucher_no',
            key: 'voucher_no',
            title: 'Voucher No',
          },
          {
            dataIndex: 'payment_method',
            key: 'payment_method',
            title: 'Payment Method',
          },
          {
            dataIndex: 'amount',
            key: 'amount',
            title: 'Amount',
          },
        ]}
      />
    </div>
  );
};

export default StudentMoneyReceipt;
