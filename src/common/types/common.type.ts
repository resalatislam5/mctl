export interface Response<T> {
  success: boolean;
  total?: number;
  data?: T;
  message?: string;
}
