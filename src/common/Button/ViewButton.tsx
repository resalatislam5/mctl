import { Button, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;
  icon?: string;
}
const ViewButton = ({ icon, text, ...rest }: Props) => {
  return (
    <Button {...rest} type='primary' size='small'>
      <Iconify icon={icon || 'raphael:view'} />
      {text}
    </Button>
  );
};

export default ViewButton;
