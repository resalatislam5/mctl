import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICountryList,
  ICountryQuery,
  ICreateCountry,
} from '../types/countryTypes';

const countryEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getCountryList: build.query<Response<ICountryList[]>, ICountryQuery>({
      query: (query) => ({
        url: '/country',
        query,
      }),
      providesTags: () => [CREATE_TAG('COUNTRY')],
    }),
    createCountry: build.mutation<Response<string>, ICreateCountry>({
      query: (body) => ({
        url: '/country',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('COUNTRY')],
    }),
    updateCountry: build.mutation<
      Response<string>,
      { body: ICreateCountry; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/country/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('COUNTRY')],
    }),

    deleteCountry: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/country/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('COUNTRY')],
    }),
  }),
});

export const {
  useCreateCountryMutation,
  useGetCountryListQuery,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
} = countryEndpoints;
