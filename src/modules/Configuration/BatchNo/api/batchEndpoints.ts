import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  IBatchList,
  IBatchQuery,
  ICreateBatch,
} from '../types/batchTypes';

const batchEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getBatchList: build.query<Response<IBatchList[]>, IBatchQuery>({
      query: (params) => ({
        url: '/config/batch',
        params,
      }),
      providesTags: () => [CREATE_TAG('BATCH')],
    }),
    createBatch: build.mutation<Response<string>, ICreateBatch>({
      query: (body) => ({
        url: '/config/batch',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('BATCH')],
    }),
    updateBatch: build.mutation<
      Response<string>,
      { body: ICreateBatch; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/config/batch/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('BATCH')],
    }),

    deleteBatch: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/config/batch/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('BATCH')],
    }),
  }),
});

export const {
  useCreateBatchMutation,
  useGetBatchListQuery,
  useUpdateBatchMutation,
  useDeleteBatchMutation,
} = batchEndpoints;
