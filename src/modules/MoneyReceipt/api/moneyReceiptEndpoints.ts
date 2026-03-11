import { api } from '../../../app/api/api';
import { CREATE_TAG } from '../../../app/utils/CreateTags';
import type { Response } from '../../../common/types/common.type';
import type {
  ICreateMoneyReceipt,
  IMoneyReceiptList,
  IMoneyReceiptQuery,
  IViewMoneyReceipt,
} from '../types/moneyReceiptTypes';

const moneyReceiptEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getMoneyReceiptList: build.query<
      Response<IMoneyReceiptList[]>,
      IMoneyReceiptQuery
    >({
      query: (params) => ({
        url: '/money-receipt',
        params,
      }),
      providesTags: () => [CREATE_TAG('MONEY_RECEIPT')],
    }),
    getSingleMoneyReceipt: build.query<Response<IViewMoneyReceipt>, string>({
      query: (_id) => ({
        url: `/money-receipt/${_id}`,
      }),
      providesTags: () => [CREATE_TAG('MONEY_RECEIPT')],
    }),
    createMoneyReceipt: build.mutation<Response<string>, ICreateMoneyReceipt>({
      query: (body) => ({
        url: '/money-receipt',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('MONEY_RECEIPT')],
    }),
    updateMoneyReceipt: build.mutation<
      Response<string>,
      { body: ICreateMoneyReceipt; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/money-receipt/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('MONEY_RECEIPT')],
    }),

    deleteMoneyReceipt: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/money-receipt/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('MONEY_RECEIPT')],
    }),
  }),
});

export const {
  useCreateMoneyReceiptMutation,
  useGetMoneyReceiptListQuery,
  useUpdateMoneyReceiptMutation,
  useDeleteMoneyReceiptMutation,
  useGetSingleMoneyReceiptQuery,
} = moneyReceiptEndpoints;
