import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import AntTable from '../../../../common/Table/AntTable';
import { getStatusTag } from '../../../../common/utils/status';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useDeleteRoleMutation } from '../../Role/api/roleEndpoints';
import { useUserListQuery } from '../api/userEndpoints';
import CreateUser from '../components/CreateUser';
import UpdateUser from '../components/UpdateUser';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';

const UserList = () => {
  const { query } = useQueryParams({});

  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useUserListQuery(query);
  const [deleteItem, { isLoading: isDeleting }] = useDeleteRoleMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create User',
            content: <CreateUser />,
            open: true,
            width: 600,
          }),
        )
      }
      title='User List'
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        columns={[
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'email', key: 'email', title: 'Email' },
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
            render: (_, record) => (
              <Space>
                <EditButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit User',
                        content: <UpdateUser record={record} />,
                        open: true,
                        width: 500,
                      }),
                    )
                  }
                />

                <DeleteButton
                  onClick={() => deleteItem(record._id)}
                  loading={isDeleting}
                />
              </Space>
            ),
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default UserList;
