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
}
