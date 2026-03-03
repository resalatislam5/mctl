export interface IAgentList {
  _id: string;
  name: string;
  email: string;
  mobile_no: string;
  min_limit: number;
  commission: number;
  total_amount: number;
  paid_amount: number;
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
  code: string;
  country_id: string;
  status: 'ACTIVE' | 'INACTIVE';
}
