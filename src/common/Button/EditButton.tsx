import { Button, Tooltip, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  text?: string;
  can_update?: boolean;
  icon?: string;
}
const EditButton = ({ icon, text, can_update = true, ...rest }: Props) => {
  return (
    <Tooltip title='Edit'>
      {can_update && (
        <Button {...rest} type='primary' danger size='small'>
          <Iconify icon={icon || 'ic:baseline-edit'} />
          {text}
        </Button>
      )}
    </Tooltip>
  );
};

export default EditButton;
