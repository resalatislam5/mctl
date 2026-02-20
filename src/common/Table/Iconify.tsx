import { Icon } from '@iconify/react';

interface Props {
  icon: string;
  width?: number | string;
  height?: number | string;
}

const Iconify = ({ icon, width = 20, height = 20, ...rest }: Props) => {
  return <Icon icon={icon} width={width} height={height} {...rest} />;
};

export default Iconify;
