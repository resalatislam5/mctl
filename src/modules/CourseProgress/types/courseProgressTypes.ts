export interface ICourseProgressList {
  _id: string;
  student_id: string;
  batch_id: string;
  course_mode: string;
  total_amount: string;
  total_paid: string;
  student_name: string;
  batch_name: null;
  student_code: string;
  enrollment_code: string;
}

export type ICourseProgressQuery = Partial<{
  limit: number;
  page: number;
  search: string;
  student_id: string;
  batch_id: string;
  course_id: string;
}>;
export interface ICreateCourseProgress {
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
  meal_accommodation: number;
  installment_date: { name: string; date: Date }[];

  // frontend
  total_price: number;
}

export interface IViewCourseProgress {
  _id: string;
  student_id: string;
  tenant_id: string;
  batch_id: string;
  enrollment_id: string;
  courses: Course[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Course {
  course_id: string;
  status: string;
  soft_copy: string;
  name: string;
}
