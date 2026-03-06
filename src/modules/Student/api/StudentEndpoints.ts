import { api } from '../../../app/api/api';
import { CREATE_TAG } from '../../../app/utils/CreateTags';
import type { Response } from '../../../common/types/common.type';
import type {
  IStudentList,
  IStudentQuery,
  IViewStudent,
} from '../types/StudentTypes';

const studentEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getStudentList: build.query<Response<IStudentList[]>, IStudentQuery>({
      query: (params) => ({
        url: '/student',
        params,
      }),
      providesTags: () => [CREATE_TAG('STUDENT')],
    }),
    getSingleStudent: build.query<Response<IViewStudent>, string>({
      query: (_id) => ({
        url: `/student/${_id}`,
      }),
      providesTags: () => [CREATE_TAG('STUDENT')],
    }),
    createStudent: build.mutation<Response<string>, FormData>({
      query: (body) => ({
        url: '/student',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('STUDENT')],
    }),
    updateStudent: build.mutation<
      Response<string>,
      { body: FormData; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/student/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('STUDENT')],
    }),

    deleteStudent: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/student/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('STUDENT')],
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useGetStudentListQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useGetSingleStudentQuery,
} = studentEndpoints;
