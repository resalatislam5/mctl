import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import AntTable from '../../../../common/Table/AntTable';
import ContainerLayout from '../../../../layout/components/ContainerLayout';

import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import { useGetAgentCommissionListQuery } from '../api/agentCommissionEndpoints';
import CreateAgentCommission from '../components/CreateAgentCommission';
// import ViewAgentCommission from '../components/ViewAgentCommission';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';
import {
  SelectAgent,
  SelectBatch,
} from '../../../../common/SelectWithApi/Select';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import {
  advanceNumberFormat,
  dueNumberFormat,
} from '../../../../common/utils/numberFormate';
import { type IAgentCommissionQuery } from '../types/agentCommissionTypes';
import { Typography } from 'antd';

const AgentCommissionList = () => {
  const { can_create } = useCheckPermission('AGENT_COMMISSION');
  const dispatch = useAppDispatch();
  const { query, setQuery } = useQueryParams<IAgentCommissionQuery>(false);
  const { data, isLoading, isFetching } = useGetAgentCommissionListQuery(
    query,
    { skip: !query.batch_id && !query?.agent_id },
  );

  return (
    <ContainerLayout
      buttonText='Generate'
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Agent Commission',
            content: <CreateAgentCommission />,
            open: true,
            width: 500,
          }),
        )
      }
      title='Agent Commission List'
      options={{ showButton: can_create, showSearch: false }}
      additionalFilter={
        <>
          {' '}
          <SelectBatch
            label='Batch'
            name='batch_id'
            sm={8}
            md={8}
            lg={4}
            onChange={(e) => setQuery({ batch_id: e })}
            defaultValue={query.batch_id}
            noStyle
          />
          <SelectAgent
            label='Agent'
            name='agent_id'
            sm={8}
            md={8}
            lg={4}
            onChange={(e) => setQuery({ agent_id: e })}
            noStyle
            defaultValue={query.agent_id}
          />
          <Typography.Text type='danger' style={{ fontSize: '10px' }}>
            (Please Select Batch or Agent)
          </Typography.Text>
        </>
      }
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        pagination={false}
        columns={[
          {
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            title: 'Generate Date',
            render: (text) => dateAndTimeFormat(text),
            width: 120,
          },
          { dataIndex: 'agent_name', key: 'agent_name', title: 'Agent Name' },
          { dataIndex: 'batch_no', key: 'batch_no', title: 'Batch No' },
          {
            dataIndex: 'total_students',
            key: 'total_students',
            title: 'T Student',
          },
          {
            dataIndex: 'eligible_students',
            key: 'eligible_students',
            title: 'E Student',
          },
          {
            dataIndex: 'total_amount',
            key: 'total_amount',
            title: 'T Amount',
          },
          {
            dataIndex: 'commission_rate',
            key: 'commission_rate',
            title: 'C Rate',
          },
          {
            dataIndex: 'min_limit',
            key: 'min_limit',
            title: 'Min Limit',
          },
          {
            dataIndex: 'commission_amount',
            key: 'commission_amount',
            title: 'C Amount',
          },
          {
            dataIndex: 'paid_amount',
            key: 'paid_amount',
            title: 'Paid',
            render: (text) => advanceNumberFormat(text),
          },
          {
            title: 'Due',
            render: (_, record) =>
              dueNumberFormat(
                Number(record.commission_amount) - Number(record.paid_amount),
              ),
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default AgentCommissionList;
