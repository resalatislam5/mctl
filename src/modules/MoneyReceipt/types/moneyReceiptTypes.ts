export interface IMoneyReceiptList {
  _id: string;
  voucher_no: string;
  payment_method: string;
  acc_id: string;
  student_id: string;
  enrollment_id: string;
  amount: string;
  paid_amount: string;
  date: string;
  student_name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IMoneyReceiptQuery = Partial<{
  limit: number;
  page: number;
  search: string;
}>;
export interface ICreateMoneyReceipt {
  payment_method: 'CASH' | 'BANK' | 'MOBILE_BANKING';
  acc_id: string;
  enrollment_id: string;
  student_id: string;
  amount: string;
  paid_amount: string;
  voucher_no: string;
}

export interface IViewMoneyReceipt {
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
