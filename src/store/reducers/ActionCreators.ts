import { AppDispatch } from '../store';
import { authSlice } from './AuthSlice';
import AuthService from '../../services/AuthService';

export const getSms = (phone: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.updatePhone(phone));
    const response = await AuthService.getSms(phone);
    console.log(response.data);
  } catch (e) {
    if (e instanceof Error) {
      dispatch(authSlice.actions.setAuthError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};
