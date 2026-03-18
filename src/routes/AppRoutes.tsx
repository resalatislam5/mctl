import AccountList from '../modules/Account/Account/pages/AccountList';
import ViewBalanceTransfer from '../modules/Account/BalanceTransfer/components/ViewBalanceTransfer';
import BalanceTransferList from '../modules/Account/BalanceTransfer/pages/BalanceTransferList';
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
import ViewEnrollment from '../modules/Enrollment/components/ViewEnrollment';
import EnrollmentList from '../modules/Enrollment/pages/EnrollmentList';
import ViewExpenseHistory from '../modules/Expense/ExpenseHistory/components/ViewExpenseHistory';
import ExpenseHistoryList from '../modules/Expense/ExpenseHistory/pages/ExpenseHistoryList';
import HeadList from '../modules/Expense/Head/pages/HeadList';
import ViewMoneyReceipt from '../modules/MoneyReceipt/components/ViewMoneyReceipt';
import MoneyReceiptList from '../modules/MoneyReceipt/pages/MoneyReceiptList';
import AuditLogReport from '../modules/Report/AuditLog/pages/AuditLogReport';
import StudentList from '../modules/Student/pages/StudentList';

export const AppRoutes = [
  {
    path: '/student',
    element: <StudentList />,
    name: 'DASHBOARD',
  },
  {
    path: '/enrollment',
    element: <EnrollmentList />,
    name: 'DASHBOARD',
  },
  {
    path: '/enrollment/:_id',
    element: <ViewEnrollment />,
    name: 'DASHBOARD',
  },
  {
    path: '/money-receipt',
    element: <MoneyReceiptList />,
    name: 'DASHBOARD',
  },
  {
    path: '/money-receipt/:id',
    element: <ViewMoneyReceipt />,
    name: 'DASHBOARD',
  },
  {
    path: '/account/account',
    element: <AccountList />,
    name: 'DASHBOARD',
  },
  {
    path: '/account/balance-transfer',
    element: <BalanceTransferList />,
    name: 'DASHBOARD',
  },
  {
    path: '/account/balance-transfer/:id',
    element: <ViewBalanceTransfer />,
    name: 'DASHBOARD',
  },
  {
    path: '/expense/head',
    element: <HeadList />,
    name: 'DASHBOARD',
  },
  {
    path: '/expense/expense-history',
    element: <ExpenseHistoryList />,
    name: 'DASHBOARD',
  },
  {
    path: '/expense/expense-history/:id',
    element: <ViewExpenseHistory />,
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
