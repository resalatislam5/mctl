import { api } from '../../../app/api/api';
import { CREATE_TAG } from '../../../app/utils/CreateTags';
import type { Response } from '../../../common/types/common.type';
import type {
  ICourseProgressList,
  ICourseProgressQuery,
  ICreateCourseProgress,
  IViewCourseProgress,
} from '../types/courseProgressTypes';

const CourseProgressEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getCourseProgressList: build.query<
      Response<ICourseProgressList[]>,
      ICourseProgressQuery
    >({
      query: (params) => ({
        url: '/course-progress',
        params,
      }),
      providesTags: () => [CREATE_TAG('COURSE_PROGRESS')],
    }),
    getSingleCourseProgress: build.query<Response<IViewCourseProgress>, string>(
      {
        query: (_id) => ({
          url: `/course-progress/${_id}`,
        }),
        providesTags: () => [CREATE_TAG('COURSE_PROGRESS')],
      },
    ),
    createCourseProgress: build.mutation<
      Response<string>,
      ICreateCourseProgress
    >({
      query: (body) => ({
        url: '/course-progress',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('COURSE_PROGRESS')],
    }),
    updateCourseProgress: build.mutation<
      Response<string>,
      { body: ICreateCourseProgress; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/course-progress/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('COURSE_PROGRESS')],
    }),

    // updateCourseProgressStatus: build.mutation<
    //   Response<string>,
    //   { id: string; status: ICourseProgressStatus }
    // >({
    //   query: ({ id, status }) => ({
    //     url: `/course-progress/${id}/status`,
    //     method: 'PATCH',
    //     body: { status },
    //   }),
    //   invalidatesTags: () => [CREATE_TAG('COURSE_PROGRESS')],
    // }),
  }),
});

export const {
  useCreateCourseProgressMutation,
  useGetCourseProgressListQuery,
  useUpdateCourseProgressMutation,
  useGetSingleCourseProgressQuery,
  // useUpdateCourseProgressStatusMutation,
} = CourseProgressEndpoints;
