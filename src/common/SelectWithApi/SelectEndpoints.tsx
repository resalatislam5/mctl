import { api } from '../../app/api/api';
import { CREATE_TAG } from '../../app/utils/CreateTags';
import type { Response } from '../types/common.type';
import type {
  IAccountSelect,
  IAgentSelect,
  IBatchSelect,
  ICountrySelect,
  ICourseSelect,
  IDistrictSelect,
  IDivisionSelect,
  IEnrollmentSelect,
  IHeadSelect,
  IPackageSelect,
  IRoleSelect,
  IStudentSelect,
  IUpazilaSelect,
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
    getUpazilaSelect: build.query<
      Response<IUpazilaSelect[]>,
      { district_id?: string }
    >({
      query: (params) => ({
        url: '/config/upazila/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('UPAZILA')],
    }),
    getCourseSelect: build.query<Response<ICourseSelect[]>, object>({
      query: (params) => ({
        url: '/config/course/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('COURSE')],
    }),
    getBatchSelect: build.query<Response<IBatchSelect[]>, object>({
      query: (params) => ({
        url: '/config/batch/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('BATCH')],
    }),
    getPackageSelect: build.query<Response<IPackageSelect[]>, object>({
      query: (params) => ({
        url: '/config/package/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('PACKAGE')],
    }),
    getAgentSelect: build.query<Response<IAgentSelect[]>, object>({
      query: (params) => ({
        url: '/agent/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('AGENT')],
    }),
    getStudentSelect: build.query<Response<IStudentSelect[]>, object>({
      query: (params) => ({
        url: '/student/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('STUDENT')],
    }),
    getEnrollmentSelect: build.query<Response<IEnrollmentSelect[]>, object>({
      query: (params) => ({
        url: '/enrollment/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('ENROLLMENT')],
    }),
    getAccountSelect: build.query<Response<IAccountSelect[]>, object>({
      query: (params) => ({
        url: '/account/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('ACCOUNT')],
    }),
    getHeadSelect: build.query<Response<IHeadSelect[]>, object>({
      query: (params) => ({
        url: '/head/select',
        params,
      }),
      providesTags: () => [CREATE_TAG('HEAD')],
    }),
  }),
});

export const {
  useGetUserSelectQuery,
  useGetRoleSelectQuery,
  useGetCountrySelectQuery,
  useGetDistrictSelectQuery,
  useGetDivisionSelectQuery,
  useGetCourseSelectQuery,
  useGetUpazilaSelectQuery,
  useGetStudentSelectQuery,
  useGetBatchSelectQuery,
  useGetPackageSelectQuery,
  useGetAgentSelectQuery,
  useGetEnrollmentSelectQuery,
  useGetAccountSelectQuery,
  useGetHeadSelectQuery,
} = selectEndpoints;
