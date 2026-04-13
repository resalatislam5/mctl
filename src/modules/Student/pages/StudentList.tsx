import { Space } from 'antd';

import { openModal } from '../../../app/features/modalSlice';
import { useAppDispatch } from '../../../app/hooks/hooks';
import DeleteButton from '../../../common/Button/DeleteButton';
import EditButton from '../../../common/Button/EditButton';
import ViewButton from '../../../common/Button/ViewButton';
import useCheckPermission from '../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../common/hooks/useQueryParams';
import { SelectStudent } from '../../../common/SelectWithApi/Select';
import AntTable from '../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import { getStatusTag } from '../../../common/utils/status';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import {
  useDeleteStudentMutation,
  useGetStudentListQuery,
} from '../api/StudentEndpoints';
import CreateStudent from '../components/CreateStudent';
import UpdateStudent from '../components/UpdateStudent';
import type { IStudentQuery } from '../types/StudentTypes';

const StudentList = () => {
  const { can_create, can_delete, can_update } = useCheckPermission('STUDENT');
  const dispatch = useAppDispatch();
  const { query, setQuery } = useQueryParams<IStudentQuery>();
  const { data, isLoading, isFetching } = useGetStudentListQuery(query);
  const [deleting, { isLoading: isDeleting }] = useDeleteStudentMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Student',
            content: <CreateStudent />,
            open: true,
            width: 1000,
          }),
        )
      }
      title='Student List'
      options={{ showButton: can_create }}
      additionalFilter={
        <>
          <SelectStudent
            label='Student'
            name='student_id'
            sm={8}
            md={8}
            lg={4}
            onChange={(e) => setQuery({ student_id: e })}
            noStyle
          />
        </>
      }
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
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
            width: 130,
          },
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'mobile_no', key: 'mobile_no', title: 'Mobile No' },
          { dataIndex: 'email', key: 'email', title: 'Email' },
          { dataIndex: 'nid_no', key: 'nid_no', title: 'NID' },
          // { dataIndex: 'code', key: 'code', title: 'Code' },
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
                <ViewButton path={`/student/${record?._id}`} />

                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Student',
                        content: <UpdateStudent _id={record._id} />,
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

export default StudentList;
