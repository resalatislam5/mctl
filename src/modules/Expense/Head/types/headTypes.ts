export interface IHeadList {
  _id: string;
  name: string;
}
export interface ICreateHead {
  name: string;
}

export type IHeadQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
