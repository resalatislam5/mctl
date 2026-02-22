import RoleList from '../modules/Administration/Role/pages/RoleList';
import UserList from '../modules/Administration/User/pages/UserList';
import CountryList from '../modules/Configuration/Country/pages/CountryList';

export const AppRoutes = [
  {
    path: '/students',
    element: <div>Dashboard</div>,
    name: 'DASHBOARD',
  },
  {
    path: '/administration/roles',
    element: <RoleList />,
    name: 'DASHBOARD',
  },
  {
    path: '/administration/user',
    element: <UserList />,
    name: 'DASHBOARD',
  },
  {
    path: '/administration/user',
    element: <UserList />,
    name: 'DASHBOARD',
  },
  {
    path: '/configuration/country',
    element: <CountryList />,
    name: 'DASHBOARD',
  },
];
