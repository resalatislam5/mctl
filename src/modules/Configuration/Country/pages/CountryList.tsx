import { Space } from 'antd';
import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import EditButton from '../../../../common/Button/EditButton';
import useCheckPermission from '../../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../../common/hooks/useQueryParams';
import AntTable from '../../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../../common/utils/helper.function';
import { getStatusTag } from '../../../../common/utils/status';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useGetCountryListQuery } from '../api/countryEndpoints';
import CreateCountry from '../components/CreateCountry';
import UpdateCountry from '../components/UpdateCountry';

const CountryList = () => {
  const { can_create, can_update } = useCheckPermission('COUNTRY');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetCountryListQuery(query);
  // const [deleting, { isLoading: isDeleting }] = useDeleteCountryMutation();

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Country',
            content: <CreateCountry />,
            open: true,
            width: 600,
          }),
        )
      }
      options={{ showButton: can_create }}
      title='Country List'
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        total={data?.total}
        columns={[
          {
            dataIndex: 'createdAt',
            key: 'createdAt',
            title: 'Date',
            render: (text) => dateAndTimeFormat(text),
          },
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'code', key: 'code', title: 'Code' },
          {
            dataIndex: 'status',
            key: 'status',
            title: 'Status',
            render: (text) => getStatusTag(text),
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            render: (_text, record) => (
              <Space size='middle'>
                <EditButton
                  can_update={can_update}
                  onClick={() =>
                    dispatch(
                      openModal({
                        title: 'Edit Country',
                        content: <UpdateCountry record={record} />,
                        open: true,
                        width: 600,
                      }),
                    )
                  }
                />

                {/* <DeleteButton
                  can_delete={can_delete}
                  loading={isDeleting}
                  onClick={() => deleting(record._id)}
                /> */}
              </Space>
            ),
          },
        ]}
      />
    </ContainerLayout>
  );
};

export default CountryList;
