import { Button, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;

  icon?: string;
}
const CommonButton = ({ icon, text, ...rest }: Props) => {
  return (
    <Button
      icon={<Iconify icon={icon || ''} />}
      {...rest}
      type='primary'
      size='middle'
    >
      {text}
    </Button>
  );
};

export default CommonButton;
