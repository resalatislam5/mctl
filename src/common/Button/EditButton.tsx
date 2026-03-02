import { Button, Tooltip, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;
  icon?: string;
}
const EditButton = ({ icon, text, ...rest }: Props) => {
  return (
    <Tooltip title='Edit'>
      <Button {...rest} type='primary' danger size='small'>
        <Iconify icon={icon || 'ic:baseline-edit'} />
        {text}
      </Button>
    </Tooltip>
  );
};

export default EditButton;
