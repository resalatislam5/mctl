import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import { getStatusTag } from '../../../../common/utils/status';
import ReportContainer from '../../../../layout/components/ReportContainer';
import { useAuditLogListQuery } from '../api/auditLogEndpoints';

const AuditLogReport = () => {
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useAuditLogListQuery(query);

  return (
    <ReportContainer title='Audit Log ' options={{}}>
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
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          { dataIndex: 'user_name', key: 'user_name', title: 'Name' },
          {
            dataIndex: 'action',
            key: 'action',
            title: 'Action',
            render: (text) => getStatusTag(text),
          },
          {
            dataIndex: 'description',
            key: 'description',
            title: 'Description',
          },
        ]}
      />
    </ReportContainer>
  );
};

export default AuditLogReport;
