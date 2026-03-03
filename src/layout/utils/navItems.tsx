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
    icon: 'grommet-icons:configure',
    children: [
      {
        key: '/configuration/country',
        to: '/configuration/country',
        label: 'Country List',
        icon: 'ic:twotone-list',
        name: 'COUNTRY',
      },
      {
        key: '/configuration/division',
        to: '/configuration/division',
        label: 'Division List',
        icon: 'ic:twotone-list',
        name: 'DIVISION',
      },
      {
        key: '/configuration/district',
        to: '/configuration/district',
        label: 'District List',
        icon: 'ic:twotone-list',
        name: 'DISTRICT',
      },
      {
        key: '/configuration/upazila',
        to: '/configuration/upazila',
        label: 'Upazila List',
        icon: 'ic:twotone-list',
        name: 'UPAZILA',
      },
      {
        key: '/configuration/batch',
        to: '/configuration/batch',
        label: 'Batch List',
        icon: 'ic:twotone-list',
        name: 'BATCH',
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
        label: 'Role List',
        icon: 'ic:twotone-list',
        name: 'ROLE',
      },
      {
        key: '/administration/user',
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
