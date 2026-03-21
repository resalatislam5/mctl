import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICreateAgentCommission,
  IAgentCommissionList,
  IAgentCommissionQuery,
} from '../types/agentCommissionTypes';

const AgentCommissionEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getAgentCommissionList: build.query<
      Response<IAgentCommissionList[]>,
      IAgentCommissionQuery
    >({
      query: (params) => ({
        url: '/agent-commission',
        params,
      }),
      providesTags: () => [CREATE_TAG('AGENT_COMMISSION')],
    }),

    createAgentCommission: build.mutation<
      Response<string>,
      ICreateAgentCommission
    >({
      query: (body) => ({
        url: '/agent-commission',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('AGENT_COMMISSION')],
    }),
  }),
});

export const {
  useCreateAgentCommissionMutation,
  useGetAgentCommissionListQuery,
} = AgentCommissionEndpoints;
