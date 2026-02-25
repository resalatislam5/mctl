import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type { ICreateUser, IUserList, IUserQuery } from '../types/userTypes';

const userEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    userList: build.query<Response<IUserList[]>, IUserQuery>({
      query: (query) => ({
        url: '/config/user',
        params: query,
      }),
      providesTags: () => [CREATE_TAG('USER')],
    }),
    createUser: build.mutation<Response<string>, ICreateUser>({
      query: (body) => ({
        url: '/config/user',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('USER')],
    }),

    updateUser: build.mutation<
      Response<string>,
      { body: ICreateUser; _id: string }
    >({
      query: ({ body, _id }) => ({
        url: `config/user/${_id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('USER')],
    }),

    deleteUser: build.mutation<Response<string>, string>({
      query: (_id) => ({
        url: `config/user/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('USER')],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUserListQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userEndpoints;
