export interface IMoneyReceiptList {
  _id: string;
  voucher_no: string;
  payment_method: string;
  acc_id: string;
  student_id: string;
  enrollment_id: string;
  amount: string;
  paid_amount: string;
  date: string;
  student_name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IMoneyReceiptQuery = Partial<{
  limit: number;
  page: number;
  search: string;
  student_id: string;
}>;
export interface ICreateMoneyReceipt {
  payment_method: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  acc_id: string;
  enrollment_id: string;
  student_id: string;
  amount: string;
  paid_amount: string;
  voucher_no: string;
}

export interface IViewMoneyReceipt {
  _id: string;
  voucher_no: string;
  payment_method: string;
  acc_id: string;
  student_id: string;
  enrollment_id: string;
  amount: string;
  paid_amount: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  student_name: string;
  student_code: string;
  enrollment_code: string;
  course_type: string;
  total_amount: string;
  acc_name: string;
}
