import { api } from '../../../app/api/api';
import { CREATE_TAG } from '../../../app/utils/CreateTags';
import type { Response } from '../../../common/types/common.type';
import type { IDashboard } from '../types/dahboardTypes';

const dashboardEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getDashboardData: build.query<Response<IDashboard>, void>({
      query: () => ({
        url: '/dashboard',
      }),
      providesTags: () => [CREATE_TAG('DASHBOARD')],
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardEndpoints;
