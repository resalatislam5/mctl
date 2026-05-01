export interface IDashboard {
  summery: Summery;
  trend: Trend[];
  course: Course[];
  student_enrollment: StudentEnrollment[];
}

export interface Summery {
  students: Ents;
  enrollments: Ents;
  agents: Ents;
  payments: Payments;
}

export interface Ents {
  _id: null;
  total: number;
  thisMonth: number;
  lastMonth: number;
  growth: number;
}

export interface Payments {
  _id: null;
  pendingEnrollment: number;
  totalOutStanding: number;
}

export interface Trend {
  month: string;
  enrollments: number;
  students: number;
}

export interface Course {
  students: number;
  name: string;
}

export interface StudentEnrollment {
  image: string;
  name: string;
  student_code: string;
  mobile_no: string;
  email: string;
  total_amount: number;
  total_paid: number;
}
