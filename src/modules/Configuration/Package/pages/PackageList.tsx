import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import AntTable from '../../../../common/Table/AntTable';
import { getStatusTag } from '../../../../common/utils/status';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import {
  useDeletePackageMutation,
  useGetPackageListQuery,
} from '../api/packageEndpoints';
import CreatePackage from '../components/CreatePackage';
import UpdatePackage from '../components/UpdatePackage';
import ViewButton from '../../../../common/Button/ViewButton';
import ViewPackage from '../components/ViewPackage';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';

const PackageList = () => {
  const { can_create, can_delete, can_update } = useCheckPermission('PACKAGE');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetPackageListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeletePackageMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Package',
            content: <CreatePackage />,
            open: true,
            width: 700,
          }),
        )
      }
      title='Package List'
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
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'price', key: 'price', title: 'Price' },
          {
            dataIndex: 'status',
            key: 'status',
            title: 'Status',
            render: (text) => getStatusTag(text),
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'View Package',
                        content: <ViewPackage _id={record._id} />,
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
                        title: 'Edit Package',
                        content: <UpdatePackage record={record} />,
                        open: true,
                        width: 700,
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

export default PackageList;
