import { api } from '../../../app/api/api';
import { CREATE_TAG } from '../../../app/utils/CreateTags';
import type { Response } from '../../../common/types/common.type';
import type {
  ICreateEnrollment,
  IEnrollmentList,
  IEnrollmentQuery,
  IViewEnrollment,
} from '../types/enrollmentTypes';

const enrollmentEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getEnrollmentList: build.query<
      Response<IEnrollmentList[]>,
      IEnrollmentQuery
    >({
      query: (params) => ({
        url: '/enrollment',
        params,
      }),
      providesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),
    getSingleEnrollment: build.query<Response<IViewEnrollment>, string>({
      query: (_id) => ({
        url: `/enrollment/${_id}`,
      }),
      providesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),
    createEnrollment: build.mutation<Response<string>, ICreateEnrollment>({
      query: (body) => ({
        url: '/enrollment',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),
    updateEnrollment: build.mutation<
      Response<string>,
      { body: ICreateEnrollment; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/enrollment/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),

    deleteEnrollment: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/enrollment/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),
  }),
});

export const {
  useCreateEnrollmentMutation,
  useGetEnrollmentListQuery,
  useUpdateEnrollmentMutation,
  useDeleteEnrollmentMutation,
  useGetSingleEnrollmentQuery,
} = enrollmentEndpoints;
