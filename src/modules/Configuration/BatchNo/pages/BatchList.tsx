import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import AntTable from '../../../../common/Table/AntTable';
import { getStatusTag } from '../../../../common/utils/status';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import {
  useDeleteBatchMutation,
  useGetBatchListQuery,
} from '../api/batchEndpoints';
import CreateBatch from '../components/CreateBatch';
import UpdateBatch from '../components/UpdateBatch';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';

const BatchList = () => {
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetBatchListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteBatchMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Batch',
            content: <CreateBatch />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Batch List'
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        columns={[
          { dataIndex: 'batch_no', key: 'batch_no', title: 'Batch No' },
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
                <EditButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Batch',
                        content: <UpdateBatch record={record} />,
                        open: true,
                        width: 600,
                      }),
                    )
                  }
                />
                <DeleteButton
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

export default BatchList;
