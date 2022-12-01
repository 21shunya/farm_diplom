export interface EmployeeResponse {
  payload: { items: IEmployee[] };
}

export interface IEmployee {
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  id: string;
  active: boolean;
  role: string;
}
