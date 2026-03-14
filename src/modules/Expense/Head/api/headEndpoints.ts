import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type { ICreateHead, IHeadList, IHeadQuery } from '../types/headTypes';

const headEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getHeadList: build.query<Response<IHeadList[]>, IHeadQuery>({
      query: (params) => ({
        url: '/head',
        params,
      }),
      providesTags: () => [CREATE_TAG('HEAD')],
    }),
    createHead: build.mutation<Response<string>, ICreateHead>({
      query: (body) => ({
        url: '/head',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('HEAD')],
    }),
  }),
});

export const { useGetHeadListQuery, useCreateHeadMutation } = headEndpoints;
