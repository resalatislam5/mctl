import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  IExpenseReport,
  IExpenseReportQuery,
  IStudentLedger,
  IStudentLedgerQuery,
  IUpcomingInstallment,
  IUpcomingInstallmentQuery,
} from '../types/OnlyGetReportTypes';

const onlyGetReportEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getStudentLedger: build.query<
      Response<IStudentLedger[]>,
      IStudentLedgerQuery
    >({
      query: (query) => ({
        url: '/report/student-ledger',
        params: query,
      }),
      providesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),
    getExpenseReport: build.query<
      Response<IExpenseReport[]>,
      IExpenseReportQuery
    >({
      query: (query) => ({
        url: '/report/expense',
        params: query,
      }),
      providesTags: () => [CREATE_TAG('EXPENSE_HISTORY')],
    }),
    getUpcomingInstallment: build.query<
      Response<IUpcomingInstallment[]>,
      IUpcomingInstallmentQuery
    >({
      query: (query) => ({
        url: '/report/upcoming-installment',
        params: query,
      }),
      providesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),
  }),
});

export const {
  useGetStudentLedgerQuery,
  useGetExpenseReportQuery,
  useGetUpcomingInstallmentQuery,
} = onlyGetReportEndpoints;
