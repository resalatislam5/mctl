import { Card } from 'antd';
import type { IAuditLogList } from '../types/auditLogTypes';

const ViewAuditReport = ({ record }: { record: IAuditLogList }) => {
  return (
    <Card style={{ background: '#f6f8fa' }}>
      <pre>
        <code>
          {JSON.stringify(JSON.parse(record.changes || '{}'), null, 2)}
        </code>
      </pre>
    </Card>
  );
};

export default ViewAuditReport;
