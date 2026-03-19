import { Tabs } from 'antd';
import { useParams } from 'react-router';
import SingleContainer from '../../../layout/components/SingleContainer';
import StudentBasicInfo from './StudentBasicInfo';
import StudentMoneyReceipt from './StudentMoneyReceipt';

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
            label: 'Money Receipt',
            children: <StudentMoneyReceipt id={id} />,
          },
        ]}
      />
    </SingleContainer>
  );
};

export default ViewStudent;
