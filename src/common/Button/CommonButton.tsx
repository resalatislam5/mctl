import { Button, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;
  type?: ButtonProps['type'];
  icon?: string;
}
const CommonButton = ({ icon, text, type, ...rest }: Props) => {
  return (
    <Button
      icon={<Iconify icon={icon || ''} />}
      {...rest}
      type={type ? type : 'primary'}
      size='middle'
    >
      {text}
    </Button>
  );
};

export default CommonButton;
