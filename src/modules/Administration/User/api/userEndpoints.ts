import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type { ICreateUser, IUserList, IUserQuery } from '../types/userTypes';

const userEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    userList: build.query<Response<IUserList[]>, IUserQuery>({
      query: (query) => ({
        url: '/user',
        query,
      }),
      providesTags: () => [CREATE_TAG('DASHBOARD')],
    }),
    createUser: build.mutation<Response<string>, ICreateUser>({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('DASHBOARD')],
    }),
  }),
});

export const { useCreateUserMutation, useUserListQuery } = userEndpoints;
