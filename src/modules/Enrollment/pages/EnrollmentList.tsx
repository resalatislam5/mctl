import { Dropdown, Space, Tag } from 'antd';

import { openModal } from '../../../app/features/modalSlice';
import { useAppDispatch } from '../../../app/hooks/hooks';
import DeleteButton from '../../../common/Button/DeleteButton';
import EditButton from '../../../common/Button/EditButton';
import ViewButton from '../../../common/Button/ViewButton';
import useCheckPermission from '../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../common/hooks/useQueryParams';
import AntTable from '../../../common/Table/AntTable';
import Iconify from '../../../common/Table/Iconify';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import {
  advanceNumberFormat,
  dueNumberFormat,
  numberWithComma,
} from '../../../common/utils/numberFormate';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import {
  useDeleteEnrollmentMutation,
  useGetEnrollmentListQuery,
  useUpdateEnrollmentStatusMutation,
} from '../api/enrollmentEndpoints';
import CreateEnrollment from '../components/CreateEnrollment';
import UpdateEnrollment from '../components/UpdateEnrollment';

const EnrollmentList = () => {
  const { can_create, can_delete, can_update } =
    useCheckPermission('ENROLLMENT');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetEnrollmentListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteEnrollmentMutation();
  const [updateStatus] = useUpdateEnrollmentStatusMutation();
  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Enrollment',
            content: <CreateEnrollment />,
            open: true,
            width: 1000,
          }),
        )
      }
      title='Enrollment List'
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
          {
            dataIndex: 'admission_date',
            key: 'admission_date',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          {
            dataIndex: 'student_name',
            key: 'student_name',
            title: 'Student Name',
          },

          { dataIndex: 'batch_no', key: 'batch_no', title: 'Batch No' },
          { dataIndex: 'code', key: 'code', title: 'Code' },
          {
            dataIndex: 'course_mode',
            key: 'course_mode',
            title: 'Course Mode',
          },
          {
            dataIndex: 'total_amount',
            key: 'total_amount',
            title: 'Total Amount',
            render: (text) => numberWithComma(text),
          },
          {
            dataIndex: 'total_paid',
            key: 'total_paid',
            title: 'Paid Amount',
            render: (text) => advanceNumberFormat(text),
          },
          {
            dataIndex: 'due',
            key: 'due',
            title: 'Due',
            render: (_, record) =>
              dueNumberFormat(
                Number(record.total_amount) - Number(record?.total_paid),
              ),
          },

          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton path={`/enrollment/${record?._id}`} />
                <Dropdown
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
                </Dropdown>

                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Enrollment',
                        content: <UpdateEnrollment _id={record._id} />,
                        open: true,
                        width: 1000,
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

export default EnrollmentList;
