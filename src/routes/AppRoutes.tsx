import RoleList from '../modules/Administration/Role/pages/RoleList';
import UserList from '../modules/Administration/User/pages/UserList';
import AgentList from '../modules/Configuration/Agent/pages/AgentList';
import BatchList from '../modules/Configuration/BatchNo/pages/BatchList';
import CountryList from '../modules/Configuration/Country/pages/CountryList';
import CourseList from '../modules/Configuration/Course/pages/CourseList';
import DistrictList from '../modules/Configuration/District/pages/DistrictList';
import DivisionList from '../modules/Configuration/Division/pages/DivisionList';
import PackageList from '../modules/Configuration/Package/pages/PackageList';
import UpazilaList from '../modules/Configuration/Upazila/pages/UpazilaList';
import AuditLogReport from '../modules/Report/AuditLog/pages/AuditLogReport';

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
  {
    path: '/configuration/upazila',
    element: <UpazilaList />,
    name: 'DASHBOARD',
  },
  {
    path: '/configuration/batch',
    element: <BatchList />,
    name: 'DASHBOARD',
  },
  {
    path: '/configuration/course',
    element: <CourseList />,
    name: 'DASHBOARD',
  },
  {
    path: '/configuration/package',
    element: <PackageList />,
    name: 'DASHBOARD',
  },
  {
    path: '/configuration/agent',
    element: <AgentList />,
    name: 'DASHBOARD',
  },
  {
    path: '/report/audit-log',
    element: <AuditLogReport />,
    name: 'DASHBOARD',
  },
];
