export type INavItem = {
  key: string;
  label: string;
  to: string;
  icon: string;
  name?: string;
  children?: INavItem[];
};
