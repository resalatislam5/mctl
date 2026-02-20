import { openModal } from '../../../app/features/modalSlice';
import { useAppDispatch } from '../../../app/hooks/hooks';
import AntTable from '../../../common/Table/AntTable';
import ContainerLayout from '../../../layout/components/ContainerLayout';
import CreateStudent from '../components/CreateStudent';

const Student = () => {
  const dispatch = useAppDispatch();
  return (
    <ContainerLayout
      onClick={() =>
        dispatch(
          openModal({
            title: 'Create Student',
            content: <CreateStudent />,
            open: true,
            width: 600,
          }),
        )
      }
      title='Student List'
    >
      <AntTable />
    </ContainerLayout>
  );
};

export default Student;
