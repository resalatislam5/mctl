import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import DeleteButton from '../../../../common/Button/DeleteButton';
import EditButton from '../../../../common/Button/EditButton';
import AntTable from '../../../../common/Table/AntTable';
import { getStatusTag } from '../../../../common/utils/status';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import {
  useDeleteCourseMutation,
  useGetCourseListQuery,
} from '../api/courseEndpoints';
import CreateCourse from '../components/CreateCourse';
import UpdateCourse from '../components/UpdateCourse';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';

const CourseList = () => {
  const { can_create, can_delete, can_update } = useCheckPermission('COURSE');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetCourseListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteCourseMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Course',
            content: <CreateCourse />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Course List'
      options={{ showButton: can_create }}
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        columns={[
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'price', key: 'price', title: 'Price' },
          {
            dataIndex: 'status',
            key: 'status',
            title: 'Status',
            render: (text) => getStatusTag(text),
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (_text, record) => (
              <Space size='middle'>
                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Course',
                        content: <UpdateCourse record={record} />,
                        open: true,
                        width: 600,
                      }),
                    )
                  }
                />
                <DeleteButton
                  can_delete={can_delete}
                  loading={isDeleting}
                  onClick={() => deleting(record._id)}
                />
              </Space>
            ),
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default CourseList;
