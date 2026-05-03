import { Space } from 'antd';

import {
  useDeleteAccountMutation,
  useGetAccountListQuery,
} from '../api/accountEndpoints';
import CreateAccount from '../components/CreateAccount';
import UpdateAccount from '../components/UpdateAccount';
import ViewAccount from '../components/ViewAccount';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { openModal } from '../../../../app/features/modalSlice';
import AntTable from '../../../../common/Table/AntTable';
import { getStatusTag } from '../../../../common/utils/status';
import ViewButton from '../../../../common/Button/ViewButton';
import EditButton from '../../../../common/Button/EditButton';
import DeleteButton from '../../../../common/Button/DeleteButton';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';

const AccountList = () => {
  const { can_create, can_delete, can_update } = useCheckPermission('ACCOUNT');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetAccountListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteAccountMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Account',
            content: <CreateAccount />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Account List'
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
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          {
            dataIndex: 'account_type',
            key: 'account_type',
            title: 'Account Type',
          },
          { dataIndex: 'name', key: 'name', title: 'Account Name' },
          {
            dataIndex: 'acc_number',
            key: 'acc_number',
            title: 'Account Number',
          },
          {
            dataIndex: 'status',
            key: 'status',
            title: 'Status',
            render: (text) => getStatusTag(text),
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
                        title: 'View Account',
                        content: <ViewAccount record={record} />,
                        open: true,
                        width: 600,
                      }),
                    )
                  }
                />
                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Account',
                        content: <UpdateAccount record={record} />,
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

export default AccountList;
