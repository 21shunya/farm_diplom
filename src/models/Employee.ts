export class EmployeeRequest {
  public phone: string;
  public name: string;
  public surname: string;
  public patronymic: string;
  public role: string;
}

export class EmployeeResponse extends EmployeeRequest {
  public id: string;
  public active: boolean;
}

export class UpdateEmployee extends EmployeeRequest {
  public active: boolean;
}

export interface IEmployeeResponse {
  payload: { items: EmployeeResponse[] };
}

export interface EmployeeByIdResponse {
  payload: EmployeeResponse;
}
