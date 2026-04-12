import { Flex, Image, QRCode, Typography } from 'antd';

import { useAppSelector } from '../../app/hooks/hooks';

const PrintHeader = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      <Flex justify='space-between'>
        <Image src={user?.logo} height={120} preview={false} />
        <Flex align='center'>
          <QRCode
            type='canvas'
            value={user?.domain_name || user?.company_name || ''}
            style={{ width: 110, height: 100, border: 'none' }}
          />
          <Flex vertical style={{ maxWidth: 200 }}>
            <Typography.Text>{user?.address}</Typography.Text>
            <Typography.Text>{user?.phone || user?.phone_2}</Typography.Text>
            <Typography.Text>{user?.support_email}</Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default PrintHeader;
