import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  limit: number;
  skip: number;
  search: string;
}

const initialState: FilterState = {
  limit: 100,
  skip: 0,
  search: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setQuery(state, action: PayloadAction<FilterState>) {
      state.limit = action.payload.limit;
      state.skip = action.payload.skip;
      state.search = action.payload.search;
    },
  },
});

export const { setQuery } = filterSlice.actions;
export default filterSlice.reducer;
