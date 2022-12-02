export interface EmployeeResponse {
  payload: { items: IEmployeeRes[] };
}

export interface IEmployeeRes {
  id: string;
  phone: string;
  name: string;
  surname: string;
  patronymic: string;
  active: boolean;
  role: string;
}
