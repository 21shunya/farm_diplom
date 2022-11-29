import $api from '../api';
import { AxiosResponse } from 'axios';
import { LoginResponse, GetCodeResponse } from '../models/response/AuthResponse';

export default class AuthService {
  static async getSms(phone: string, needConfirm = true): Promise<AxiosResponse<GetCodeResponse>> {
    const res = $api.post<GetCodeResponse>(
      '/auth/sendsms',
      { phone, needConfirm },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Origin': '*',
          Origin: '*',
        },
      },
    );
    return res;
  }

  static async login(phone: string, code: string): Promise<AxiosResponse<LoginResponse>> {
    return $api.post<LoginResponse>('/auth/login', { phone, code });
  }
}
