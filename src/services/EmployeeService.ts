import api from '../api';
import { AxiosResponse } from 'axios';
import { EmployeeByIdResponse, IEmployeeResponse } from '../models/Employee';

export default class EmployeeService {
  static async getUsers(): Promise<AxiosResponse<IEmployeeResponse>> {
    return api.get<IEmployeeResponse>('/admin/user');
  }

  static async postUser(
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
    role: string,
  ): Promise<AxiosResponse<IEmployeeResponse>> {
    return api.post<IEmployeeResponse>('/admin/employee', {
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

  // static async updateUser();
}
