import { api } from '../../../app/api/api';
import { CREATE_TAG } from '../../../app/utils/CreateTags';
import type { Response } from '../../../common/types/common.type';
import type { IChangePassword } from '../types/profileTypes';

const AccountEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation<Response<string>, IChangePassword>({
      query: (body) => ({
        url: `/profile/change-password`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('PROFILE')],
    }),
  }),
});

export const { useChangePasswordMutation } = AccountEndpoints;
