export interface IBatchList {
  _id: string;
  batch_no: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IBatchQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateBatch {
  name: string;
  code: string;
  status: 'ACTIVE' | 'INACTIVE';
}
