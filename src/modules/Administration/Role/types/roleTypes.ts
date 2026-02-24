export interface ICreateRole {
  name: string;
  permissions: (IPermission | undefined)[];
  status: 'ACTIVE' | 'INACTIVE';
}
export interface IRoleList {
  _id: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  updatedAt: string;
}

export interface IViewRole {
  _id: string;
  name: string;
  permissions: IPermission[];
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

export interface IPermission {
  module_id: string;
  can_create: boolean;
  can_read: boolean;
  can_update: boolean;
  can_delete: boolean;
  selected?: boolean;
  _id?: string;
  module_name?: string;
  // _id?: string;
}
