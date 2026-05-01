import {
  BankOutlined,
  BookOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  FallOutlined,
  GlobalOutlined,
  RiseOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Layout,
  Progress,
  Row,
  Space,
  Statistic,
  Table,
  Tag,
  Timeline,
  Typography,
} from 'antd';
import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip as RTooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const { Content } = Layout;
const { Title, Text } = Typography;

const enrollmentTrend = [
  { month: 'Jan', enrollments: 480, students: 320 },
  { month: 'Feb', enrollments: 520, students: 360 },
  { month: 'Mar', enrollments: 610, students: 410 },
  { month: 'Apr', enrollments: 740, students: 490 },
  { month: 'May', enrollments: 890, students: 580 },
  { month: 'Jun', enrollments: 803, students: 540 },
];

const courseData = [
  { name: 'IELTS Prep', students: 1420, color: '#1677ff' },
  { name: 'TOEFL', students: 880, color: '#52c41a' },
  { name: 'GRE/GMAT', students: 620, color: '#fa8c16' },
  { name: 'Spoken English', students: 540, color: '#722ed1' },
  { name: 'UK Visa Prep', students: 380, color: '#13c2c2' },
  { name: 'PTE Academic', students: 290, color: '#eb2f96' },
];

const agentColumns = [
  {
    title: 'Rank',
    key: 'rank',
    width: 60,
    render: (_: any, __: any, index: number) => (
      <Text
        strong
        style={{
          color:
            index === 0
              ? '#faad14'
              : index === 1
                ? '#8c8c8c'
                : index === 2
                  ? '#d46b08'
                  : '#595959',
        }}
      >
        #{index + 1}
      </Text>
    ),
  },
  {
    title: 'Agent',
    key: 'name',
    render: (r: any) => (
      <Space>
        <Avatar style={{ backgroundColor: r.color, fontSize: 12 }} size={32}>
          {r.avatar}
        </Avatar>
        <div>
          <div style={{ fontWeight: 500, fontSize: 13 }}>{r.name}</div>
          <div style={{ fontSize: 11, color: '#8c8c8c' }}>{r.region}</div>
        </div>
      </Space>
    ),
  },
  {
    title: 'Referrals',
    dataIndex: 'referrals',
    key: 'referrals',
    render: (v: number) => <Text strong>{v}</Text>,
  },
  {
    title: 'Enrollments',
    dataIndex: 'enrollments',
    key: 'enrollments',
    render: (v: number) => <Tag color='blue'>{v}</Tag>,
  },
  {
    title: 'Conv. %',
    dataIndex: 'conversion',
    key: 'conversion',
    render: (v: number) => (
      <Space direction='vertical' size={0} style={{ width: 80 }}>
        <Text style={{ fontSize: 12 }}>{v}%</Text>
        <Progress
          percent={v}
          showInfo={false}
          size='small'
          strokeColor={v >= 85 ? '#52c41a' : v >= 70 ? '#fa8c16' : '#ff4d4f'}
        />
      </Space>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (s: string) => (
      <Badge status={s === 'Active' ? 'success' : 'default'} text={s} />
    ),
  },
];

const agentData = [
  {
    key: '1',
    name: 'Nusrat Jahan',
    avatar: 'NJ',
    color: '#1677ff',
    region: 'Dhaka North',
    referrals: 124,
    enrollments: 113,
    conversion: 91,
    status: 'Active',
  },
  {
    key: '2',
    name: 'Rafiq Hossain',
    avatar: 'RH',
    color: '#52c41a',
    region: 'Chittagong',
    referrals: 108,
    enrollments: 92,
    conversion: 85,
    status: 'Active',
  },
  {
    key: '3',
    name: 'Mitu Akter',
    avatar: 'MA',
    color: '#fa8c16',
    region: 'Sylhet',
    referrals: 97,
    enrollments: 77,
    conversion: 79,
    status: 'Active',
  },
  {
    key: '4',
    name: 'Sabbir Ahmed',
    avatar: 'SA',
    color: '#722ed1',
    region: 'Rajshahi',
    referrals: 84,
    enrollments: 64,
    conversion: 76,
    status: 'Active',
  },
  {
    key: '5',
    name: 'Tania Islam',
    avatar: 'TI',
    color: '#13c2c2',
    region: 'Khulna',
    referrals: 71,
    enrollments: 51,
    conversion: 72,
    status: 'Active',
  },
  {
    key: '6',
    name: 'Arif Mahmud',
    avatar: 'AM',
    color: '#eb2f96',
    region: 'Comilla',
    referrals: 58,
    enrollments: 39,
    conversion: 67,
    status: 'Active',
  },
  {
    key: '7',
    name: 'Farida Begum',
    avatar: 'FB',
    color: '#8c8c8c',
    region: 'Mymensingh',
    referrals: 43,
    enrollments: 26,
    conversion: 60,
    status: 'Inactive',
  },
];

const studentColumns = [
  {
    title: 'Student',
    key: 'student',
    render: (r: any) => (
      <Space>
        <Avatar
          style={{ background: '#e6f4ff', color: '#1677ff', fontSize: 11 }}
          size={28}
        >
          {r.name.slice(0, 2).toUpperCase()}
        </Avatar>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500 }}>{r.name}</div>
          <div style={{ fontSize: 11, color: '#8c8c8c' }}>{r.id}</div>
        </div>
      </Space>
    ),
  },
  {
    title: 'Course',
    dataIndex: 'course',
    key: 'course',
    render: (c: string) => <Tag>{c}</Tag>,
  },
  {
    title: 'Enrolled',
    dataIndex: 'date',
    key: 'date',
    render: (d: string) => (
      <Text type='secondary' style={{ fontSize: 12 }}>
        {d}
      </Text>
    ),
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    render: (p: string) => (
      <Tag
        color={p === 'Paid' ? 'success' : p === 'Partial' ? 'warning' : 'error'}
      >
        {p}
      </Tag>
    ),
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    render: (v: number) => (
      <Progress percent={v} size='small' style={{ width: 90 }} />
    ),
  },
];

const recentStudents = [
  {
    key: '1',
    name: 'Rima Khatun',
    id: 'STU-2041',
    course: 'IELTS',
    date: 'May 1, 2026',
    payment: 'Paid',
    progress: 35,
  },
  {
    key: '2',
    name: 'Tanvir Ahmed',
    id: 'STU-2040',
    course: 'TOEFL',
    date: 'Apr 30, 2026',
    payment: 'Partial',
    progress: 20,
  },
  {
    key: '3',
    name: 'Sadia Parvin',
    id: 'STU-2039',
    course: 'GRE/GMAT',
    date: 'Apr 29, 2026',
    payment: 'Paid',
    progress: 60,
  },
  {
    key: '4',
    name: 'Karim Uddin',
    id: 'STU-2038',
    course: 'UK Visa',
    date: 'Apr 28, 2026',
    payment: 'Unpaid',
    progress: 5,
  },
  {
    key: '5',
    name: 'Nazmul Islam',
    id: 'STU-2037',
    course: 'Spoken Eng',
    date: 'Apr 27, 2026',
    payment: 'Paid',
    progress: 80,
  },
  {
    key: '6',
    name: 'Jasmine Akter',
    id: 'STU-2036',
    course: 'PTE',
    date: 'Apr 26, 2026',
    payment: 'Paid',
    progress: 45,
  },
];

const activityItems = [
  {
    color: 'green',
    icon: <UserOutlined />,
    content: 'Rima Khatun enrolled in IELTS Prep',
    time: '2 min ago',
  },
  {
    color: 'blue',
    icon: <BankOutlined />,
    content: 'Payment ৳12,500 received from Karim Uddin',
    time: '11 min ago',
  },
  {
    color: 'orange',
    icon: <GlobalOutlined />,
    content: 'UK visa docs submitted for 3 students',
    time: '34 min ago',
  },
  {
    color: 'purple',
    icon: <TeamOutlined />,
    content: 'New agent Sadia Islam registered',
    time: '1 hr ago',
  },
  {
    color: 'red',
    icon: <ExclamationCircleOutlined />,
    content: 'Invoice #2041 overdue – Tanvir Ahmed',
    time: '2 hr ago',
  },
  {
    color: 'cyan',
    icon: <BookOutlined />,
    content: 'GRE batch B started – 24 students',
    time: '3 hr ago',
  },
];

const Dashboard_V2: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        {/* ── Main Content ── */}
        <Content
          style={{
            padding: '20px 24px',
            background: '#f5f6fa',
            overflowY: 'auto',
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <Title level={4} style={{ margin: 0 }}>
              Dashboard Overview
            </Title>
            <Text type='secondary' style={{ fontSize: 13 }}>
              Welcome back — here's what's happening today.
            </Text>
          </div>

          {/* KPI Cards */}
          <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
            {[
              {
                label: 'Total Students',
                value: 4281,
                prefix: <UserOutlined />,
                color: '#1677ff',
                trend: '+12.4%',
                positive: true,
                sub: 'vs last month',
              },
              {
                label: 'Total Enrollments',
                value: 6043,
                prefix: <BookOutlined />,
                color: '#52c41a',
                trend: '+8.7%',
                positive: true,
                sub: 'vs last month',
              },
              {
                label: 'Active Agents',
                value: 38,
                prefix: <TeamOutlined />,
                color: '#fa8c16',
                trend: '+3',
                positive: true,
                sub: 'new this month',
              },
              {
                label: 'Pending Payments',
                value: 143,
                prefix: <ExclamationCircleOutlined />,
                color: '#ff4d4f',
                trend: '৳286K',
                positive: false,
                sub: 'outstanding',
              },
            ].map((k) => (
              <Col xs={24} sm={12} lg={6} key={k.label}>
                <Card bordered={false} style={{ borderRadius: 10 }}>
                  <Statistic
                    title={
                      <Text type='secondary' style={{ fontSize: 12 }}>
                        {k.label}
                      </Text>
                    }
                    value={k.value}
                    prefix={React.cloneElement(k.prefix, {
                      style: { color: k.color },
                    })}
                    valueStyle={{
                      fontSize: 26,
                      fontWeight: 600,
                      color: k.color,
                    }}
                    suffix={
                      k.label === 'Pending Payments' ? ' invoices' : undefined
                    }
                  />
                  <div
                    style={{
                      marginTop: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    {k.positive ? (
                      <RiseOutlined
                        style={{ color: '#52c41a', fontSize: 11 }}
                      />
                    ) : (
                      <FallOutlined
                        style={{ color: '#ff4d4f', fontSize: 11 }}
                      />
                    )}
                    <Text
                      style={{
                        fontSize: 11,
                        color: k.positive ? '#52c41a' : '#ff4d4f',
                      }}
                    >
                      {k.trend} {k.sub}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Area Chart + Pie */}
          <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
            <Col xs={24} lg={15}>
              <Card
                title='Monthly Enrollment & Student Trend'
                extra={
                  <Text type='secondary' style={{ fontSize: 12 }}>
                    Jan – Jun 2026
                  </Text>
                }
                bordered={false}
                style={{ borderRadius: 10 }}
                styles={{ body: { paddingTop: 8 } }}
              >
                <ResponsiveContainer width='100%' height={240}>
                  <AreaChart
                    data={enrollmentTrend}
                    margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id='gEnroll' x1='0' y1='0' x2='0' y2='1'>
                        <stop
                          offset='5%'
                          stopColor='#1677ff'
                          stopOpacity={0.15}
                        />
                        <stop
                          offset='95%'
                          stopColor='#1677ff'
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id='gStudents'
                        x1='0'
                        y1='0'
                        x2='0'
                        y2='1'
                      >
                        <stop
                          offset='5%'
                          stopColor='#52c41a'
                          stopOpacity={0.15}
                        />
                        <stop
                          offset='95%'
                          stopColor='#52c41a'
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
                    <XAxis
                      dataKey='month'
                      tick={{ fontSize: 12, fill: '#8c8c8c' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: '#8c8c8c' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RTooltip
                      contentStyle={{
                        borderRadius: 8,
                        fontSize: 12,
                        border: '1px solid #f0f0f0',
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Area
                      type='monotone'
                      dataKey='enrollments'
                      name='Enrollments'
                      stroke='#1677ff'
                      strokeWidth={2}
                      fill='url(#gEnroll)'
                      dot={{ r: 3 }}
                    />
                    <Area
                      type='monotone'
                      dataKey='students'
                      name='New Students'
                      stroke='#52c41a'
                      strokeWidth={2}
                      fill='url(#gStudents)'
                      dot={{ r: 3 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>
            </Col>

            <Col xs={24} lg={9}>
              <Card
                title='Course Distribution'
                extra={
                  <Text type='secondary' style={{ fontSize: 12 }}>
                    Active enrollments
                  </Text>
                }
                bordered={false}
                style={{ borderRadius: 10 }}
                styles={{ body: { paddingTop: 8 } }}
              >
                <ResponsiveContainer width='100%' height={160}>
                  <PieChart>
                    <Pie
                      data={courseData}
                      dataKey='students'
                      nameKey='name'
                      cx='50%'
                      cy='50%'
                      outerRadius={70}
                      innerRadius={38}
                    >
                      {courseData.map((_, i) => (
                        <Cell key={i} fill={courseData[i].color} />
                      ))}
                    </Pie>
                    <RTooltip
                      contentStyle={{ borderRadius: 8, fontSize: 12 }}
                      formatter={(v: any) => [`${v} students`]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    marginTop: 8,
                  }}
                >
                  {courseData.map((c) => (
                    <div
                      key={c.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Space size={6}>
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: 2,
                            background: c.color,
                            display: 'inline-block',
                          }}
                        />
                        <Text style={{ fontSize: 12 }}>{c.name}</Text>
                      </Space>
                      <Text strong style={{ fontSize: 12 }}>
                        {c.students.toLocaleString()}
                      </Text>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>

          {/* Bar Chart + Activity Feed */}
          <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
            <Col xs={24} lg={16}>
              <Card
                title='Course Enrollment Breakdown'
                extra={
                  <Text type='secondary' style={{ fontSize: 12 }}>
                    All active courses
                  </Text>
                }
                bordered={false}
                style={{ borderRadius: 10 }}
                styles={{ body: { paddingTop: 8 } }}
              >
                <ResponsiveContainer width='100%' height={220}>
                  <BarChart
                    data={courseData}
                    margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray='3 3'
                      stroke='#f0f0f0'
                      vertical={false}
                    />
                    <XAxis
                      dataKey='name'
                      tick={{ fontSize: 11, fill: '#8c8c8c' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: '#8c8c8c' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <RTooltip
                      contentStyle={{ borderRadius: 8, fontSize: 12 }}
                      formatter={(v: any) => [`${v} students`]}
                    />
                    <Bar
                      dataKey='students'
                      name='Students'
                      radius={[4, 4, 0, 0]}
                    >
                      {courseData.map((_, i) => (
                        <Cell key={i} fill={courseData[i].color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Col>

            <Col xs={24} lg={8}>
              <Card
                title='Recent Activity'
                extra={
                  <Badge dot>
                    <ClockCircleOutlined style={{ color: '#8c8c8c' }} />
                  </Badge>
                }
                bordered={false}
                style={{ borderRadius: 10, height: '100%' }}
              >
                <Timeline
                  items={activityItems.map((a) => ({
                    color: a.color,
                    dot: a.icon,
                    children: (
                      <div>
                        <Text style={{ fontSize: 12 }}>{a.content}</Text>
                        <br />
                        <Text type='secondary' style={{ fontSize: 11 }}>
                          {a.time}
                        </Text>
                      </div>
                    ),
                  }))}
                />
              </Card>
            </Col>
          </Row>

          {/* Agent Leaderboard */}
          <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
            <Col span={24}>
              <Card
                title={
                  <Space>
                    <TeamOutlined style={{ color: '#1677ff' }} />
                    <span>Top Agents Leaderboard</span>
                  </Space>
                }
                extra={
                  <Button type='link' size='small'>
                    View all agents
                  </Button>
                }
                bordered={false}
                style={{ borderRadius: 10 }}
              >
                <Table
                  columns={agentColumns}
                  dataSource={agentData}
                  pagination={false}
                  size='small'
                />
              </Card>
            </Col>
          </Row>

          {/* Recent Students */}
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card
                title={
                  <Space>
                    <UserOutlined style={{ color: '#52c41a' }} />
                    <span>Recent Student Enrollments</span>
                  </Space>
                }
                extra={
                  <Button type='link' size='small'>
                    View all students
                  </Button>
                }
                bordered={false}
                style={{ borderRadius: 10 }}
              >
                <Table
                  columns={studentColumns}
                  dataSource={recentStudents}
                  pagination={false}
                  size='small'
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard_V2;
