export interface IAuditLogList {
  _id: string;
  user_id: string;
  user_name: string;
  action: string;
  entity: string;
  entity_id: string;
  changes: string;
  ip_address: string;
  user_agent: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type IAuditLogQuery = Partial<{
  limit: number;
  skip: number;
  search: string;
  from_date: string;
  to_date: string;
  user_id: string;
}>;
