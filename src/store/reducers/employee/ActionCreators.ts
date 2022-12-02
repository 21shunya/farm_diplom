import { AppDispatch } from '../../store';
import EmployeeService from '../../../services/EmployeeService';
import { setEmployeeList, setError } from './UserSlice';

export const fetchEmployees = () => async (dispatch: AppDispatch) => {
  try {
    const response = await EmployeeService.getUsers();
    dispatch(setEmployeeList(response.data.payload.items));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};

export const addEmployee =
  (name: string, surname: string, patronymic: string, phone: string, role: string) =>
  async (dispatch: AppDispatch) => {
    try {
      await EmployeeService.postUser(name, surname, patronymic, phone, role);
    } catch (e) {
      if (e instanceof Error) {
        dispatch(setError(e.message));
      } else {
        console.log('Unexpected error', e);
      }
    }
  };
