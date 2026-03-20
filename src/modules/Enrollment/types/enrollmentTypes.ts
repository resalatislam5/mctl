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
  student_id: string;
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
  meal_accommodation: number;
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
  course_ids: string[];
  course_mode: string;
  course_type: string;
  total_amount: string;
  total_price: string;
  total_paid: string;
  discount: string;
  additional_discount: string;
  meal_accommodation: string;
  installment_date: InstallmentDate[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  student_info: StudentInfo;
  course_names: string[];
  batch_no: string;
  package_id: string;
  agent_id: string;
  installment_type: string;
}

export interface InstallmentDate {
  name: string;
  date: Date;
  _id: string;
}

export interface StudentInfo {
  _id: string;
  name: string;
  email: string;
  image: string;
  country_id: string;
  division_id: string;
  district_id: string;
  upazila_id: string;
  village: string;
  country_name: string;
  division_name: string;
  district_name: string;
  upazila_name: string;
  nationality: string;
  office_address: string;
  dob: Date;
  occupation: string;
  gender: string;
  nid_no: string;
  co_mobile: string;
  relationship: string;
  education: string;
  image_public_id: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  code: string;
  mobile_no: string;
}
