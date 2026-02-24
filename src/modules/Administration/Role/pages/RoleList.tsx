import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import { getStatusTag } from '../../../../common/utils/status';

import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import ViewButton from '../../../../common/Button/ViewButton';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import {
  useDeleteRoleMutation,
  useGetRoleListQuery,
} from '../api/roleEndpoints';
import CreateRole from '../components/CreateRole';
import UpdateRole from '../components/UpdateRole';
import ViewRole from '../components/ViewRole';

const RoleList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useGetRoleListQuery({});
  const [deleteItem, { isLoading: isDeleting }] = useDeleteRoleMutation();

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
            render: (text) => dateAndTimeFormat(text),
            width: 150,
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
            render: (text) => getStatusTag(text),
          },
          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_, record) => (
              <Space>
                <ViewButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'view Role',
                        content: <ViewRole id={record?._id} />,
                        open: true,
                        width: 1000,
                      }),
                    )
                  }
                />
                <EditButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Role',
                        content: <UpdateRole id={record._id} />,
                        open: true,
                        width: 1000,
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

export default RoleList;
