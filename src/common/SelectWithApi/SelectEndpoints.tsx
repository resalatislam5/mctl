import { api } from '../../app/api/api';
import { CREATE_TAG } from '../../app/utils/CreateTags';
import type { Response } from '../types/common.type';
import type {
  ICountrySelect,
  IDistrictSelect,
  IDivisionSelect,
  IRoleSelect,
  IUserSelect,
} from './selectTypes';

const selectEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getUserSelect: build.query<Response<IUserSelect[]>, void>({
      query: () => ({
        url: '/config/user/select',
      }),
      providesTags: () => [CREATE_TAG('USER')],
    }),
    getRoleSelect: build.query<Response<IRoleSelect[]>, void>({
      query: () => ({
        url: '/config/role/select',
      }),
      providesTags: () => [CREATE_TAG('ROLE')],
    }),
    getCountrySelect: build.query<Response<ICountrySelect[]>, void>({
      query: () => ({
        url: '/config/country/select',
      }),
      providesTags: () => [CREATE_TAG('COUNTRY')],
    }),
    getDivisionSelect: build.query<
      Response<IDivisionSelect[]>,
      { country_id?: string }
    >({
      query: (params) => ({
        url: '/config/division/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('DIVISION')],
    }),
    getDistrictSelect: build.query<
      Response<IDistrictSelect[]>,
      { division_id?: string }
    >({
      query: (params) => ({
        url: '/config/district/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('DISTRICT')],
    }),
  }),
});

export const {
  useGetUserSelectQuery,
  useGetRoleSelectQuery,
  useGetCountrySelectQuery,
  useGetDistrictSelectQuery,
  useGetDivisionSelectQuery,
} = selectEndpoints;
