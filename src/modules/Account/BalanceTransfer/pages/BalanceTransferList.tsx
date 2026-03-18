import { Space } from 'antd';

import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import ViewButton from '../../../../common/Button/ViewButton';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import {
  useDeleteBalanceTransferMutation,
  useGetBalanceTransferListQuery,
} from '../api/balanceTransferEndpoints';
import CreateBalanceTransfer from '../components/CreateBalanceTransfer';
import UpdateBalanceTransfer from '../components/UpdateBalanceTransfer';

const BalanceTransferList = () => {
  const { can_create, can_delete, can_update } =
    useCheckPermission('BALANCE_TRANSFER');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetBalanceTransferListQuery(query);
  const [deleting, { isLoading: isDeleting }] =
    useDeleteBalanceTransferMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Balance Transfer',
            content: <CreateBalanceTransfer />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Balance Transfer List'
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
            dataIndex: 'voucher_no',
            key: 'voucher_no',
            title: 'Voucher No',
          },
          {
            dataIndex: 'from_acc_name',
            key: 'from_acc_name',
            title: 'From Account Name',
          },
          {
            dataIndex: 'to_acc_name',
            key: 'to_acc_name',
            title: 'To Account Name',
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
                <ViewButton path={`/account/balance-transfer/${record?._id}`} />
                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit BalanceTransfer',
                        content: <UpdateBalanceTransfer record={record} />,
                        open: true,
                        width: 600,
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

export default BalanceTransferList;
