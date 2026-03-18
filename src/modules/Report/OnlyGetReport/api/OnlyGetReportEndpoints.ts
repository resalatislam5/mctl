import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  IStudentLedger,
  IStudentLedgerQuery,
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
  }),
});

export const { useGetStudentLedgerQuery } = onlyGetReportEndpoints;
