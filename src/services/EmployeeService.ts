import api from '../api';
import { AxiosResponse } from 'axios';
import {
  EmployeeByIdResponse,
  EmployeeRequest,
  IEmployeeResponse,
  UpdateEmployee,
} from '../models/Employee';

export default class EmployeeService {
  static async getUsers(): Promise<AxiosResponse<IEmployeeResponse>> {
    return api.get<IEmployeeResponse>('/admin/user');
  }

  static async postUser(data: EmployeeRequest): Promise<AxiosResponse<IEmployeeResponse>> {
    return api.post<IEmployeeResponse>('/admin/employee', data);
  }

  static async getUserById(id: string): Promise<AxiosResponse<EmployeeByIdResponse>> {
    return api.get<EmployeeByIdResponse>(`/admin/user/${id}`);
  }

  static async updateUser(
    id: string,
    data: UpdateEmployee,
  ): Promise<AxiosResponse<IEmployeeResponse>> {
    return api.put<IEmployeeResponse>(`/admin/user${id}`, data);
  }
}
