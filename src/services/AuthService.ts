import api from '../api';
import { AxiosResponse } from 'axios';
import { LoginResponse, GetCodeResponse } from '../models/response/AuthResponse';
import { EmployeeResponse } from '../models/Employee';

export default class AuthService {
  static async getSms(phone: string, needConfirm = true): Promise<AxiosResponse<GetCodeResponse>> {
    return api.post<GetCodeResponse>('/auth/sendsms', { phone, needConfirm });
  }

  static async login(phone: string, code: string): Promise<AxiosResponse<LoginResponse>> {
    return api.post<LoginResponse>('/auth/login', { phone, code });
  }

  static async refresh(refreshToken: string | null): Promise<AxiosResponse<LoginResponse>> {
    return api.post<LoginResponse>('/auth/refresh', { refreshToken });
  }

  static async getProfile(): Promise<AxiosResponse<EmployeeResponse>> {
    return api.get<EmployeeResponse>('/user/profile');
  }
}
