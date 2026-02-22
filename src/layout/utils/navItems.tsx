import { Icon } from '@iconify/react';
import { Link } from 'react-router';
import type { INavItem } from '../types/layoutTypes';

export const navItems: INavItem[] = [
  {
    key: '/',
    to: '/',
    label: 'Dashboard',
    icon: 'material-symbols:dashboard-rounded',
    name: 'DASHBOARD',
  },
  {
    key: '/students',
    to: '/students',
    label: 'Student List',
    icon: 'ph:student-fill',
    name: 'STUDENT',
  },
  {
    key: '/configuration',
    to: '/configuration',
    label: 'Configuration',
    icon: 'ph:student-fill',
    children: [
      {
        key: '/configuration/country',
        to: '/configuration/country',
        label: 'Country',
        icon: 'mdi:account-key',
        name: 'COUNTRY',
      },
      {
        key: '/configuration/use',
        to: '/configuration/user',
        label: 'User List',
        icon: 'mdi:account-key',
        name: 'USER',
      },
    ],
  },
  {
    key: '/administration',
    to: '/administration',
    label: 'Administration',
    icon: 'oui:nav-administration',
    children: [
      {
        key: '/administration/roles',
        to: '/administration/roles',
        label: 'Roles',
        icon: 'ic:twotone-list',
        name: 'ROLE',
      },
      {
        key: '/administration/use',
        to: '/administration/user',
        label: 'User List',
        icon: 'ic:twotone-list',
        name: 'USER',
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
