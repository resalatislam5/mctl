export type IStudentLedger = {
  _id: string;
  code: string;
  admission_date: string;
  total_amount: string;
  total_paid: string;
  student_name: string;
  student_code: string;
};
export type IStudentLedgerQuery = {
  batch_id: string;
};
export type IExpenseReport = {
  _id: string;
  account_type: string;
  total_amount: string;
  date: string;
  voucher_no: string;
  account_name: string;
  expense_head_names: string[];
};
export type IExpenseReportQuery = {
  from_date: string;
  to_date: string;
  head_id: string;
};

export type IUpcomingInstallment = {
  _id: string;
  total_amount: string;
  total_paid: string;
  installment_date: InstallmentDate[];
  matched_installments: InstallmentDate[];
  student_name: string;
  student_code: string;
  code: string;
  admission_date: string;
};

export type InstallmentDate = {
  name: string;
  date: Date;
};
export type IUpcomingInstallmentQuery = {
  from_date: string;
  to_date: string;
};

export type IAccountTransaction = {
  _id: string;
  account_id: string;
  money_receipt_id: string;
  agent_id: string;
  expense_id: string;
  type: string;
  amount: number;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type IAccountTransactionQuery = {
  from_date: string;
  to_date: string;
  account_id: string;
  is_balance_transfer: boolean;
};

export type IAccountLedger = {
  transactions: Transaction[];
  total_last_balance: number;
};

export type Transaction = {
  _id: string;
  account_id: string;
  voucher_no: string;
  reference_type: string;
  reference_id: string;
  tenant_id: string;
  type: string;
  amount: number;
  description: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  last_balance: number;
  is_balance_transfer?: boolean;
};

export type IAccountLedgerQuery = {
  from_date: string;
  to_date: string;
  account_id: string;
};
