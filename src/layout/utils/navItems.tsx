import { Icon } from '@iconify/react';
import { Link } from 'react-router';
import type { INavItem } from '../types/layoutTypes';

export const navItems: INavItem[] = [
  {
    key: '/',
    to: '/',
    label: 'Dashboard',
    icon: 'material-symbols:dashboard-rounded',
    name: 'Dashboard',
  },
  {
    key: '/students',
    to: '/students',
    label: 'Student List',
    icon: 'ph:student-fill',
    name: 'Dashboard',
  },
  {
    key: '/administration',
    to: '/administration',
    label: 'Administration',
    icon: 'ph:student-fill',
    children: [
      {
        key: '/administration/roles',
        to: '/administration/roles',
        label: 'Roles',
        icon: 'mdi:account-key',
        name: 'Roles',
      },
      {
        key: '/administration/use',
        to: '/administration/user',
        label: 'User List',
        icon: 'mdi:account-key',
        name: 'Users',
      },
    ],
  },
];

// export const menuItems = navItems.map((item) => {
//   return {
//     key: item.key,
//     label: item.children ? (
//       <p>{item.label}</p>
//     ) : (
//       <Link to={item.to}>{item.label}</Link>
//     ),
//     icon: <Icon icon={item.icon} />,
//     children: item.children
//       ? item.children.map((child) => ({
//           key: child.key,
//           label: <Link to={child.to}>{child.label}</Link>,
//           icon: <Icon icon={child.icon} />,
//         }))
//       : undefined,
//   };
// });

export const renderItems = (item: INavItem) => {
  return {
    key: item.key,
    label: item.children ? (
      <p>{item.label}</p>
    ) : (
      <Link to={item.to}>{item.label}</Link>
    ),
    icon: <Icon icon={item.icon} />,
    children: item.children
      ? item.children.map((child) => ({
          key: child.key,
          label: <Link to={child.to}>{child.label}</Link>,
          icon: <Icon icon={child.icon} />,
        }))
      : undefined,
  };
};
