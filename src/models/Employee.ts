export enum RoleEnum {
  SAdmin = 'SAdmin',
  Admin = 'Admin',
  Courier = 'Courier',
}

export enum StatusEnum {
  active = 'active',
  inactive = 'inactive',
}

export class EmployeeRequest {
  public phone: string;
  public name: string;
  public surname: string;
  public patronymic: string;
  public role: RoleEnum;
}

export class EmployeeResponse extends EmployeeRequest {
  public id: string;
  public active: boolean;
}

export class UpdateEmployee {
  public name: string;
  public surname: string;
  public patronymic: string;
  public role: string;
  public active: boolean;
}

export interface IEmployeeResponse {
  payload: { items: EmployeeResponse[] };
}

export interface EmployeeByIdResponse {
  payload: EmployeeResponse;
}

export interface IUpdateEmployee {
  payload: UpdateEmployee;
}
