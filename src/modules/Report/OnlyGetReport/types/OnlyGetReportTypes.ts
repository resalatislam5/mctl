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
