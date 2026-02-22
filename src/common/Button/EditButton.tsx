import { Button, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;
  icon?: string;
}
const EditButton = ({ icon, text, ...rest }: Props) => {
  return (
    <Button {...rest} type='primary' danger size='middle'>
      <Iconify icon={icon || 'ic:baseline-edit'} />
      {text}
    </Button>
  );
};

export default EditButton;
