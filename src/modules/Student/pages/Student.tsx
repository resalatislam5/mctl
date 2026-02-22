import { openModal } from '../../../app/features/modalSlice';
import { useAppDispatch } from '../../../app/hooks/hooks';
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
      {/* <AntTable /> */}
      test
    </ContainerLayout>
  );
};

export default Student;
