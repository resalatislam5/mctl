import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  IAgentPaymentList,
  IAgentPaymentQuery,
  ICreateAgentPayment,
  IViewAgentPayment,
} from '../types/agentPaymentTypes';

const agentPaymentEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getAgentPaymentList: build.query<
      Response<IAgentPaymentList[]>,
      IAgentPaymentQuery
    >({
      query: (params) => ({
        url: '/agent-payment',
        params,
      }),
      providesTags: () => [CREATE_TAG('AGENT_PAYMENT')],
    }),
    getSingleAgentPayment: build.query<Response<IViewAgentPayment>, string>({
      query: (_id) => ({
        url: `/agent-payment/${_id}`,
      }),
      providesTags: () => [CREATE_TAG('AGENT_PAYMENT')],
    }),
    createAgentPayment: build.mutation<Response<string>, ICreateAgentPayment>({
      query: (body) => ({
        url: '/agent-payment',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('AGENT_PAYMENT')],
    }),
    updateAgentPayment: build.mutation<
      Response<string>,
      { body: ICreateAgentPayment; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/agent-payment/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('AGENT_PAYMENT')],
    }),

    deleteAgentPayment: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/agent-payment/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('AGENT_PAYMENT')],
    }),
  }),
});

export const {
  useCreateAgentPaymentMutation,
  useGetAgentPaymentListQuery,
  useUpdateAgentPaymentMutation,
  useDeleteAgentPaymentMutation,
  useGetSingleAgentPaymentQuery,
} = agentPaymentEndpoints;
