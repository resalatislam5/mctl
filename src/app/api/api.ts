import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { logOut } from '../features/authSlice';
import { tags } from '../utils/CreateTags';
import { baseQuery } from './../../common/utils/quarry';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: baseQuery,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('mctl_token');

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, apiCtx, extraOptions) => {
  const result = await rawBaseQuery(args, apiCtx, extraOptions);

  if (result.error?.status === 401) {
    apiCtx.dispatch(api.util.resetApiState());
    apiCtx.dispatch(logOut());
    localStorage.removeItem('mctl_token');
    window.location.href = '/auth/login';
  }

  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,
  tagTypes: [...tags],
  endpoints: () => ({}),
});
