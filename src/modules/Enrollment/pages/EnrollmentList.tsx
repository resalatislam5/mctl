import { Space } from 'antd';

import { openModal } from '../../../app/features/modalSlice';
import { useAppDispatch } from '../../../app/hooks/hooks';
import DeleteButton from '../../../common/Button/DeleteButton';
import EditButton from '../../../common/Button/EditButton';
import ViewButton from '../../../common/Button/ViewButton';
import useCheckPermission from '../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../common/hooks/useQueryParams';
import AntTable from '../../../common/Table/AntTable';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import {
  useDeleteEnrollmentMutation,
  useGetEnrollmentListQuery,
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
          },
          {
            dataIndex: 'total_paid',
            key: 'total_paid',
            title: 'Paid Amount',
            render: (text) => <p style={{ color: 'green' }}>{text}</p>,
          },
          {
            dataIndex: 'due',
            key: 'due',
            title: 'Due',
            render: (_, record) => (
              <p style={{ color: 'red' }}>
                {Number(record.total_amount) - Number(record?.total_paid)}
              </p>
            ),
          },

          {
            title: 'Action',
            key: 'action',
            width: 200,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton path={`/enrollment/${record?._id}`} />

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
