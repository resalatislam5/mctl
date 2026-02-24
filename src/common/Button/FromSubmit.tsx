import { Button, type ButtonProps } from 'antd';
import Iconify from '../Table/Iconify';

interface Props extends ButtonProps {
  loading?: boolean;
  type?: 'primary' | 'text' | 'dashed';
  text: string;
  icon?: string;
}

const FromSubmit = ({
  loading,
  type = 'primary',
  text,
  icon,
  ...rest
}: Props) => {
  return (
    <Button {...rest} htmlType='submit' type={type} loading={loading}>
      <Iconify icon={icon || 'solar:map-arrow-right-bold-duotone'} />
      {text}
    </Button>
  );
};

export default FromSubmit;
