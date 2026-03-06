import { Image, type ImageProps } from 'antd';

interface Props extends ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export const AvatarImg = ({ src, alt, height, width, ...rest }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 30}
      height={height || 30}
      {...rest}
    />
  );
};
