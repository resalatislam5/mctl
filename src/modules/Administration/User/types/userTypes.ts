export interface IUserList {
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

export type IUserQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  role_id: string;
  status: string;
}
