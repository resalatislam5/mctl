export interface IDistrictList {
  _id: string;
  name: string;
  code: string;
  division_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IDistrictQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateDistrict {
  name: string;
  code: string;
  country_id: string;
  division_id: string;
  status: 'ACTIVE' | 'INACTIVE';
}
export interface IViewDistrict {
  _id: string;
  name: string;
  code: string;
  division_id: string;
  createdAt: string;
  updatedAt: string;
  country_id: string;
  status: 'ACTIVE' | 'INACTIVE';
  __v: number;
}
