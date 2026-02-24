import { api } from '../../app/api/api';
import { CREATE_TAG } from '../../app/utils/CreateTags';
import type { Response } from '../types/common.type';
import type { IRoleSelect, IUserSelect } from './selectTypes';

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
  }),
});

export const { useGetUserSelectQuery, useGetRoleSelectQuery } = selectEndpoints;
