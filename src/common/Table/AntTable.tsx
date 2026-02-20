import { Table, Typography, type TableProps } from 'antd';

interface Props extends TableProps {
  size?: 'small' | 'middle' | 'large';
}

const AntTable = ({ size, ...rest }: Props) => {
  return (
    <Table
      title={() => <Typography.Text strong>Total Result </Typography.Text>}
      bordered
      size={size || 'small'}
      {...rest}
    />
  );
};

export default AntTable;
