import { Modal } from 'antd';
import { useAppDispatch } from '../../app/hooks/hooks';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { closeModal } from '../../app/features/modalSlice';

const AntModal = () => {
  const dispatch = useAppDispatch();
  const { content, open, title, width } = useSelector(
    (state: RootState) => state.modal,
  );
  return (
    <Modal
      title={title}
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={open}
      onCancel={() => dispatch(closeModal())}
      onOk={() => dispatch(closeModal())}
      footer={null}
      width={width}
      maskClosable
    >
      {content}
    </Modal>
  );
};

export default AntModal;
