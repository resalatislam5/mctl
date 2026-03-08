import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import AntTable from '../../../../common/Table/AntTable';
import { getStatusTag } from '../../../../common/utils/status';
import ContainerLayout from '../../../../layout/components/ContainerLayout';

import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import {
  useDeleteUpazilaMutation,
  useGetUpazilaListQuery,
} from '../api/upazilaEndpoints';
import CreateUpazila from '../components/CreateUpazila';
import UpdateUpazila from '../components/UpdateUpazila';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';

const UpazilaList = () => {
  const { can_create, can_delete, can_update } = useCheckPermission('UPAZILA');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetUpazilaListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteUpazilaMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Upazila',
            content: <CreateUpazila />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Upazila List'
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
          { dataIndex: 'code', key: 'code', title: 'Code' },
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
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Upazila',
                        content: <UpdateUpazila _id={record._id} />,
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

export default UpazilaList;
