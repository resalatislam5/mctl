import { Flex, Image, QRCode, Typography } from 'antd';
import { logo } from '../ui/image';

const PrintHeader = () => {
  return (
    <div>
      <Flex justify='space-between'>
        <Image src={logo} width={120} height={120} preview={false} />
        <Flex align='center'>
          <QRCode
            type='canvas'
            value='https://mctlglobal.com/'
            style={{ width: 110, height: 100, border: 'none' }}
          />
          <Flex vertical>
            <Typography.Text>Building-46, Nikunja-2</Typography.Text>
            <Typography.Text>+8801781242251</Typography.Text>
            <Typography.Text>mctlglobal.com</Typography.Text>
            <Typography.Text>info@mctlglobal.com</Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default PrintHeader;
