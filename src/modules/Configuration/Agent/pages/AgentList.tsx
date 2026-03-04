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
  useDeleteAgentMutation,
  useGetAgentListQuery,
} from '../api/agentEndpoints';
import CreateAgent from '../components/CreateAgent';
import UpdateAgent from '../components/UpdateAgent';
import ViewAgent from '../components/ViewAgent';
import ViewButton from '../../../../common/Button/ViewButton';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';

const AgentList = () => {
  const { can_create, can_delete, can_update } = useCheckPermission('AGENT');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetAgentListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteAgentMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Agent',
            content: <CreateAgent />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Agent List'
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
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'email', key: 'email', title: 'Email' },
          { dataIndex: 'mobile_no', key: 'mobile_no', title: 'Mobile' },
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
                        title: 'View Agent',
                        content: <ViewAgent record={record} />,
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
                        title: 'Edit Agent',
                        content: <UpdateAgent record={record} />,
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

export default AgentList;
