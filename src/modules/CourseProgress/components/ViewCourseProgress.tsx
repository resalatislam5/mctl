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
            title: 'Completion Status',
            dataIndex: 'completion_status',
            key: 'completion_status',
          },
          {
            title: 'Certificate Status',
            dataIndex: 'certificate_status',
            key: 'certificate_status',
          },
          {
            title: 'Doll Card Status',
            dataIndex: 'doll_card_status',
            key: 'doll_card_status',
          },
          {
            title: 'Delivery Status',
            dataIndex: 'delivery_status',
            key: 'delivery_status',
          },
          {
            title: 'Delivery Date',
            dataIndex: 'delivery_date',
            key: 'delivery_date',
          },
          {
            title: 'Certificate No',
            dataIndex: 'certificate_no',
            key: 'certificate_no',
          },
        ]}
      />
    </Card>
  );
};

export default ViewCourseProgress;
