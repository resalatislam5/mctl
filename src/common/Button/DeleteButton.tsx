import { Button, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;
  icon?: string;
}
const DeleteButton = ({ text, icon, ...rest }: Props) => {
  return (
    <Button {...rest} type='primary' danger size='middle'>
      <Iconify icon={icon || 'ic:baseline-delete'} />
      {text}
    </Button>
  );
};

export default DeleteButton;
