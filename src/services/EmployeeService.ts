import api from '../api';
import { AxiosResponse } from 'axios';
import { EmployeeResponse } from '../models/response/EmployeeResponse';

export default class EmployeeService {
  static async getUsers(): Promise<AxiosResponse<EmployeeResponse>> {
    return api.get<EmployeeResponse>('/admin/user', {});
  }
}
