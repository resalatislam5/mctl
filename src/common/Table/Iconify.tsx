import { Icon } from '@iconify/react';

interface Props {
  icon: string;
  fontSize?: string | number;
}

const Iconify = ({ icon, fontSize, ...rest }: Props) => {
  return <Icon icon={icon} fontSize={fontSize || '18px'} {...rest} />;
};

export default Iconify;
