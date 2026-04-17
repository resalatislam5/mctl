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
import BatchList from '../modules/Configuration/BatchNo/pages/BatchList';
import CountryList from '../modules/Configuration/Country/pages/CountryList';
import CourseList from '../modules/Configuration/Course/pages/CourseList';
import DistrictList from '../modules/Configuration/District/pages/DistrictList';
import DivisionList from '../modules/Configuration/Division/pages/DivisionList';
import PackageList from '../modules/Configuration/Package/pages/PackageList';
import UpazilaList from '../modules/Configuration/Upazila/pages/UpazilaList';
import Dashboard from '../modules/Dashboard/pages/Dashboard';
import ViewEnrollment from '../modules/Enrollment/components/ViewEnrollment';
import EnrollmentList from '../modules/Enrollment/pages/EnrollmentList';
import ViewExpenseHistory from '../modules/Expense/ExpenseHistory/components/ViewExpenseHistory';
import ExpenseHistoryList from '../modules/Expense/ExpenseHistory/pages/ExpenseHistoryList';
import HeadList from '../modules/Expense/Head/pages/HeadList';
import ViewMoneyReceipt from '../modules/MoneyReceipt/components/ViewMoneyReceipt';
import MoneyReceiptList from '../modules/MoneyReceipt/pages/MoneyReceiptList';
import ChangePassword from '../modules/Profile/pages/ChangePassword';
import Themes from '../modules/Profile/pages/Themes';

import AuditLogReport from '../modules/Report/AuditLog/pages/AuditLogReport';
import AccountLedger from '../modules/Report/OnlyGetReport/pages/AccountLedger';
import ExpenseReport from '../modules/Report/OnlyGetReport/pages/ExpenseReport';
import StudentLedger from '../modules/Report/OnlyGetReport/pages/StudentLedger';
import UpcomingInstallment from '../modules/Report/OnlyGetReport/pages/UpcomingInstallment';
import ViewStudent from '../modules/Student/components/ViewStudent';
import StudentList from '../modules/Student/pages/StudentList';
import ProfileLayout from '../modules/Profile/layout/ProfileLayout';
import ProfileSettings from '../modules/Profile/pages/ProfileSetting';
import AppConfigList from '../modules/AppConfig/pages/AppConfigList';
import AccountTransaction from '../modules/Report/OnlyGetReport/pages/AccountTransaction';
import CourseProgressList from '../modules/CourseProgress/pages/CourseProgressList';

export interface IAppRoutes {
  path: string;
  element: ReactNode;
  name: permissionTags;
}

export const AppRoutes: IAppRoutes[] = [
  {
    path: '/',
    element: <Dashboard />,
    name: 'DASHBOARD',
  },
  {
    path: '/profile',
    element: (
      <ProfileLayout>
        <ProfileSettings />
      </ProfileLayout>
    ),
    name: 'DASHBOARD',
  },
  {
    path: '/profile/password',
    element: (
      <ProfileLayout>
        <ChangePassword />
      </ProfileLayout>
    ),
    name: 'DASHBOARD',
  },
  {
    path: '/profile/themes',
    element: (
      <ProfileLayout>
        <Themes />
      </ProfileLayout>
    ),
    name: 'DASHBOARD',
  },
  {
    path: '/student',
    element: <StudentList />,
    name: 'STUDENT',
  },
  {
    path: '/student/:id',
    element: <ViewStudent />,
    name: 'STUDENT',
  },
  {
    path: '/enrollment',
    element: <EnrollmentList />,
    name: 'ENROLLMENT',
  },
  {
    path: '/enrollment/:_id',
    element: <ViewEnrollment />,
    name: 'ENROLLMENT',
  },
  {
    path: '/course-progress',
    element: <CourseProgressList />,
    name: 'COURSE_PROGRESS',
  },
  {
    path: '/money-receipt',
    element: <MoneyReceiptList />,
    name: 'MONEY_RECEIPT',
  },
  {
    path: '/money-receipt/:id',
    element: <ViewMoneyReceipt />,
    name: 'MONEY_RECEIPT',
  },
  {
    path: '/account/account',
    element: <AccountList />,
    name: 'ACCOUNT',
  },
  {
    path: '/account/balance-transfer',
    element: <BalanceTransferList />,
    name: 'BALANCE_TRANSFER',
  },
  {
    path: '/account/balance-transfer/:id',
    element: <ViewBalanceTransfer />,
    name: 'BALANCE_TRANSFER',
  },
  {
    path: '/expense/head',
    element: <HeadList />,
    name: 'HEAD',
  },
  {
    path: '/expense/expense-history',
    element: <ExpenseHistoryList />,
    name: 'EXPENSE_HISTORY',
  },
  {
    path: '/expense/expense-history/:id',
    element: <ViewExpenseHistory />,
    name: 'EXPENSE_HISTORY',
  },
  {
    path: '/administration/roles',
    element: <RoleList />,
    name: 'ROLE',
  },
  {
    path: '/administration/user',
    element: <UserList />,
    name: 'USER',
  },
  {
    path: '/configuration/country',
    element: <CountryList />,
    name: 'COUNTRY',
  },
  {
    path: '/configuration/division',
    element: <DivisionList />,
    name: 'DIVISION',
  },
  {
    path: '/configuration/district',
    element: <DistrictList />,
    name: 'DISTRICT',
  },
  {
    path: '/configuration/upazila',
    element: <UpazilaList />,
    name: 'UPAZILA',
  },
  {
    path: '/configuration/batch',
    element: <BatchList />,
    name: 'BATCH',
  },
  {
    path: '/configuration/course',
    element: <CourseList />,
    name: 'COURSE',
  },
  {
    path: '/configuration/package',
    element: <PackageList />,
    name: 'PACKAGE',
  },
  {
    path: '/configuration/app-config',
    element: <AppConfigList />,
    name: 'APP_CONFIG',
  },
  {
    path: '/agent/agent',
    element: <AgentList />,
    name: 'AGENT',
  },
  {
    path: '/agent/agent-commission',
    element: <AgentCommissionList />,
    name: 'AGENT_COMMISSION',
  },
  {
    path: '/agent/agent-payment',
    element: <AgentPaymentList />,
    name: 'AGENT_PAYMENT',
  },
  {
    path: '/agent/agent-payment/:id',
    element: <ViewAgentPayment />,
    name: 'AGENT_PAYMENT',
  },
  {
    path: '/report/audit-log',
    element: <AuditLogReport />,
    name: 'AUDIT',
  },
  {
    path: '/report/student-ledger',
    element: <StudentLedger />,
    name: 'STUDENT_LEDGER',
  },
  {
    path: '/report/account-ledger',
    element: <AccountLedger />,
    name: 'ACCOUNT_LEDGER',
  },
  {
    path: '/report/account-transaction',
    element: <AccountTransaction />,
    name: 'ACCOUNT_TRANSACTION',
  },
  {
    path: '/report/expense',
    element: <ExpenseReport />,
    name: 'EXPENSE_REPORT',
  },
  {
    path: '/report/upcoming-installment',
    element: <UpcomingInstallment />,
    name: 'UPCOMING_INSTALLMENT',
  },
];
