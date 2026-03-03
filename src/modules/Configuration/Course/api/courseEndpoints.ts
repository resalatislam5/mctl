import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  ICourseList,
  ICourseQuery,
  ICreateCourse,
} from '../types/courseTypes';

const courseEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getCourseList: build.query<Response<ICourseList[]>, ICourseQuery>({
      query: (params) => ({
        url: '/config/course',
        params,
      }),
      providesTags: () => [CREATE_TAG('COURSE')],
    }),
    createCourse: build.mutation<Response<string>, ICreateCourse>({
      query: (body) => ({
        url: '/config/course',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('COURSE')],
    }),
    updateCourse: build.mutation<
      Response<string>,
      { body: ICreateCourse; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/config/course/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('COURSE')],
    }),

    deleteCourse: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/config/course/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('COURSE')],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetCourseListQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseEndpoints;
