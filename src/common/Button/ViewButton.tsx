import { Button, Tooltip, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';
import { Link } from 'react-router';

interface Props extends ButtonProps {
  text?: string;
  icon?: string;
  path?: string;
}
const ViewButton = ({ icon, text, path, ...rest }: Props) => {
  return (
    <Tooltip title='View'>
      {path ? (
        <Link to={path}>
          <Button {...rest} type='primary' size='small'>
            <Iconify icon={icon || 'raphael:view'} />
            {text}
          </Button>
        </Link>
      ) : (
        <Button {...rest} type='primary' size='small'>
          <Iconify icon={icon || 'raphael:view'} />
          {text}
        </Button>
      )}
    </Tooltip>
  );
};

export default ViewButton;
