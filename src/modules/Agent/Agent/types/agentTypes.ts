export interface IAgentList {
  _id: string;
  name: string;
  email: string;
  mobile_no: string;
  min_limit: number;
  commission: number;
  min_payment_percent: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IAgentQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateAgent {
  name: string;
  email: string;
  mobile_no: string;
  min_limit: number;
  commission: number;
  min_payment_percent: number;
  status: 'ACTIVE' | 'INACTIVE';
}
