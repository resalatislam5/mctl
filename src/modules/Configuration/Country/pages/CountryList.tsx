import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import AntTable from '../../../../common/Table/AntTable';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import { useGetCountryListQuery } from '../api/countryEndpoints';
import CreateCountry from '../components/CreateCountry';

const CountryList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useGetCountryListQuery({});
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
      title='User List'
    >
      <AntTable
        dataSource={data?.data}
        rowKey={'_id'}
        bordered
        size='small'
        loading={isFetching || isLoading}
        columns={[
          { dataIndex: 'name', key: 'name', title: 'Name' },
          { dataIndex: 'code', key: 'code', title: 'Code' },
          { dataIndex: 'status', key: 'status', title: 'Status' },
          // {
          //   title: 'Action',
          //   key: 'action',
          //   width: 150,
          //   render: (_text: string, record: ICountryList) => (
          //     <Space size='middle'>
          //       <EditButton
          //         onClick={() =>
          //           dispatch(
          //             openModal({
          //               title: 'Edit Country',
          //               content: <UpdateCountry record={record} />,
          //               open: true,
          //               width: 600,
          //             }),
          //           )
          //         }
          //       />
          //       <DeleteButton
          //         loading={isDeleting}
          //         onClick={() => deleting(record._id)}
          //       />
          //     </Space>
          //   ),
          // },
        ]}
      />
    </ContainerLayout>
  );
};

export default CountryList;
