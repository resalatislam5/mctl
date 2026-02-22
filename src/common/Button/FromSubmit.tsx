import { Button, type ButtonProps } from 'antd';

interface Props extends ButtonProps {
  loading: boolean;
  type?: 'primary' | 'text' | 'dashed';
  text: string;
}

const FromSubmit = ({ loading, type = 'primary', text, ...rest }: Props) => {
  return (
    <Button {...rest} htmlType='submit' type={type} loading={loading}>
      {text}
    </Button>
  );
};

export default FromSubmit;
