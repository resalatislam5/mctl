export interface ICourseList {
  _id: string;
  name: string;
  price: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type ICourseQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateCourse {
  name: string;
  price: string;
  status: 'ACTIVE' | 'INACTIVE';
}
