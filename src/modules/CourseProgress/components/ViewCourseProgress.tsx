import { Card } from 'antd';
import AntTable from '../../../common/Table/AntTable';
import { useGetSingleCourseProgressQuery } from '../api/courseProgressEndpoints';

const ViewCourseProgress = ({ _id }: { _id: string }) => {
  const { data, isFetching, isLoading } = useGetSingleCourseProgressQuery(_id, {
    skip: !_id,
  });

  return (
    <Card className='modal-container'>
      <AntTable
        rowKey={'course_id'}
        showTotal={false}
        pagination={false}
        dataSource={data?.data?.courses}
        loading={isFetching || isLoading}
        columns={[
          {
            title: 'Course Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Hard Copy',
            dataIndex: 'status',
            key: 'status',
          },
          {
            title: 'Soft Copy',
            dataIndex: 'soft_copy',
            key: 'soft_copy',
          },
        ]}
      />
    </Card>
  );
};

export default ViewCourseProgress;
