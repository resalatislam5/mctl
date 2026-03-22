export interface IAgentPaymentList {
  _id: string;
  voucher_no: string;
  payment_method: string;
  amount: string;
  date: string;
  batch_no: string;
  acc_name: string;
}

export type IAgentPaymentQuery = Partial<{
  limit: number;
  page: number;
  search: string;
  student_id: string;
}>;
export interface ICreateAgentPayment {
  agent_id: string;
  commission_id: string;
  payment_method: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  acc_id: string;
  amount: string;
  paid_amount: string;
  date: string;
  reference_no?: string;
  note?: string;
}

export interface IViewAgentPayment {
  _id: string;
  agent_id: string;
  commission_id: string;
  voucher_no: string;
  payment_method: string;
  acc_id: string;
  amount: string;
  paid_amount: string;
  reference_no: string;
  note: string;
  date: string;
  batch_no: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  agent_name: string;
  commission_amount: string;
}
