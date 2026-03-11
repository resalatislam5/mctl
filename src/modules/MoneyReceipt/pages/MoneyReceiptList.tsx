import { Space } from 'antd';

import { openModal } from '../../../app/features/modalSlice';
import { useAppDispatch } from '../../../app/hooks/hooks';
import DeleteButton from '../../../common/Button/DeleteButton';
import EditButton from '../../../common/Button/EditButton';
import ViewButton from '../../../common/Button/ViewButton';
import useCheckPermission from '../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../common/hooks/useQueryParams';
import AntTable from '../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import {
  useDeleteMoneyReceiptMutation,
  useGetMoneyReceiptListQuery,
} from '../api/moneyReceiptEndpoints';
import CreateMoneyReceipt from '../components/CreateMoneyReceipt';
import UpdateMoneyReceipt from '../components/UpdateMoneyReceipt';

const MoneyReceiptList = () => {
  const { can_create, can_delete, can_update } =
    useCheckPermission('MONEY_RECEIPT');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetMoneyReceiptListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteMoneyReceiptMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create MoneyReceipt',
            content: <CreateMoneyReceipt />,
            open: true,
            width: 1000,
          }),
        )
      }
      title='MoneyReceipt List'
      options={{ showButton: can_create }}
    >
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
          { dataIndex: 'voucher_no', key: 'voucher_no', title: 'Voucher No' },
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

          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton path={`/MoneyReceipt/${record?._id}`} />

                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit MoneyReceipt',
                        content: <UpdateMoneyReceipt _id={record._id} />,
                        open: true,
                        width: 1000,
                      }),
                    )
                  }
                />
                <DeleteButton
                  can_delete={can_delete}
                  loading={isDeleting}
                  onClick={() => deleting(record._id)}
                />
              </Space>
            ),
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default MoneyReceiptList;
