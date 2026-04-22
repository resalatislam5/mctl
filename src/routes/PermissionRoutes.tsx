import { Flex, Spin } from 'antd';
import { useCheckPermissionQuery } from '../auth/api/authEndpoint';
import Forbidden403 from '../common/components/Forbidden403';
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

  if (!item.isGuarded) return item.element;
  const permission = data?.data?.permissions?.some((e) => e.name === item.name);

  if (permission) {
    return item.element;
  } else {
    return <Forbidden403 />;
  }
};

export default PermissionRoutes;
