import { Flex, Image, Tabs, Typography } from 'antd';
import type React from 'react';
import { useParams } from 'react-router';
import { logo } from '../../../common/ui/image';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import A4PageContainer from '../../../layout/components/A4PageContainer';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import { useGetSingleEnrollmentQuery } from '../api/enrollmentEndpoints';

type TdWithBgProps = {
  title: string;
  style?: React.CSSProperties;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

const TdWithBg = ({ title, style, ...rest }: TdWithBgProps) => {
  return (
    <td
      style={{
        background: '#59757B',
        color: 'white',
        padding: 5,
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

  const { student_info, course_names, course_mode, admission_date, batch_no } =
    data?.data || {};
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
  padding: 8px;
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
                content={
                  <>
                    <Flex justify='space-between'>
                      <Image src={logo} width={120} height={120} />
                      <Image
                        src={student_info?.image}
                        width={120}
                        height={120}
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
                          {course_names?.map((item) => (
                            <span key={item}>{item},</span>
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
                        <td>{dateAndTimeFormat(batch_no)}</td>
                        <TdWithBg title={'Batch No'} />
                        <td>{dateAndTimeFormat(admission_date)}</td>
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
                          <strong>Address:</strong>{' '}
                          {student_info?.office_address}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Date of Birth:</strong>{' '}
                          {student_info?.name}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Nationality:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Occupation:</strong> {student_info?.name}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Office Address:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Gender:</strong> {student_info?.name}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>NID/Passport:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Email:</strong> {student_info?.name}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Mobile:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        {' '}
                        <td colSpan={2}>
                          <strong>Co Mobile Number:</strong>{' '}
                          {student_info?.name}{' '}
                        </td>
                        <td colSpan={2}>
                          <strong>Relationship:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        <TdWithBg
                          title={'Educational Qualification details'}
                          colSpan={4}
                        />
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Education:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        <TdWithBg title={'Payment Details'} colSpan={4} />
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Total Payable Amount:</strong>{' '}
                          {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Paid Amount:</strong> {student_info?.name}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4}>
                          <strong>Due Amount's (if any):</strong>{' '}
                          {student_info?.name}
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
                          <p>
                            Please return the completed enrolment form to: MCTL
                            Global Private Limited
                          </p>
                        </td>
                      </tr>
                      <TdWithBg
                        style={{ textTransform: 'none' }}
                        title={
                          'Building-46, Nikunja-2, khilkhet,Dhaka-1229, +8801781242251 mctlglobal.com info@mctlglobal.com'
                        }
                        colSpan={4}
                      />
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
