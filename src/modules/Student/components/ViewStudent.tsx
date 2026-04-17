import { Tabs } from 'antd';
import { useParams } from 'react-router';
import SingleContainer from '../../../layout/components/SingleContainer';
import StudentBasicInfo from './StudentBasicInfo';
import StudentEnrollment from './StudentEnrollment';
import StudentMoneyReceipt from './StudentMoneyReceipt';
import StudentCourseProgress from './StudentCourseProgress';

const ViewStudent = () => {
  const { id } = useParams();

  return (
    <SingleContainer title='View Student'>
      <Tabs
        size='small'
        defaultActiveKey='1'
        items={[
          {
            key: '1',
            label: 'Student Info',
            children: <StudentBasicInfo id={id} />,
          },
          {
            key: '2',
            label: 'Enrollment',
            children: <StudentEnrollment id={id} />,
          },
          {
            key: '3',
            label: 'Money Receipt',
            children: <StudentMoneyReceipt id={id} />,
          },
          {
            key: '4',
            label: 'Course Progress',
            children: <StudentCourseProgress id={id} />,
          },
        ]}
      />
    </SingleContainer>
  );
};

export default ViewStudent;
