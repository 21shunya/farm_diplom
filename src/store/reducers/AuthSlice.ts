import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthSlice {
  phone: string;
  code: string;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: IAuthSlice = {
  phone: '',
  code: '',
  isAuth: false,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updatePhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    updateCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setAuthError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { updateCode, updatePhone } = authSlice.actions;

export default authSlice.reducer;
