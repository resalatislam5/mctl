import { Tabs } from 'antd';
import { useParams } from 'react-router';
import { useGetSingleEnrollmentQuery } from '../api/enrollmentEndpoints';
import ContainerLayout from '../../../layout/components/ContainerLayout';

const ViewEnrollment = () => {
  const { _id } = useParams();
  const { data } = useGetSingleEnrollmentQuery(_id as string, { skip: !_id });

  console.log(data);

  return (
    <ContainerLayout
      title='Enrollment View'
      options={{ showButton: false, showSearch: false }}
    >
      <Tabs
        defaultActiveKey='1'
        items={[
          {
            key: '1',
            label: 'Enrollment From',
            children: 'Content of Tab Pane 1',
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default ViewEnrollment;
