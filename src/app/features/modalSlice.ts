import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ModalStateType = {
  open: boolean;
  title: string;
  content: React.ReactNode;
  width?: 500 | 600 | 800 | 1000;
};

const initialState: ModalStateType = {
  open: false,
  title: '',
  content: null,
  width: 500,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalStateType>) => {
      state.open = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.width = action.payload.width || 500;
    },
    closeModal: (state) => {
      state.open = false;
      state.title = '';
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
