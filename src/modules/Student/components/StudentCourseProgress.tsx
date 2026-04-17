import { Space } from 'antd';
import { useAppDispatch } from '../../../app/hooks/hooks';
import AntTable from '../../../common/Table/AntTable';
import { useGetCourseProgressListQuery } from '../../CourseProgress/api/courseProgressEndpoints';
import ViewButton from '../../../common/Button/ViewButton';
import { openModal } from '../../../app/features/modalSlice';
import ViewCourseProgress from '../../CourseProgress/components/ViewCourseProgress';
import EditButton from '../../../common/Button/EditButton';
import UpdateCourseProgress from '../../CourseProgress/components/UpdateCourseProgress';
import useCheckPermission from '../../../common/hooks/useCheckPermission';

const StudentCourseProgress = ({ id }: { id: string | undefined }) => {
  const { can_update } = useCheckPermission('ENROLLMENT');

  const { data, isLoading, isFetching } = useGetCourseProgressListQuery(
    { student_id: id },
    { skip: !id },
  );

  const dispatch = useAppDispatch();
  return (
    <div>
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        columns={[
          {
            dataIndex: 'student_name',
            key: 'student_name',
            title: 'Student Name',
          },
          {
            dataIndex: 'student_code',
            key: 'student_code',
            title: 'Student ID',
          },
          {
            dataIndex: 'enrollment_code',
            key: 'enrollment_code',
            title: 'Enrollment Code',
          },

          { dataIndex: 'batch_no', key: 'batch_no', title: 'Batch No' },

          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'View Course Progress',
                        content: <ViewCourseProgress _id={record._id} />,
                        open: true,
                        width: 1000,
                      }),
                    )
                  }
                />
                {/* <Dropdown
                  menu={{
                    items: [
                      {
                        label: (
                          <p
                            onClick={() =>
                              updateStatus({
                                id: record?._id,
                                status: 'APPROVED',
                              })
                            }
                            style={{ color: 'green' }}
                          >
                            APPROVED
                          </p>
                        ),

                        key: 'APPROVED',
                      },
                      // { label: 'Pending', key: 'pending' },
                      {
                        label: (
                          <p
                            onClick={() =>
                              updateStatus({
                                id: record?._id,
                                status: 'CANCELLED',
                              })
                            }
                            style={{ color: 'orange' }}
                          >
                            CANCELLED
                          </p>
                        ),

                        key: 'CANCELLED',
                      },
                      {
                        label: (
                          <p
                            onClick={() =>
                              updateStatus({
                                id: record?._id,
                                status: 'REJECTED',
                              })
                            }
                            style={{ color: 'red' }}
                          >
                            REJECTED
                          </p>
                        ),

                        key: 'REJECTED',
                      },
                    ],
                  }}
                >
                  <Tag
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                    color={
                      record?.status === 'APPROVED'
                        ? 'green'
                        : record?.status === 'REJECTED'
                          ? 'red'
                          : 'orange'
                    }
                  >
                    {record?.status}
                    <Iconify icon='iconamoon:arrow-down-2-light' />
                  </Tag>
                </Dropdown> */}

                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Course Progress',
                        content: <UpdateCourseProgress _id={record._id} />,
                        open: true,
                        width: 1000,
                      }),
                    )
                  }
                />
              </Space>
            ),
          },
        ]}
      />
    </div>
  );
};

export default StudentCourseProgress;
