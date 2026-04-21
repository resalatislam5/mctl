import { Flex, Space, Tabs, Typography } from 'antd';
import type React from 'react';
import { useParams } from 'react-router';
import PrintHeader from '../../../../common/print/PrintHeader';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import A4PageContainer from '../../../../layout/components/A4PageContainer';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useGetSingleAgentPaymentQuery } from '../api/agentPaymentEndpoints';
import type { IViewAgentPayment } from '../types/agentPaymentTypes';

type TTwoItemProps = {
  title: React.ReactNode;
  value: React.ReactNode;
  style?: React.CSSProperties;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

const TwoItem = ({ title, value, style }: TTwoItemProps) => {
  return (
    <Flex gap={10} style={{ ...style }}>
      <Typography.Text
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </Typography.Text>
      <Typography.Text>:</Typography.Text>
      <Typography.Text
        style={{
          borderBottom: '1px dotted #000',
          width: '100%',
          marginTop: value ? 0 : value === 0 ? 0 : 20,
        }}
      >
        {value}
      </Typography.Text>
    </Flex>
  );
};

const AgentPaymentReceipt = ({
  data,
}: {
  data: IViewAgentPayment | undefined;
}) => {
  const {
    amount,
    date,
    paid_amount,
    payment_method,
    voucher_no,
    agent_name,
    commission_amount,
    note,
    reference_no,
    batch_no,
  } = data || {};
  return (
    <div style={{ border: '2px solid #000', padding: '16px' }}>
      {/* <Flex align='center'>
        <Image src={logo} width={100} height={100} preview={false} />
        <Flex vertical>
          <Typography.Title
            level={1}
            color='primary'
            style={{ marginBottom: 0, color: token.colorPrimary }}
          >
            <span style={{ fontWeight: 900 }}>MCTL GLOBAL</span> PRIVATE LIMITED
          </Typography.Title>

          <Flex align='center' justify='center' gap={8}>
            <Typography.Text style={{ fontSize: '12px' }}>
              Ground Floor, Building No: 46, Road No: 11, Nikunjo, Dhaka-1229,
              Tel: +880 1792608242, +880 1781242251
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex> */}
      <PrintHeader />
      <Flex vertical gap={16} style={{ width: '100%', marginTop: '20px' }}>
        <Flex justify='space-between' gap={8}>
          <Space>
            <Typography.Text>Voucher No: </Typography.Text>{' '}
            <Typography.Text
              style={{
                borderBottom: '1px dotted #000',
                minWidth: '100px',
                display: 'inline-block',
              }}
            >
              {voucher_no}
            </Typography.Text>
          </Space>
          <Space>
            <Typography.Text>Date: </Typography.Text>{' '}
            <Typography.Text
              style={{
                borderBottom: '1px dotted #000',
                minWidth: '100px',
                display: 'inline-block',
              }}
            >
              {dateAndTimeFormat(date)}
            </Typography.Text>
          </Space>
        </Flex>
        <TwoItem title={'Agent Name'} value={agent_name} />
        <Flex gap={16} style={{ width: '100%' }}>
          <TwoItem
            style={{ width: '50%' }}
            title={'Batch No'}
            value={batch_no}
          />
          <TwoItem
            style={{ width: '50%' }}
            title={'Reference No'}
            value={reference_no}
          />
        </Flex>
        <TwoItem title={'Payment For'} value={note} />
        <Flex gap={16} style={{ width: '100%' }}>
          <TwoItem
            style={{ width: '50%' }}
            title={'Paid Amount'}
            value={paid_amount}
          />
          <TwoItem
            style={{ width: '50%' }}
            title={'Due Payment'}
            value={Number(commission_amount || 0) - Number(paid_amount || 0)}
          />
        </Flex>
        <Flex gap={16} style={{ width: '100%' }}>
          <TwoItem
            style={{ width: '50%' }}
            title={'Payment Method'}
            value={payment_method}
          />
          <TwoItem style={{ width: '50%' }} title={'Amount'} value={amount} />
        </Flex>
        <Flex justify='end'>
          <Typography.Text
            style={{
              borderTop: '1px dotted #000',
              width: 'fit-content',
              marginTop: 30,
            }}
          >
            Authorized Signature
          </Typography.Text>
        </Flex>
      </Flex>
    </div>
  );
};
const ViewAgentPayment = () => {
  const { id } = useParams();

  const { data } = useGetSingleAgentPaymentQuery(id as string, { skip: !id });

  return (
    <ContainerLayout
      title='Agent Payment View'
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
            label: 'Agent Payment',
            children: (
              <A4PageContainer
                document_title={`${data?.data?.agent_name}_agent_payment_receipt`}
                content={
                  <>
                    <AgentPaymentReceipt data={data?.data} />
                    <div style={{ marginTop: '16px' }} />
                    <AgentPaymentReceipt data={data?.data} />
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

export default ViewAgentPayment;
