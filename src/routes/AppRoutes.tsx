import type { ReactNode } from 'react';
import type { permissionTags } from '../common/hooks/useCheckPermission';
import AccountList from '../modules/Account/Account/pages/AccountList';
import ViewBalanceTransfer from '../modules/Account/BalanceTransfer/components/ViewBalanceTransfer';
import BalanceTransferList from '../modules/Account/BalanceTransfer/pages/BalanceTransferList';
import RoleList from '../modules/Administration/Role/pages/RoleList';
import UserList from '../modules/Administration/User/pages/UserList';
import AgentList from '../modules/Agent/Agent/pages/AgentList';
import AgentCommissionList from '../modules/Agent/AgentCommission/pages/AgentCommissionList';
import ViewAgentPayment from '../modules/Agent/AgentPayment/components/ViewAgentPayment';
import AgentPaymentList from '../modules/Agent/AgentPayment/pages/AgentPaymentList';
import AppConfigList from '../modules/AppConfig/pages/AppConfigList';
import BatchList from '../modules/Configuration/BatchNo/pages/BatchList';
import CountryList from '../modules/Configuration/Country/pages/CountryList';
import CourseList from '../modules/Configuration/Course/pages/CourseList';
import DistrictList from '../modules/Configuration/District/pages/DistrictList';
import DivisionList from '../modules/Configuration/Division/pages/DivisionList';
import PackageList from '../modules/Configuration/Package/pages/PackageList';
import UpazilaList from '../modules/Configuration/Upazila/pages/UpazilaList';
import CourseProgressList from '../modules/CourseProgress/pages/CourseProgressList';
import Dashboard from '../modules/Dashboard/pages/Dashboard';
import ViewEnrollment from '../modules/Enrollment/components/ViewEnrollment';
import EnrollmentList from '../modules/Enrollment/pages/EnrollmentList';
import ViewExpenseHistory from '../modules/Expense/ExpenseHistory/components/ViewExpenseHistory';
import ExpenseHistoryList from '../modules/Expense/ExpenseHistory/pages/ExpenseHistoryList';
import HeadList from '../modules/Expense/Head/pages/HeadList';
import ViewMoneyReceipt from '../modules/MoneyReceipt/components/ViewMoneyReceipt';
import MoneyReceiptList from '../modules/MoneyReceipt/pages/MoneyReceiptList';
import ProfileLayout from '../modules/Profile/layout/ProfileLayout';
import ChangePassword from '../modules/Profile/pages/ChangePassword';
import ProfileSettings from '../modules/Profile/pages/ProfileSetting';
import Themes from '../modules/Profile/pages/Themes';
import AuditLogReport from '../modules/Report/AuditLog/pages/AuditLogReport';
import AccountLedger from '../modules/Report/OnlyGetReport/pages/AccountLedger';
import AccountTransaction from '../modules/Report/OnlyGetReport/pages/AccountTransaction';
import ExpenseReport from '../modules/Report/OnlyGetReport/pages/ExpenseReport';
import StudentLedger from '../modules/Report/OnlyGetReport/pages/StudentLedger';
import UpcomingInstallment from '../modules/Report/OnlyGetReport/pages/UpcomingInstallment';
import ViewStudent from '../modules/Student/components/ViewStudent';
import StudentList from '../modules/Student/pages/StudentList';

export interface IAppRoutes {
  path: string;
  element: ReactNode;
  name: permissionTags;
  isGuarded: boolean;
}

export const AppRoutes: IAppRoutes[] = [
  {
    path: '/',
    element: <Dashboard />,
    name: 'DASHBOARD',
    isGuarded: true,
  },
  {
    path: '/profile',
    element: (
      <ProfileLayout>
        <ProfileSettings />
      </ProfileLayout>
    ),
    name: 'PROFILE',
    isGuarded: false,
  },
  {
    path: '/profile/password',
    element: (
      <ProfileLayout>
        <ChangePassword />
      </ProfileLayout>
    ),
    name: 'PROFILE',
    isGuarded: false,
  },
  {
    path: '/profile/themes',
    element: (
      <ProfileLayout>
        <Themes />
      </ProfileLayout>
    ),
    name: 'PROFILE',
    isGuarded: false,
  },
  {
    path: '/student',
    element: <StudentList />,
    name: 'STUDENT',
    isGuarded: true,
  },
  {
    path: '/student/:id',
    element: <ViewStudent />,
    name: 'STUDENT',
    isGuarded: true,
  },
  {
    path: '/enrollment',
    element: <EnrollmentList />,
    name: 'ENROLLMENT',
    isGuarded: true,
  },
  {
    path: '/enrollment/:_id',
    element: <ViewEnrollment />,
    name: 'ENROLLMENT',
    isGuarded: true,
  },
  {
    path: '/course-progress',
    element: <CourseProgressList />,
    name: 'COURSE_PROGRESS',
    isGuarded: true,
  },
  {
    path: '/money-receipt',
    element: <MoneyReceiptList />,
    name: 'MONEY_RECEIPT',
    isGuarded: true,
  },
  {
    path: '/money-receipt/:id',
    element: <ViewMoneyReceipt />,
    name: 'MONEY_RECEIPT',
    isGuarded: true,
  },
  {
    path: '/account/account',
    element: <AccountList />,
    name: 'ACCOUNT',
    isGuarded: true,
  },
  {
    path: '/account/balance-transfer',
    element: <BalanceTransferList />,
    name: 'BALANCE_TRANSFER',
    isGuarded: true,
  },
  {
    path: '/account/balance-transfer/:id',
    element: <ViewBalanceTransfer />,
    name: 'BALANCE_TRANSFER',
    isGuarded: true,
  },
  {
    path: '/expense/head',
    element: <HeadList />,
    name: 'HEAD',
    isGuarded: true,
  },
  {
    path: '/expense/expense-history',
    element: <ExpenseHistoryList />,
    name: 'EXPENSE_HISTORY',
    isGuarded: true,
  },
  {
    path: '/expense/expense-history/:id',
    element: <ViewExpenseHistory />,
    name: 'EXPENSE_HISTORY',
    isGuarded: true,
  },
  {
    path: '/administration/roles',
    element: <RoleList />,
    name: 'ROLE',
    isGuarded: true,
  },
  {
    path: '/administration/user',
    element: <UserList />,
    name: 'USER',
    isGuarded: true,
  },
  {
    path: '/configuration/country',
    element: <CountryList />,
    name: 'COUNTRY',
    isGuarded: true,
  },
  {
    path: '/configuration/division',
    element: <DivisionList />,
    name: 'DIVISION',
    isGuarded: true,
  },
  {
    path: '/configuration/district',
    element: <DistrictList />,
    name: 'DISTRICT',
    isGuarded: true,
  },
  {
    path: '/configuration/upazila',
    element: <UpazilaList />,
    name: 'UPAZILA',
    isGuarded: true,
  },
  {
    path: '/configuration/batch',
    element: <BatchList />,
    name: 'BATCH',
    isGuarded: true,
  },
  {
    path: '/configuration/course',
    element: <CourseList />,
    name: 'COURSE',
    isGuarded: true,
  },
  {
    path: '/configuration/package',
    element: <PackageList />,
    name: 'PACKAGE',
    isGuarded: true,
  },
  {
    path: '/configuration/app-config',
    element: <AppConfigList />,
    name: 'APP_CONFIG',
    isGuarded: true,
  },
  {
    path: '/agent/agent',
    element: <AgentList />,
    name: 'AGENT',
    isGuarded: true,
  },
  {
    path: '/agent/agent-commission',
    element: <AgentCommissionList />,
    name: 'AGENT_COMMISSION',
    isGuarded: true,
  },
  {
    path: '/agent/agent-payment',
    element: <AgentPaymentList />,
    name: 'AGENT_PAYMENT',
    isGuarded: true,
  },
  {
    path: '/agent/agent-payment/:id',
    element: <ViewAgentPayment />,
    name: 'AGENT_PAYMENT',
    isGuarded: true,
  },
  {
    path: '/report/audit-log',
    element: <AuditLogReport />,
    name: 'AUDIT',
    isGuarded: true,
  },
  {
    path: '/report/student-ledger',
    element: <StudentLedger />,
    name: 'STUDENT_LEDGER',
    isGuarded: true,
  },
  {
    path: '/report/account-ledger',
    element: <AccountLedger />,
    name: 'ACCOUNT_LEDGER',
    isGuarded: true,
  },
  {
    path: '/report/account-transaction',
    element: <AccountTransaction />,
    name: 'ACCOUNT_TRANSACTION',
    isGuarded: true,
  },
  {
    path: '/report/expense',
    element: <ExpenseReport />,
    name: 'EXPENSE_REPORT',
    isGuarded: true,
  },
  {
    path: '/report/upcoming-installment',
    element: <UpcomingInstallment />,
    name: 'UPCOMING_INSTALLMENT',
    isGuarded: true,
  },
];
