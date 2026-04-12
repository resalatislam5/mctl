import { Flex, Image, Tabs, Typography } from 'antd';
import type React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../../../app/hooks/hooks';
import Iconify from '../../../common/Table/Iconify';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import {
  advanceNumberFormat,
  dueNumberFormat,
  numberWithComma,
} from '../../../common/utils/numberFormate';
import A4PageContainer from '../../../layout/components/A4PageContainer';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import { useGetSingleEnrollmentQuery } from '../api/enrollmentEndpoints';

type TdWithBgProps = {
  title: React.ReactNode;
  style?: React.CSSProperties;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

const TdWithBg = ({ title, style, ...rest }: TdWithBgProps) => {
  return (
    <td
      style={{
        background: '#59757B',
        color: 'white',
        // padding: 5,
        textTransform: 'uppercase',
        width: 200,
        ...style,
      }}
      {...rest}
    >
      {title}
    </td>
  );
};
const ViewEnrollment = () => {
  const { _id } = useParams();
  const { data } = useGetSingleEnrollmentQuery(_id as string, { skip: !_id });

  const { user } = useAppSelector((state) => state.auth);
  const {
    student_info,
    course_names,
    course_mode,
    admission_date,
    batch_no,
    total_amount,
    total_paid,
  } = data?.data || {};
  console.log(data);

  return (
    <ContainerLayout
      title='Enrollment View'
      options={{ showButton: false, showSearch: false }}
    >
      <>
        <style>
          {`
          table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 7px;
  width: '100%'
}

        `}
        </style>
      </>
      <Tabs
        defaultActiveKey='1'
        items={[
          {
            key: '1',
            label: 'Enrollment From',
            children: (
              <A4PageContainer
                document_title={`${student_info?.name}_enrollment`}
                content={
                  <>
                    <Flex justify='space-between'>
                      <Image
                        src={user?.logo}
                        width={300}
                        height={100}
                        preview={false}
                      />
                      <Image
                        src={student_info?.image}
                        width={120}
                        height={120}
                        preview={false}
                      />
                    </Flex>
                    <Typography.Title
                      style={{
                        textTransform: 'uppercase',
                        fontWeight: 800,
                        textAlign: 'center',
                      }}
                      level={3}
                    >
                      Enrollment From
                    </Typography.Title>
                    <table>
                      <tr>
                        <TdWithBg title={'Course Name'} />
                        <td colSpan={4}>
                          {course_names?.map((item, index) => (
                            <span key={item}>
                              {item}
                              {course_names?.length > index + 1 && ','}
                            </span>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <TdWithBg title={'Course Mode'} />
                        <td colSpan={4}>{course_mode}</td>
                      </tr>
                      <tr>
                        <TdWithBg title={'Admission Date'} />
                        <td colSpan={4}>{dateAndTimeFormat(admission_date)}</td>
                      </tr>
                      <tr>
                        <TdWithBg title={'Batch No'} />
                        <td>{batch_no}</td>
                        <TdWithBg title={'Student Id'} />
                        <td>{student_info?.code}</td>
                      </tr>
                      <tr>
                        <TdWithBg title={'Personal Details'} colSpan={4} />
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Personal Name:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={4}>
                          <strong>Address:</strong> {student_info?.country_name}
                          , {student_info?.division_name},{' '}
                          {student_info?.district_name},{' '}
                          {student_info?.upazila_name}, {student_info?.village}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Date of Birth:</strong>{' '}
                          {dateAndTimeFormat(student_info?.dob)}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Nationality:</strong>{' '}
                          {student_info?.nationality}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2} width={'50%'}>
                          <strong>Occupation:</strong>{' '}
                          {student_info?.occupation}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Office Address:</strong>{' '}
                          {student_info?.office_address}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Gender:</strong> {student_info?.gender}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>NID/Passport:</strong> {student_info?.nid_no}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Email:</strong> {student_info?.email}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Mobile:</strong> {student_info?.mobile_no}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Co Mobile Number:</strong>{' '}
                          {student_info?.co_mobile}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Relationship:</strong>{' '}
                          {student_info?.relationship}
                        </td>
                      </tr>
                      <tr>
                        <TdWithBg
                          title={'Educational Qualification details'}
                          colSpan={4}
                        />
                      </tr>
                      <tr>
                        <td colSpan={4}>{student_info?.education}</td>
                      </tr>
                      <tr>
                        <TdWithBg title={'Payment Details'} colSpan={4} />
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Total Payable Amount:</strong>{' '}
                          {numberWithComma(total_amount || '')}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Paid Amount:</strong>{' '}
                          {advanceNumberFormat(total_paid || '')}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Due Amount's (if any):</strong>{' '}
                          {dueNumberFormat(
                            Number(total_amount) - Number(total_paid),
                          )}
                        </td>
                      </tr>
                      <tr>
                        <TdWithBg
                          title={'Terms and conditions & return from'}
                          colSpan={4}
                        />
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          Please note that all information provided on this
                          application must be accurate and complete. Any
                          discrepancies or false statement may result in the
                          rejection of your application or withdrawal from the
                          program if discovered after admission.
                          <br />
                          <p
                            style={{
                              margin: '10px 0',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                            }}
                          >
                            <div
                              style={{
                                border: '1px solid #000',
                                width: 16,
                                height: 16,
                              }}
                            />{' '}
                            Yes, I have read, understood, and accepted MCTL's
                            Terms and Conditions
                          </p>
                          <Flex
                            justify='space-between'
                            style={{ marginTop: 30, marginBottom: 10 }}
                          >
                            <Typography.Text
                              style={{
                                borderTop: '1px dotted #000',
                                width: 'fit-content',
                              }}
                            >
                              Student's Signature
                            </Typography.Text>
                            <Typography.Text
                              style={{
                                borderTop: '1px dotted #000',
                                width: 'fit-content',
                              }}
                            >
                              Authority's Signature
                            </Typography.Text>
                          </Flex>
                          <p>
                            Please return the completed enrolment form to: MCTL
                            Global Private Limited
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            textTransform: 'none',
                            background: '#59757B',
                            color: 'white',
                            padding: 5,
                          }}
                          colSpan={4}
                        >
                          <Flex align='center' justify='center' gap={8}>
                            <Flex gap={2} style={{ whiteSpace: 'nowrap' }}>
                              <Iconify icon='mdi:location' />
                              {user?.address},
                            </Flex>{' '}
                            <Flex gap={2}>
                              <Iconify icon='mingcute:whatsapp-fill' />{' '}
                              {user?.phone || user?.phone_2},
                            </Flex>
                            <Flex gap={2}>
                              <Iconify icon='iconoir:internet' />{' '}
                              {user?.domain_name},
                            </Flex>
                            <Flex gap={2}>
                              <Iconify icon='material-symbols:mail' />{' '}
                              {user?.support_email}
                            </Flex>
                          </Flex>
                        </td>
                      </tr>
                    </table>
                  </>
                }
              />
            ),
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default ViewEnrollment;
