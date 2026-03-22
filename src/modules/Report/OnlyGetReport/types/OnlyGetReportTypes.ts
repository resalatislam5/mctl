export interface IStudentLedger {
  _id: string;
  code: string;
  admission_date: string;
  total_amount: string;
  total_paid: string;
  student_name: string;
  student_code: string;
}
export interface IStudentLedgerQuery {
  batch_id: string;
}
export interface IExpenseReport {
  _id: string;
  account_type: string;
  total_amount: string;
  date: string;
  voucher_no: string;
  account_name: string;
  expense_head_names: string[];
}
export interface IExpenseReportQuery {
  from_date: string;
  to_date: string;
  head_id: string;
}

export interface IUpcomingInstallment {
  _id: string;
  total_amount: string;
  total_paid: string;
  installment_date: InstallmentDate[];
  matched_installments: InstallmentDate[];
  student_name: string;
  student_code: string;
  code: string;
  admission_date: string;
}

export interface InstallmentDate {
  name: string;
  date: Date;
}
export interface IUpcomingInstallmentQuery {
  date: string;
}

export interface IAccountLedger {
  _id: string;
  account_id: string;
  money_receipt_id: string;
  agent_id: string;
  expense_id: string;
  type: string;
  amount: string;
  charge: string;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAccountLedgerQuery {
  from_date: string;
  to_date: string;
  account_id: string;
}
