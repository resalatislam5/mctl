export interface IRoleList {
  _id: string;
  name: string;
  email: string;
  password: string;
  role_id: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type IRoleQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateRole {
  name: string;
  email: string;
  password: string;
  role_id: string;
  status: string;
}
