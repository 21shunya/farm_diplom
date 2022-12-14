import { AppDispatch } from '../../store';
import EmployeeService from '../../../services/EmployeeService';
import { IEmployee, setEmployee, setEmployeeList, setError } from './UserSlice';
import { EmployeeRequest } from '../../../models/Employee';
import ColorFlags from '../../../components/ui/colorFlags/colorFlags';

export const fetchEmployees = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await EmployeeService.getUsers();
      const responseItems = response.data.payload.items;

      const newUserList: IEmployee[] = responseItems.map((item): IEmployee => {
        return {
          id: item.id,
          name: item.name,
          patronymic: item.patronymic,
          surname: item.surname,
          phone: item.phone,
          active: <ColorFlags type={'status'} name={item.active ? 'active' : 'inactive'} />,
          role: <ColorFlags type={'role'} name={item.role} />,
        };
      });

      dispatch(setEmployeeList(newUserList));
    } catch (e) {
      if (e instanceof Error) {
        dispatch(setError(e.message));
      } else {
        console.log('Unexpected error', e);
      }
    }
  };
};

export const addEmployee = (data: EmployeeRequest) => async (dispatch: AppDispatch) => {
  try {
    await EmployeeService.postUser(data);
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};

export const getEmployeeByID = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await EmployeeService.getUserById(id);
    dispatch(setEmployee({ ...response.data.payload }));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};
