export interface IStudentList {
  _id: string;
  name: string;
  email: string;
  code: string;
  dob: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  nid_no: string;
  mobile_no: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export type IStudentQuery = Partial<{
  limit: number;
  page: number;
  search: string;
  student_id: string;
}>;
export interface ICreateStudent {
  _id?: string;
  name: string;
  email: string;
  code: string;
  image: string;

  country_id: string;
  division_id: string;
  district_id: string;
  upazila_id: string;
  village: string;
  nationality: string;

  office_address: string;
  dob: string;
  occupation: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';

  nid_no: string;
  co_mobile: string;
  mobile_no: string;
  relationship: string;
  education: string;

  status: 'ACTIVE' | 'INACTIVE';
}

export interface IViewStudent {
  _id: string;
  name: string;
  email: string;
  image: string;
  country_id: string;
  division_id: string;
  district_id: string;
  upazila_id: string;
  village: string;
  nationality: string;
  office_address: string;
  dob: string;
  occupation: string;
  gender: string;
  code: string;
  nid_no: string;
  co_mobile: string;
  mobile_no: string;
  relationship: string;
  education: string;
  image_public_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  country_name: string;
  division_name: string;
  district_name: string;
  upazila_name: string;
}
