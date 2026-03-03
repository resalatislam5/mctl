import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICreateAgent,
  IAgentList,
  IAgentQuery,
} from '../types/agentTypes';

const AgentEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getAgentList: build.query<Response<IAgentList[]>, IAgentQuery>({
      query: (params) => ({
        url: '/config/agent',
        params,
      }),
      providesTags: () => [CREATE_TAG('AGENT')],
    }),

    createAgent: build.mutation<Response<string>, ICreateAgent>({
      query: (body) => ({
        url: '/config/agent',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('AGENT')],
    }),
    updateAgent: build.mutation<
      Response<string>,
      { body: ICreateAgent; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/config/agent/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('AGENT')],
    }),

    deleteAgent: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/config/agent/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('AGENT')],
    }),
  }),
});

export const {
  useCreateAgentMutation,
  useGetAgentListQuery,
  useUpdateAgentMutation,
  useDeleteAgentMutation,
} = AgentEndpoints;
