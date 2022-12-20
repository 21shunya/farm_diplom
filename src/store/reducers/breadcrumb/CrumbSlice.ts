import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICrumbSlice {
  title: string;
}

const initialState: ICrumbSlice = {
  title: '',
};

export const crumbSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = crumbSlice.actions;
export default crumbSlice.reducer;
