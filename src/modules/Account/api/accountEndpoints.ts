import { api } from '../../../app/api/api';
import { CREATE_TAG } from '../../../app/utils/CreateTags';
import type { Response } from '../../../common/types/common.type';
import type {
  IAccountList,
  IAccountQuery,
  ICreateAccount,
} from '../types/accountTypes';

const AccountEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getAccountList: build.query<Response<IAccountList[]>, IAccountQuery>({
      query: (params) => ({
        url: '/account',
        params,
      }),
      providesTags: () => [CREATE_TAG('ACCOUNT')],
    }),

    createAccount: build.mutation<Response<string>, ICreateAccount>({
      query: (body) => ({
        url: '/account',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('ACCOUNT')],
    }),
    updateAccount: build.mutation<
      Response<string>,
      { body: ICreateAccount; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/account/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('ACCOUNT')],
    }),

    deleteAccount: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/account/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('ACCOUNT')],
    }),
  }),
});

export const {
  useCreateAccountMutation,
  useGetAccountListQuery,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} = AccountEndpoints;
