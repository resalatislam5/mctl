export interface IExpenseHistoryList {
  _id: string;
  account_type: string;
  total_amount: string;
  date: string;
  voucher_no: string;
  account_name: string;
}
export interface ICreateExpenseHistory {
  expense_details: { head_id: string; amount: string }[];
  account_type: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  acc_id: string;
  total_amount: string;
  date: string;
  voucher_no: string;
  note: string;
}
export interface IViewExpenseHistory {
  expense_details: { head_id: string; amount: string; head_name: string }[];
  account_type: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  acc_id: string;
  total_amount: string;
  date: string;
  voucher_no: string;
  note: string;
  acc_name: string;
}

export type IExpenseHistoryQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
