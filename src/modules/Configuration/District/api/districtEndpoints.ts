import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICreateDistrict,
  IDistrictList,
  IDistrictQuery,
  IViewDistrict,
} from '../types/districtTypes';

const districtEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getDistrictList: build.query<Response<IDistrictList[]>, IDistrictQuery>({
      query: (params) => ({
        url: '/config/district',
        params,
      }),
      providesTags: () => [CREATE_TAG('DISTRICT')],
    }),
    getSingleDistrict: build.query<Response<IViewDistrict>, string>({
      query: (id) => ({
        url: `config/district/${id}`,
      }),
      providesTags: () => [CREATE_TAG('DISTRICT')],
    }),
    createDistrict: build.mutation<Response<string>, ICreateDistrict>({
      query: (body) => ({
        url: '/config/district',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('DISTRICT')],
    }),
    updateDistrict: build.mutation<
      Response<string>,
      { body: ICreateDistrict; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/config/district/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('DISTRICT')],
    }),

    deleteDistrict: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/config/district/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('DISTRICT')],
    }),
  }),
});

export const {
  useCreateDistrictMutation,
  useGetDistrictListQuery,
  useUpdateDistrictMutation,
  useDeleteDistrictMutation,
  useGetSingleDistrictQuery,
} = districtEndpoints;
