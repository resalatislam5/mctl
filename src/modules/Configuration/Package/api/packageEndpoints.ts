import { api } from '../../../../app/api/api';
import { CREATE_TAG } from '../../../../app/utils/CreateTags';
import type { Response } from '../../../../common/types/common.type';
import type {
  IPackageList,
  IPackageQuery,
  ICreatePackage,
  IViewPackage,
} from '../types/packageTypes';

const packageEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    getPackageList: build.query<Response<IPackageList[]>, IPackageQuery>({
      query: (params) => ({
        url: '/config/package',
        params,
      }),
      providesTags: () => [CREATE_TAG('PACKAGE')],
    }),
    getSinglePackage: build.query<Response<IViewPackage>, string>({
      query: (id) => ({
        url: `config/package/${id}`,
      }),
      providesTags: () => [CREATE_TAG('PACKAGE')],
    }),
    createPackage: build.mutation<Response<string>, ICreatePackage>({
      query: (body) => ({
        url: '/config/package',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('PACKAGE')],
    }),
    updatePackage: build.mutation<
      Response<string>,
      { body: ICreatePackage; id: string }
    >({
      query: ({ body, id }) => ({
        url: `/config/package/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: () => [CREATE_TAG('PACKAGE')],
    }),

    deletePackage: build.mutation<Response<string>, string>({
      query: (id) => ({
        url: `/config/package/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [CREATE_TAG('PACKAGE')],
    }),
  }),
});

export const {
  useCreatePackageMutation,
  useGetPackageListQuery,
  useUpdatePackageMutation,
  useDeletePackageMutation,
  useGetSinglePackageQuery,
} = packageEndpoints;
