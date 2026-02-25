import { Empty, Table, Typography, type TableProps } from 'antd';
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
  total?: number; // total total for pagination
}

const AntTable = <T extends object>({
  size = 'small',
  rowKey,
  columns,
  dataSource = [],
  loading = false,
  showTotal = true,
  total,
  ...rest
}: Props<T>) => {
  return (
    <Table<T>
      bordered
      loading={loading}
      size={size}
      rowKey={rowKey}
      columns={columns}
      dataSource={dataSource}
      title={
        showTotal
          ? () => (
              <Typography.Text strong>
                Total Result Found {total || 0}
              </Typography.Text>
            )
          : undefined
      }
      locale={{ emptyText: <Empty description='No Data' /> }}
      {...rest}
    />
  );
};

export default AntTable;
