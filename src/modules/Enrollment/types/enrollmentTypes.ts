export interface IEnrollmentList {
  _id: string;
  student_id: string;
  batch_id: string;
  course_mode: string;
  total_amount: string;
  total_paid: string;
  student_name: string;
  batch_name: null;
}

export type IEnrollmentQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateEnrollment {
  student_id: string;
  batch_id: string;
  package_id: string;
  course_type: string;
  code: string;
  admission_date: Date;

  course_mode: 'ONLINE' | 'OFFLINE';
  total_amount: number;
  course_ids: string[];
  total_paid: number;
  discount: number;
  additional_discount: number;
  installment_date: { name: string; date: Date }[];

  // frontend
  total_price: number;
}

export interface IViewEnrollment {
  _id: string;
  student_id: string;
  code: string;
  batch_id: string;
  admission_date: Date;
  courses: string[];
  course_ids: string[];
  course_mode: string;
  course_type: string;
  package_id: string;
  total_amount: string;
  total_price: string;
  total_paid: string;
  discount: string;
  additional_discount: string;
  installment_date: InstallmentDate[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface InstallmentDate {
  name: string;
  date: Date;
  _id: string;
}
