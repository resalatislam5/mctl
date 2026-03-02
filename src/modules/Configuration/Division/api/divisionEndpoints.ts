import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICreateDivision,
  IDivisionList,
  IDivisionQuery,
} from '../types/divisionTypes';

const DivisionEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getDivisionList: build.query<Response<IDivisionList[]>, IDivisionQuery>({
      query: (params) => ({
        url: '/config/division',
        params,
      }),
      providesTags: () => [CREATE_TAG('DIVISION')],
    }),
    createDivision: build.mutation<Response<string>, ICreateDivision>({
      query: (body) => ({
        url: '/config/division',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('DIVISION')],
    }),
    updateDivision: build.mutation<
      Response<string>,
      { body: ICreateDivision; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/config/division/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('DIVISION')],
    }),

    deleteDivision: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/config/division/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('DIVISION')],
    }),
  }),
});

export const {
  useCreateDivisionMutation,
  useGetDivisionListQuery,
  useUpdateDivisionMutation,
  useDeleteDivisionMutation,
} = DivisionEndpoints;
