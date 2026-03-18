import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  IBalanceTransferList,
  IBalanceTransferQuery,
  ICreateBalanceTransfer,
  IViewBalanceTransfer,
} from '../types/balanceTransferTypes';

const balanceTransferEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getBalanceTransferList: build.query<
      Response<IBalanceTransferList[]>,
      IBalanceTransferQuery
    >({
      query: (params) => ({
        url: '/balance-transfer',
        params,
      }),
      providesTags: () => [CREATE_TAG('BALANCE_TRANSFER')],
    }),
    getSingleBalanceTransfer: build.query<
      Response<IViewBalanceTransfer>,
      string
    >({
      query: (id) => ({
        url: `/balance-transfer/${id}`,
      }),
      providesTags: () => [CREATE_TAG('BALANCE_TRANSFER')],
    }),
    createBalanceTransfer: build.mutation<
      Response<string>,
      ICreateBalanceTransfer
    >({
      query: (body) => ({
        url: '/balance-transfer',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('BALANCE_TRANSFER')],
    }),
    updateBalanceTransfer: build.mutation<
      Response<string>,
      { body: ICreateBalanceTransfer; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/balance-transfer/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('BALANCE_TRANSFER')],
    }),

    deleteBalanceTransfer: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/balance-transfer/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('BALANCE_TRANSFER')],
    }),
  }),
});

export const {
  useCreateBalanceTransferMutation,
  useGetBalanceTransferListQuery,
  useUpdateBalanceTransferMutation,
  useDeleteBalanceTransferMutation,
  useGetSingleBalanceTransferQuery,
} = balanceTransferEndpoints;
