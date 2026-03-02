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
  useDeleteDivisionMutation,
  useGetDivisionListQuery,
} from '../api/divisionEndpoints';
import CreateDivision from '../components/CreateDivision';
import UpdateDivision from '../components/UpdateDivision';

const DivisionList = () => {
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetDivisionListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteDivisionMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Division',
            content: <CreateDivision />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Division List'
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
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Division',
                        content: <UpdateDivision record={record} />,
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

export default DivisionList;
