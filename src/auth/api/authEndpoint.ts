import { api } from '../../app/api/api';
import type { Response } from '../../common/types/common.type';
import type { LoginResponseType, LoginTypes } from '../types/authTypes';

export const authEndpoint = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Response<LoginResponseType>, LoginTypes>({
      query: (body) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body,
      }),
    }),
    checkPermission: build.query({
      query: () => '/v1/check-permission',
    }),
  }),
});

export const { useLoginMutation, useCheckPermissionQuery } = authEndpoint;
