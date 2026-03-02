import { Button, Popconfirm, Tooltip, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;
  icon?: string;
  onClick?: () => void;
}
const DeleteButton = ({ text, icon, onClick, ...rest }: Props) => {
  return (
    <Tooltip title='Delete'>
      <Popconfirm
        title='Are you sure to delete this item?'
        onConfirm={onClick}
        // onCancel={cancel}
        okText='Yes'
        cancelText='No'
      >
        <Button {...rest} type='primary' danger size='small'>
          <Iconify icon={icon || 'ic:baseline-delete'} />
          {text}
        </Button>
      </Popconfirm>
    </Tooltip>
  );
};

export default DeleteButton;
