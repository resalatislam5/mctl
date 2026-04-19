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
  logo: string;
  favicon: string;
  company_name: string;
  domain_name: string;
  support_email: string;
  address: string;
  phone: string;
  phone_2: string;
  enrollment_color: string;
  short_company_name: string;
  seal_stamp: string;
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
