export type LoginTypes = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role_id: string;
  };
};

export interface ICheckPermission {
  _id: string;
  name: string;
  email: string;
  permissions: Permission[];
}

export interface Permission {
  module_id: string;
  can_create: boolean;
  can_read: boolean;
  can_update: boolean;
  can_delete: boolean;
  _id: string;
  name: string;
}
