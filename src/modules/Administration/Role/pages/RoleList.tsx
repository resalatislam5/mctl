import { openModal } from '../../../../app/features/modalSlice';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import AntTable from '../../../../common/Table/AntTable';
import ContainerLayout from '../../../../layout/components/ContainerLayout';
import CreateRole from '../components/CreateRole';

const RoleList = () => {
  const dispatch = useAppDispatch();
  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Role',
            content: <CreateRole />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Role List'
    >
      <AntTable />
    </ContainerLayout>
  );
};

export default RoleList;
