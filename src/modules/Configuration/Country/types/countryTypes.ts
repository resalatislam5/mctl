export interface ICountryList {
  status: string;
  _id: string;
  name: string;
  code: string;
  __v: number;
}

export type ICountryQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateCountry {
  name: string;
  code: string;
  status: 'ACTIVE' | 'INACTIVE';
}
