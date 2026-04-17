import { Card, Descriptions } from 'antd';
import { getStatusTag, type StatusType } from '../../../../common/utils/status';
import type { IAccountList } from '../types/accountTypes';

const ViewAccount = ({ record }: { record: IAccountList }) => {
  const {
    name,
    status,
    acc_number,
    account_type,
    bank_name,
    branch_name,
    opening_balance,
    charge_percent,
  } = record || {};
  return (
    <Card className='modal-container'>
      <Descriptions
        column={1}
        bordered
        items={[
          {
            key: 'account_type',
            label: 'Account Type',
            children: account_type,
          },
          { key: 'account_name', label: 'Account Name', children: name },
          ...(bank_name
            ? [
                {
                  key: 'bank_name',
                  label: 'Bank Name',
                  children: bank_name,
                },
              ]
            : []),
          ...(branch_name
            ? [
                {
                  key: 'branch_name',
                  label: 'Acc Number',
                  children: branch_name,
                },
              ]
            : []),
          ...(acc_number
            ? [
                {
                  key: 'acc_number',
                  label: 'Acc Number',
                  children: acc_number,
                },
              ]
            : []),
          ...(charge_percent
            ? [
                {
                  key: 'charge_percent',
                  label: 'Charge (%)',
                  children: charge_percent,
                },
              ]
            : []),

          {
            key: 'opening_balance',
            label: 'Opening Balance',
            children: opening_balance,
          },

          {
            key: 'status',
            label: 'Status',
            children: getStatusTag(status as StatusType),
          },
        ].filter(Boolean)}
      />
    </Card>
  );
};

export default ViewAccount;
