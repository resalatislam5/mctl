export interface IUpazilaList {
  _id: string;
  name: string;
  code: string;
  district_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IUpazilaQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateUpazila {
  name: string;
  code: string;
  country_id: string;
  division_id: string;
  district_id: string;
  status: 'ACTIVE' | 'INACTIVE';
}
export interface IViewUpazila {
  _id: string;
  name: string;
  code: string;
  district_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  division_id: string;
  country_id: string;
  status: 'ACTIVE' | 'INACTIVE';
}
