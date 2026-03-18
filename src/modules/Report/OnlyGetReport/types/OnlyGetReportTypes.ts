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
