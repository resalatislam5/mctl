import { Flex, Spin } from 'antd';
import { useCheckPermissionQuery } from '../auth/api/authEndpoint';
import AccessDenied from '../common/ui/AccessDenied';
import type { IAppRoutes } from './AppRoutes';

type Props = {
  item: IAppRoutes;
};
const PermissionRoutes = ({ item }: Props) => {
  const { data } = useCheckPermissionQuery();
  if (!data) {
    return (
      <Flex justify='center' align='center' style={{ height: '100%' }}>
        <Spin />
      </Flex>
    );
  }
  const permission = data?.data?.permissions?.some((e) => e.name === item.name);

  if (permission) {
    return item.element;
  } else {
    return <AccessDenied />;
  }
};

export default PermissionRoutes;
