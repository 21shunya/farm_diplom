import api from '../api';
import { AxiosResponse } from 'axios';
import { EmployeeResponse } from '../models/response/EmployeeResponse';

export default class EmployeeService {
  static async getUsers(): Promise<AxiosResponse<EmployeeResponse>> {
    return api.get<EmployeeResponse>('/admin/user', {});
  }

  static async postUser(
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
    role: string,
  ): Promise<AxiosResponse<EmployeeResponse>> {
    return api.post<EmployeeResponse>(
      '/admin/employee',
      {
        name,
        surname,
        patronymic,
        phone,
        role,
      },
      {},
    );
  }
}
