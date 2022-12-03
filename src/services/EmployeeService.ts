import api from '../api';
import { AxiosResponse } from 'axios';
import { EmployeeByIdResponse, EmployeeResponse } from '../models/response/EmployeeResponse';

export default class EmployeeService {
  static async getUsers(): Promise<AxiosResponse<EmployeeResponse>> {
    return api.get<EmployeeResponse>('/admin/user');
  }

  static async postUser(
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
    role: string,
  ): Promise<AxiosResponse<EmployeeResponse>> {
    return api.post<EmployeeResponse>('/admin/employee', {
      name,
      surname,
      patronymic,
      phone,
      role,
    });
  }

  static async getUserById(id: string): Promise<AxiosResponse<EmployeeByIdResponse>> {
    return api.get<EmployeeByIdResponse>(`/admin/user/${id}`);
  }
}
