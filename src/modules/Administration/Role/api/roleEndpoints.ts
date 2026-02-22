import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type { ICreateRole, IRoleList, IRoleQuery } from '../types/roleTypes';

const roleEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    userList: build.query<Response<IRoleList>, IRoleQuery>({
      query: (query) => ({
        url: '/user',
        query,
      }),
      providesTags: () => [CREATE_TAG('DASHBOARD')],
    }),
    createUser: build.mutation<Response<string>, ICreateRole>({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('DASHBOARD')],
    }),
  }),
});

export const { useCreateUserMutation, useUserListQuery } = roleEndpoints;
