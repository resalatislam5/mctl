import { openModal } from '../../../app/features/modalSlice';
import { useAppDispatch } from '../../../app/hooks/hooks';
import useCheckPermission from '../../../common/hooks/useCheckPermission';
import { useQueryParams } from '../../../common/hooks/useQueryParams';
import AntTable from '../../../common/Table/AntTable';
import { dateAndTimeFormat } from '../../../common/utils/helper.function';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import { useGetHeadListQuery } from '../api/headEndpoints';
import CreateHead from '../components/CreateHead';

const HeadList = () => {
  const { can_create } = useCheckPermission('HEAD');
  const dispatch = useAppDispatch();
  const { query } = useQueryParams();
  const { data, isLoading, isFetching } = useGetHeadListQuery(query);

  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Head',
            content: <CreateHead />,
            open: true,
            width: 500,
          }),
        )
      }
      title='Head List'
      options={{ showButton: can_create }}
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

          { dataIndex: 'name', key: 'name', title: 'Head Name' },
        ]}
      />
    </ContainerLayout>
  );
};

export default HeadList;
