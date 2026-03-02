import RoleList from '../modules/Administration/Role/pages/RoleList';
import UserList from '../modules/Administration/User/pages/UserList';
import CountryList from '../modules/Configuration/Country/pages/CountryList';
import DistrictList from '../modules/Configuration/District/pages/DistrictList';
import DivisionList from '../modules/Configuration/Division/pages/DivisionList';

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
    path: '/configuration/country',
    element: <CountryList />,
    name: 'DASHBOARD',
  },
  {
    path: '/configuration/division',
    element: <DivisionList />,
    name: 'DASHBOARD',
  },
  {
    path: '/configuration/district',
    element: <DistrictList />,
    name: 'DASHBOARD',
  },
];
