export interface IRoleList {
  _id: string;
  name: string;
  permissions: IPermission[];
  status: 'ACTIVE' | 'INACTIVE';
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
  permissions: IPermission[];
  status: 'ACTIVE' | 'INACTIVE';
}

export interface IPermission {
  module_id: string;
  can_create: boolean;
  can_read: boolean;
  can_update: boolean;
  can_delete: boolean;
}
