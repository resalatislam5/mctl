type CertificateStatusType = 'REQUESTED' | 'ISSUED_BY_BOARD' | 'PRINTED' | null;
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
  name: string;
  certificate_no?: string | null;
  delivery_date?: string | null;
  certificate_status?: CertificateStatusType;
  doll_card_status?: CertificateStatusType;
  delivery_status?: 'ONLINE_COPY' | 'HARD_COPY' | null;
  completion_status?: 'ONGOING' | 'COMPLETED' | 'ABSENT' | 'CANCELLED';
}

export const CertificateStatusEnum = [
  { label: 'REQUESTED', value: 'REQUESTED' },
  { label: 'ISSUED_BY_BOARD', value: 'ISSUED_BY_BOARD' },
  { label: 'PRINTED', value: 'PRINTED' },
];
