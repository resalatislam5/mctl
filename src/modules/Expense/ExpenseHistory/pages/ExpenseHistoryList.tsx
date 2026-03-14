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
  useDeleteExpenseHistoryMutation,
  useGetExpenseHistoryListQuery,
} from '../api/expenseHistoryEndpoints';
import CreateExpenseHistory from '../components/CreateExpenseHistory';
import UpdateExpenseHistory from '../components/UpdateExpenseHistory';

const ExpenseHistoryList = () => {
  const { can_create, can_delete, can_update } =
    useCheckPermission('EXPENSE_HISTORY');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetExpenseHistoryListQuery(query);
  const [deleting, { isLoading: isDeleting }] =
    useDeleteExpenseHistoryMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Expense History',
            content: <CreateExpenseHistory />,
            open: true,
            width: 800,
          }),
        )
      }
      title='Expense History List'
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
            title: 'Created Date',
            render: (text) => dateAndTimeFormat(text),
          },

          { dataIndex: 'voucher_no', key: 'voucher_no', title: 'Voucher No.' },
          {
            dataIndex: 'account_type',
            key: 'account_type',
            title: 'Account Type',
          },
          {
            dataIndex: 'account_name',
            key: 'account_name',
            title: 'Account Name',
          },
          { dataIndex: 'total_amount', key: 'total_amount', title: 'Amount' },
          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton path={`/expense/expense-history/${record?._id}`} />
                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Expense History',
                        content: <UpdateExpenseHistory _id={record?._id} />,
                        open: true,
                        width: 800,
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

export default ExpenseHistoryList;
