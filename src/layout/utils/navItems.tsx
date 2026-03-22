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
    key: '/student',
    to: '/student',
    label: 'Student List',
    icon: 'ph:student-fill',
    name: 'STUDENT',
  },
  {
    key: '/enrollment',
    to: '/enrollment',
    label: 'Enrollment List',
    icon: 'fluent-mdl2:open-enrollment',
    name: 'ENROLLMENT',
  },
  {
    key: '/money-receipt',
    to: '/money-receipt',
    label: 'Money Receipt List',
    icon: 'streamline:receipt-remix',
    name: 'MONEY_RECEIPT',
  },
  {
    key: '/account',
    to: '/account',
    label: 'Account',
    icon: 'material-symbols:account-balance',
    children: [
      {
        key: '/account/account',
        to: '/account/account',
        label: 'Account List',
        icon: 'ic:twotone-list',
        name: 'ACCOUNT',
      },
      {
        key: '/account/balance-transfer',
        to: '/account/balance-transfer',
        label: 'Balance Transfer List',
        icon: 'ic:twotone-list',
        name: 'BALANCE_TRANSFER',
      },
    ],
  },
  {
    key: '/agent',
    to: '/agent',
    label: 'Agent',
    icon: 'mdi:face-agent',
    children: [
      {
        key: '/agent/agent',
        to: '/agent/agent',
        label: 'Agent List',
        icon: 'ic:twotone-list',
        name: 'AGENT',
      },
      {
        key: '-commission',
        to: '/agent/agent-commission',
        label: 'Agent Commission List',
        icon: 'ic:twotone-list',
        name: 'AGENT_COMMISSION',
      },
    ],
  },
  {
    key: '/expense',
    to: '/expense',
    label: 'Expense',
    icon: 'fa7-solid:money-bill',
    children: [
      {
        key: '/expense/head',
        to: '/expense/head',
        label: 'Head List',
        icon: 'ic:twotone-list',
        name: 'HEAD',
      },
      {
        key: '/expense/expense-history',
        to: '/expense/expense-history',
        label: 'Expense History List',
        icon: 'ic:twotone-list',
        name: 'EXPENSE_HISTORY',
      },
    ],
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
      {
        key: '/configuration/course',
        to: '/configuration/course',
        label: 'Course List',
        icon: 'ic:twotone-list',
        name: 'COURSE',
      },
      {
        key: '/configuration/package',
        to: '/configuration/package',
        label: 'Package List',
        icon: 'ic:twotone-list',
        name: 'PACKAGE',
      },
    ],
  },
  {
    key: '/report',
    to: '/report',
    label: 'Report',
    icon: 'carbon:report',
    children: [
      {
        key: '/report/audit-log',
        to: '/report/audit-log',
        label: 'Audit Log',
        icon: 'ic:twotone-list',
        name: 'AUDIT',
      },
      {
        key: '/report/account-ledger',
        to: '/report/account-ledger',
        label: 'Account Ledger',
        icon: 'ic:twotone-list',
        name: 'ACCOUNT_LEDGER',
      },
      {
        key: '/report/student-ledger',
        to: '/report/student-ledger',
        label: 'Student Ledger',
        icon: 'ic:twotone-list',
        name: 'STUDENT_LEDGER',
      },
      {
        key: '/report/expense',
        to: '/report/expense',
        label: 'Expense Report',
        icon: 'ic:twotone-list',
        name: 'EXPENSE_REPORT',
      },
      {
        key: '/report/upcoming-installment',
        to: '/report/upcoming-installment',
        label: 'Upcoming Installment',
        icon: 'ic:twotone-list',
        name: 'UPCOMING_INSTALLMENT',
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
