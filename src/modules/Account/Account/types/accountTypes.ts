export interface IAccountList {
  _id: string;
  account_type: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  name: string;
  acc_number: string;
  charge_percent: string;
  bank_name: string;
  branch_name: string;
  opening_balance: string;
  available_balance: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IAccountQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateAccount {
  account_type: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  name: string;
  acc_number: string;
  charge_percent: string;
  bank_name: string;
  branch_name: string;
  opening_balance: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export const ACCOUNT_TYPE_OPTIONS = [
  {
    label: 'CASH',
    value: 'CASH',
  },
  {
    label: 'BANK',
    value: 'BANK',
  },
  {
    label: 'MOBILE_BANKING',
    value: 'MOBILE_BANKING',
  },
];

export const ACCOUNT_TYPE = {
  CASH: 'CASH',
  BANK: 'BANK',
  MOBILE_BANKING: 'MOBILE_BANKING',
};
