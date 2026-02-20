import RoleList from '../modules/Administration/Role/pages/RoleList';
import UserList from '../modules/Administration/User/pages/UserList';

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
];
