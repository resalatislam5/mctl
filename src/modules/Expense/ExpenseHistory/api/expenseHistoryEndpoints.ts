import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICreateExpenseHistory,
  IExpenseHistoryList,
  IExpenseHistoryQuery,
  IViewExpenseHistory,
} from '../types/expenseHistoryTypes';

const ExpenseHistoryEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getExpenseHistoryList: build.query<
      Response<IExpenseHistoryList[]>,
      IExpenseHistoryQuery
    >({
      query: (params) => ({
        url: '/expense',
        params,
      }),
      providesTags: () => [CREATE_TAG('EXPENSE_HISTORY')],
    }),
    getSingleExpenseHistory: build.query<Response<IViewExpenseHistory>, string>(
      {
        query: (id) => ({
          url: `/expense/${id}`,
        }),
        providesTags: () => [CREATE_TAG('EXPENSE_HISTORY')],
      },
    ),

    createExpenseHistory: build.mutation<
      Response<string>,
      ICreateExpenseHistory
    >({
      query: (body) => ({
        url: '/expense',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('EXPENSE_HISTORY')],
    }),
    updateExpenseHistory: build.mutation<
      Response<string>,
      { body: ICreateExpenseHistory; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/expense/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('EXPENSE_HISTORY')],
    }),

    deleteExpenseHistory: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/expense/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('EXPENSE_HISTORY')],
    }),
  }),
});

export const {
  useCreateExpenseHistoryMutation,
  useGetExpenseHistoryListQuery,
  useUpdateExpenseHistoryMutation,
  useDeleteExpenseHistoryMutation,
  useGetSingleExpenseHistoryQuery,
} = ExpenseHistoryEndpoints;
