import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  token: string | null;
  user: {
    name: string | null;
    email: string | null;
    role_id: string | null;
  };
};

const initialState: InitialStateType = {
  token: null,
  user: {
    name: null,
    email: null,
    role_id: null,
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<InitialStateType>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logOut: (state) => {
      state.token = initialState.token;
      state.user = initialState.user;
      localStorage.removeItem('mctl_token');
    },
  },
});

export const { addUser, logOut } = authSlice.actions;
export default authSlice.reducer;
