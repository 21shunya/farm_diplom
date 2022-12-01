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
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setCode(state, action: PayloadAction<string>) {
      state.code = action.payload;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setAuthError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setPhone, setCode, setAuth, setLoading, setAuthError } = authSlice.actions;

export default authSlice.reducer;
