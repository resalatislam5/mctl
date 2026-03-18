export interface IBalanceTransferList {
  _id: string;
  from_acc_id: string;
  from_acc_name: string;
  to_acc_id: string;
  to_acc_name: string;
  amount: string;
  date: string;
  note: string;
  voucher_no: string;
}
export interface IViewBalanceTransfer {
  _id: string;
  from_acc_id: string;
  from_acc_name: string;
  to_acc_id: string;
  to_acc_name: string;
  amount: string;
  date: string;
  note: string;
  voucher_no: string;
}

export type IBalanceTransferQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateBalanceTransfer {
  from_acc_id: string;
  to_acc_id: string;
  amount: string;
  date: string;
  note: string;
  voucher_no: string;
}
