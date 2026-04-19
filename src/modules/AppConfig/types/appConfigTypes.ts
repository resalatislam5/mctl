export interface IAppConfig {
  _id: string;
  favicon: string;
  logo: string;
  favicon_public_id: string;
  logo_public_id: string;
  company_name: string;
  domain_name: string;
  support_email: string;
  address: string;
  phone: string;
  phone_2: string;
  enrollment_color: string;
  short_company_name: string;
  seal_stamp: string;
  seal_stamp_public_id: string;
}

export interface ICreateAppConfig {
  favicon: File;
  logo: File;
  company_name: string;
  domain_name: string;
  support_email: string;
  address: string;
  phone: string;
  phone_2: string;
  enrollment_color: string;
  short_company_name: string;
  seal_stamp: File;
}
