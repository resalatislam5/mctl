import { Divider, Flex, Table, Tabs, Typography } from 'antd';
import { useParams } from 'react-router';
import AntTable from '../../../../common/Table/AntTable';
import A4PageContainer from '../../../../layout/components/A4PageContainer';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useGetSingleExpenseHistoryQuery } from '../api/expenseHistoryEndpoints';
import PrintHeader from '../../../../common/print/PrintHeader';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';

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
const ViewExpenseHistory = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetSingleExpenseHistoryQuery(
    id as string,
    { skip: !id },
  );
  const {
    account_type,
    date,
    expense_details,
    note,
    total_amount,
    voucher_no,
    acc_name,
  } = data?.data || {};
  return (
    <ContainerLayout
      title='Expense History View'
      options={{ showButton: false, showSearch: false }}
    >
      <Tabs
        defaultActiveKey='1'
        items={[
          {
            key: '1',
            label: 'Expense History',
            children: (
              <A4PageContainer
                document_title={`${data?.data?.voucher_no}_expense`}
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
                      <TwoItem title='Account Type' text={account_type} />
                      <TwoItem title='Pay Account' text={acc_name} />
                    </div>
                    <AntTable
                      showTotal={false}
                      dataSource={expense_details}
                      rowKey={'_id'}
                      bordered
                      size='small'
                      loading={isFetching || isLoading}
                      total={data?.total}
                      columns={[
                        {
                          dataIndex: 'head_name',
                          key: 'head_name',
                          title: 'Head Name',
                        },
                        { dataIndex: 'amount', key: 'amount', title: 'Amount' },
                      ]}
                      pagination={false}
                      summary={() => (
                        <Table.Summary.Row>
                          <Table.Summary.Cell index={1} colSpan={2}>
                            <Flex justify='end'>
                              <Typography.Text>Total Amount</Typography.Text>
                            </Flex>
                          </Table.Summary.Cell>
                          <Table.Summary.Cell index={2} colSpan={1}>
                            {total_amount}
                          </Table.Summary.Cell>
                        </Table.Summary.Row>
                      )}
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

export default ViewExpenseHistory;
