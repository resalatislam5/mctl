import { Card, Col, Flex, Row, Typography } from 'antd';
import Iconify from '../../../common/Table/Iconify';
import BarChart from '../components/Chart';

const Item = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) => {
  return (
    <Card
      style={{
        background: `${color}20`,
        border: `1px solid ${color}`,
        color: color,
      }}
    >
      <Typography.Text
        style={{ color: color, display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <Iconify icon='mdi:users' />
        {title}
      </Typography.Text>
      <Typography.Title level={3} style={{ margin: '10px 0' }}>
        {value}
      </Typography.Title>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div style={{ padding: 16 }}>
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Row style={{ marginTop: 20 }} gutter={[8, 8]}>
        <Col lg={6}>
          <Item title='Total Student' value='100' color='#e11d48' />
        </Col>
        <Col lg={6}>
          <Item title='Total Student' value='100' color='#ea580c' />
        </Col>
        <Col lg={6}>
          <Item title='Total Student' value='100' color='#00b96b' />
        </Col>
        <Col lg={6}>
          <Item title='Total Student' value='100' color='#9333ea' />
        </Col>
      </Row>
      <Card style={{ marginTop: 16 }}>
        <BarChart
          title='Monthly Sales Target'
          labels={[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ]}
          dataset1={[500, 800, 600, 900, 1200]}
          dataset2={[300, 400, 500, 700, 900]}
        />
      </Card>
      <Row gutter={[8, 8]}>
        <Col lg={8}>
          <Card
            size='default'
            title={
              <Flex align='center' gap={8}>
                <Typography.Title level={4}>Best Agent</Typography.Title>
                <Typography.Text type='secondary' style={{ fontSize: '12px' }}>
                  (This Month)
                </Typography.Text>
              </Flex>
            }
            style={{ marginTop: 16 }}
          ></Card>
        </Col>
        <Col lg={8}>
          <Card
            size='default'
            title={
              <Flex align='center' gap={8}>
                <Typography.Title level={4}>Best Agent</Typography.Title>
                <Typography.Text type='secondary' style={{ fontSize: '12px' }}>
                  (This Year)
                </Typography.Text>
              </Flex>
            }
            style={{ marginTop: 16 }}
          ></Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
