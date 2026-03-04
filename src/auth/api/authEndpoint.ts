import { api } from '../../app/api/api';
import type { Response } from '../../common/types/common.type';
import {
  type ICheckPermission,
  type LoginResponseType,
  type LoginTypes,
} from '../types/authTypes';

export const authEndpoint = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Response<LoginResponseType>, LoginTypes>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    checkPermission: build.query<Response<ICheckPermission>, void>({
      query: () => '/check',
    }),
  }),
});

export const { useLoginMutation, useCheckPermissionQuery } = authEndpoint;
