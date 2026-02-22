import type { permissionTags } from '../../common/hooks/useCheckPermission';

export type INavItem = {
  key: string;
  label: string;
  to: string;
  icon: string;
  name?: permissionTags;
  children?: INavItem[];
};
