import { AppDispatch } from '../../store';
import { setAuth, setAuthError, setCode, setPhone } from './AuthSlice';
import AuthService from '../../../services/AuthService';

export const getSms = (phone: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setPhone(phone));
    const response = await AuthService.getSms(phone);
    dispatch(setCode(response.data.payload.code));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setAuthError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};

export const doLogin = (phone: string, code: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await AuthService.login(phone, code);
    localStorage.setItem('token', response.data.payload.accessToken);
    localStorage.setItem('refreshToken', response.data.payload.refreshToken);
    dispatch(setAuth(true));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setAuthError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};

export const doLogout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  dispatch(setAuth(false));
};

export const checkAuth = () => async (dispatch: AppDispatch) => {
  try {
    await AuthService.getProfile();
    dispatch(setAuth(true));
  } catch {
    checkRefresh();
  }
};

const checkRefresh = () => async (dispatch: AppDispatch) => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await AuthService.refresh(refreshToken);
    localStorage.setItem('token', response.data.payload.accessToken);
    localStorage.setItem('refreshToken', response.data.payload.refreshToken);
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setAuthError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};
