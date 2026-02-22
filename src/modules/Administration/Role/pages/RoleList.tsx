import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import AntTable from '../../../../common/Table/AntTable';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useGetRoleListQuery } from '../api/roleEndpoints';
import CreateRole from '../components/CreateRole';

const RoleList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useGetRoleListQuery({});
  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Role',
            content: <CreateRole />,
            open: true,
            width: 1000,
          }),
        )
      }
      title='Role List'
    >
      <AntTable
        dataSource={data?.data || []}
        rowKey={'_id'}
        loading={isLoading || isFetching}
        bordered
        columns={[
          {
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
          },
          {
            dataIndex: 'name',
            key: 'name',
            title: 'Name',
          },
          {
            dataIndex: 'status',
            key: 'status',
            title: 'Status',
            render: (text) => text,
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default RoleList;
