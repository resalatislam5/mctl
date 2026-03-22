import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import ViewButton from '../../../../common/Button/ViewButton';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import {
  useDeleteAgentPaymentMutation,
  useGetAgentPaymentListQuery,
} from '../api/agentPaymentEndpoints';
import UpdateAgentPayment from '../components/UpdateAgentPayment';
import CreateAgentPayment from '../components/CreateAgentPayment';

const AgentPaymentList = () => {
  const { can_create, can_delete, can_update } =
    useCheckPermission('AGENT_PAYMENT');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetAgentPaymentListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteAgentPaymentMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Agent Payment',
            content: <CreateAgentPayment />,
            open: true,
            width: 1000,
          }),
        )
      }
      title='Agent Payment List'
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
            dataIndex: 'date',
            key: 'date',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },

          { dataIndex: 'batch_no', key: 'batch_no', title: 'Batch No' },
          { dataIndex: 'voucher_no', key: 'voucher_no', title: 'Voucher No' },
          {
            dataIndex: 'payment_method',
            key: 'payment_method',
            title: 'Payment Method',
          },
          {
            dataIndex: 'acc_name',
            key: 'acc_name',
            title: 'Account',
          },
          {
            dataIndex: 'amount',
            key: 'amount',
            title: 'Amount',
          },

          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton path={`/agent/agent-payment/${record?._id}`} />

                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Agent Payment',
                        content: <UpdateAgentPayment _id={record._id} />,
                        open: true,
                        width: 1000,
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

export default AgentPaymentList;
