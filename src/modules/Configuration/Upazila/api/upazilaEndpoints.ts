import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICreateUpazila,
  IUpazilaList,
  IUpazilaQuery,
  IViewUpazila,
} from '../types/upazilaTypes';

const upazilaEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getUpazilaList: build.query<Response<IUpazilaList[]>, IUpazilaQuery>({
      query: (params) => ({
        url: '/config/upazila',
        params,
      }),
      providesTags: () => [CREATE_TAG('UPAZILA')],
    }),
    getSingleUpazila: build.query<Response<IViewUpazila>, string>({
      query: (id) => ({
        url: `config/upazila/${id}`,
      }),
      providesTags: () => [CREATE_TAG('UPAZILA')],
    }),
    createUpazila: build.mutation<Response<string>, ICreateUpazila>({
      query: (body) => ({
        url: '/config/upazila',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('UPAZILA')],
    }),
    updateUpazila: build.mutation<
      Response<string>,
      { body: ICreateUpazila; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/config/upazila/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('UPAZILA')],
    }),

    deleteUpazila: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/config/upazila/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('UPAZILA')],
    }),
  }),
});

export const {
  useCreateUpazilaMutation,
  useGetUpazilaListQuery,
  useUpdateUpazilaMutation,
  useDeleteUpazilaMutation,
  useGetSingleUpazilaQuery,
} = upazilaEndpoints;
