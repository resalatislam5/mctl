import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import ViewButton from '../../../../common/Button/ViewButton';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import { SelectUser } from '../../../../common/SelectWithApi/Select';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import { getStatusTag } from '../../../../common/utils/status';
import ReportContainer from '../../../../layout/components/ReportContainer';
import { useAuditLogListQuery } from '../api/auditLogEndpoints';
import ViewAuditReport from '../components/ViewAuditReport';
import { type IAuditLogQuery } from '../types/auditLogTypes';

const AuditLogReport = () => {
  const { query, setQuery } = useQueryParams<IAuditLogQuery>();
  const { data, isLoading, isFetching } = useAuditLogListQuery(query, {
    skip: !query?.from_date,
  });

  const dispatch = useAppDispatch();
  return (
    <ReportContainer
      title='Audit Log '
      options={{}}
      additionalFilter={
        <>
          <SelectUser
            label='Student'
            name='student_id'
            sm={8}
            md={8}
            lg={5}
            onChange={(e) => setQuery({ user_id: e })}
            noStyle
          />
        </>
      }
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        pagination={false}
        columns={[
          {
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          { dataIndex: 'user_name', key: 'user_name', title: 'Name' },
          {
            dataIndex: 'action',
            key: 'action',
            title: 'Action',
            render: (text) => getStatusTag(text),
          },
          {
            dataIndex: 'description',
            key: 'description',
            title: 'Description',
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (_text, record) => (
              <Space size='middle'>
                <ViewButton
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'View Audit Report',
                        content: <ViewAuditReport record={record} />,
                        open: true,
                        width: 800,
                      }),
                    )
                  }
                />
              </Space>
            ),
          },
        ]}
      />
    </ReportContainer>
  );
};

export default AuditLogReport;
