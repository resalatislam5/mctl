export interface IPackageList {
  _id: string;
  name: string;
  course_ids: string[];
  total_price: number;
  net_price: number;
  discount: number;
  additional_discount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  status: 'ACTIVE' | 'INACTIVE';
}

export type IPackageQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreatePackage {
  name: string;
  course_ids: string[];
  total_price: number;
  net_price: number;
  discount: number;
  additional_discount: number;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface IViewPackage {
  _id: string;
  name: string;
  course_ids: string[];
  total_price: number;
  net_price: number;
  discount: number;
  additional_discount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  courses: Course[];
}

export interface Course {
  _id: string;
  name: string;
}
