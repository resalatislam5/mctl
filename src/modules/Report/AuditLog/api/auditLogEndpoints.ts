import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type { IAuditLogList, IAuditLogQuery } from '../types/auditLogTypes';

const AuditLogEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    AuditLogList: build.query<Response<IAuditLogList[]>, IAuditLogQuery>({
      query: (query) => ({
        url: '/report/audit-log',
        params: query,
      }),
      providesTags: () => [CREATE_TAG('AUDIT_LOG')],
    }),
  }),
});

export const { useAuditLogListQuery } = AuditLogEndpoints;
