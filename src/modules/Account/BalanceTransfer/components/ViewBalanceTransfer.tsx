import { Divider, Flex, Tabs, Typography } from 'antd';
import { useParams } from 'react-router';
import PrintHeader from '../../../../common/print/PrintHeader';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import A4PageContainer from '../../../../layout/components/A4PageContainer';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useGetSingleBalanceTransferQuery } from '../api/balanceTransferEndpoints';

const TwoItem = ({
  title,
  text,
}: {
  title: string;
  text: string | undefined;
}) => {
  return (
    <Flex gap={5}>
      <Typography.Text style={{ fontWeight: 600 }}>{title}</Typography.Text>:
      <Typography.Text>{text}</Typography.Text>
    </Flex>
  );
};

const ViewBalanceTransfer = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetSingleBalanceTransferQuery(
    id as string,
    { skip: !id },
  );

  const { date, note, voucher_no } = data?.data || {};

  return (
    <ContainerLayout
      title='Balance Transfer View'
      options={{ showButton: false, showSearch: false }}
    >
      <Tabs
        defaultActiveKey='1'
        items={[
          {
            key: '1',
            label: 'Balance Transfer',
            children: (
              <A4PageContainer
                document_title={`${voucher_no}_balance_transfer`}
                content={
                  <>
                    <PrintHeader />
                    <Divider />
                    <Flex justify='center'>
                      <Typography.Text
                        style={{
                          border: '1px solid #d0d0d0',
                          padding: '2px 16px',
                          fontWeight: 600,
                        }}
                      >
                        EXPENSE
                      </Typography.Text>
                    </Flex>
                    <div style={{ margin: '16px 0' }}>
                      <TwoItem title='Date' text={dateAndTimeFormat(date)} />
                      <TwoItem title='Voucher No' text={voucher_no} />
                    </div>
                    <AntTable
                      showTotal={false}
                      dataSource={[data?.data || {}]}
                      rowKey={'_id'}
                      loading={isLoading || isFetching}
                      bordered
                      size='small'
                      columns={[
                        {
                          dataIndex: 'date',
                          key: 'date',
                          title: 'Date',
                          render: (text) => dateAndTimeFormat(text),
                        },
                        {
                          dataIndex: 'voucher_no',
                          key: 'voucher_no',
                          title: 'Voucher No',
                        },
                        {
                          dataIndex: 'from_acc_name',
                          key: 'from_acc_name',
                          title: 'From Account',
                        },
                        {
                          dataIndex: 'to_acc_name',
                          key: 'to_acc_name',
                          title: 'To Account',
                        },
                        {
                          dataIndex: 'amount',
                          key: 'amount',
                          title: 'Amount',
                        },
                      ]}
                      pagination={false}
                    />
                    <Typography.Paragraph style={{ marginTop: '16px' }}>
                      Note: {note}
                    </Typography.Paragraph>
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

export default ViewBalanceTransfer;
