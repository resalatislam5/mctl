import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import AntTable from '../../../../common/Table/AntTable';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useUserListQuery } from '../api/userEndpoints';
import CreateUser from '../components/CreateUser';

const UserList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useUserListQuery({});

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
        columns={[
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'email', key: 'email', title: 'Email' },
          { dataIndex: 'status', key: 'status', title: 'Email' },
        ]}
      />
    </ContainerLayout>
  );
};

export default UserList;
