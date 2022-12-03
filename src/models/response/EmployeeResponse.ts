export interface EmployeeResponse {
  payload: { items: EmployeeRes[] };
}

export interface EmployeeByIdResponse {
  payload: EmployeeRes;
}

export class EmployeeRes {
  public id: string;
  public phone: string;
  public name: string;
  public surname: string;
  public patronymic: string;
  public active: boolean;
  public role: string;
}
