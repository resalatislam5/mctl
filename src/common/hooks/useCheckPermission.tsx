import { useAppSelector } from '../../app/hooks/hooks';

export type permissionTags =
  | 'DASHBOARD'
  | 'COUNTRY'
  | 'USER'
  | 'ROLE'
  | 'STUDENT'
  | 'DIVISION'
  | 'DISTRICT'
  | 'UPAZILA'
  | 'BATCH'
  | 'COURSE'
  | 'AGENT'
  | 'AUDIT'
  | 'PACKAGE'
  | 'ENROLLMENT'
  | 'MONEY_RECEIPT'
  | 'HEAD'
  | 'ACCOUNT'
  | 'EXPENSE_HISTORY'
  | 'STUDENT_LEDGER'
  | 'EXPENSE_REPORT'
  | 'UPCOMING_INSTALLMENT'
  | 'AGENT_COMMISSION'
  | 'ACCOUNT_LEDGER'
  | 'AGENT_PAYMENT'
  | 'BALANCE_TRANSFER';

const DEFAULT_PERMISSION = {
  can_read: false,
  can_create: false,
  can_update: false,
  can_delete: false,
};

const useCheckPermission = (name: permissionTags) => {
  const permissions =
    useAppSelector((state) => state.auth?.user?.permissions) ?? [];

  const perm = permissions.find((p) => p.name === name);

  return perm
    ? {
        can_read: perm.can_read,
        can_create: perm.can_create,
        can_update: perm.can_update,
        can_delete: perm.can_delete,
      }
    : DEFAULT_PERMISSION;
};

export default useCheckPermission;
