import { Card, Descriptions } from 'antd';
import type { IAgentList } from '../types/agentTypes';
import { getStatusTag, type StatusType } from '../../../../common/utils/status';

const ViewAgent = ({ record }: { record: IAgentList }) => {
  const {
    commission,
    email,
    min_limit,
    mobile_no,
    name,
    paid_amount,
    status,
    total_amount,
  } = record || {};
  return (
    <Card className='modal-container'>
      <Descriptions
        column={1}
        bordered
        items={[
          { key: 'name', label: 'Name', children: name },
          { key: 'email', label: 'Email', children: email },
          { key: 'mobile', label: 'Mobile', children: mobile_no },
          { key: 'commission', label: 'Commission', children: commission },
          { key: 'min_limit', label: 'Min Limit', children: min_limit },
          { key: 'paid_amount', label: 'Paid Amount', children: paid_amount },
          {
            key: 'total_amount',
            label: 'Total Amount',
            children: total_amount,
          },
          {
            key: 'payable_amount',
            label: 'Payable Amount',
            children: Number(total_amount) - Number(paid_amount),
          },
          {
            key: 'status',
            label: 'Status',
            children: getStatusTag(status as StatusType),
          },
        ]}
      />
    </Card>
  );
};

export default ViewAgent;
