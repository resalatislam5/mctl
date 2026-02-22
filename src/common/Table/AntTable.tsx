import { Empty, Skeleton, Table, Typography, type TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Props<T> extends Omit<
  TableProps<T>,
  'rowKey' | 'columns' | 'dataSource'
> {
  size?: 'small' | 'middle' | 'large';
  rowKey: string | keyof T | ((record: T) => string);
  columns: ColumnsType<T>;
  dataSource?: T[];
  loading?: boolean;
  showTotal?: boolean; // optional total row title
  skeletonRows?: number; // how many rows to show in skeleton
}

const AntTable = <T extends object>({
  size = 'small',
  rowKey,
  columns,
  dataSource = [],
  loading = false,
  showTotal = true,
  skeletonRows = 5,
  ...rest
}: Props<T>) => {
  // Render Skeleton dynamically based on columns
  if (loading) {
    return <Skeleton active paragraph={{ rows: skeletonRows }} />;
  }

  return (
    <Table<T>
      bordered
      size={size}
      rowKey={rowKey}
      columns={columns}
      dataSource={dataSource}
      title={
        showTotal
          ? () => <Typography.Text strong>Total Result</Typography.Text>
          : undefined
      }
      locale={{ emptyText: <Empty description='No Data' /> }}
      {...rest}
    />
  );
};

export default AntTable;
