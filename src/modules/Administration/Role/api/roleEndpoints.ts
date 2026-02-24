import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICreateRole,
  IRoleList,
  IRoleQuery,
  IViewRole,
} from '../types/roleTypes';

const roleEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getRoleList: build.query<Response<IRoleList[]>, IRoleQuery>({
      query: (query) => ({
        url: 'config/role',
        query,
      }),
      providesTags: () => [CREATE_TAG('ROLE')],
    }),
    getSingleRole: build.query<Response<IViewRole>, string>({
      query: (id) => ({
        url: `config/role/${id}`,
      }),
      providesTags: () => [CREATE_TAG('ROLE')],
    }),
    getModuleList: build.query<Response<IRoleList[]>, IRoleQuery>({
      query: (query) => ({
        url: 'config/module',
        query,
      }),
      providesTags: () => [CREATE_TAG('ROLE')],
    }),
    createRole: build.mutation<Response<string>, ICreateRole>({
      query: (body) => ({
        url: 'config/role',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('ROLE')],
    }),
    updateRole: build.mutation<
      Response<string>,
      { body: ICreateRole; _id: string }
    >({
      query: ({ body, _id }) => ({
        url: `config/role/${_id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('ROLE')],
    }),
    deleteRole: build.mutation<Response<string>, string>({
      query: (_id) => ({
        url: `config/role/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('ROLE')],
    }),
  }),
});

export const {
  useCreateRoleMutation,
  useGetRoleListQuery,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
  useGetModuleListQuery,
  useGetSingleRoleQuery,
} = roleEndpoints;
