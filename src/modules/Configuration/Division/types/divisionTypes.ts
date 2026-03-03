export interface IDivisionList {
  _id: string;
  name: string;
  code: string;
  country_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IDivisionQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateDivision {
  name: string;
  code: string;
  country_id: string;
  status: 'ACTIVE' | 'INACTIVE';
}
