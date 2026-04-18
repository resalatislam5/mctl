export interface IAgentCommissionList {
  _id: string;
  agent_id: string;
  batch_id: string;
  total_students: number;
  eligible_students: number;
  total_amount: string;
  commission_rate: number;
  commission_amount: string;
  paid_amount: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  agent_name: string;
  batch_no: string;
  min_limit: number;
}

export type IAgentCommissionQuery = Partial<{
  limit: number;
  page: number;
  agent_id: string;
  batch_id: string;
}>;
export interface ICreateAgentCommission {
  batch_id: string;
}
