import { AppDispatch } from '../../store';
import EmployeeService from '../../../services/EmployeeService';
import { setEmployee, setEmployeeList, setError } from './UserSlice';
import { EmployeeRequest } from '../../../models/Employee';

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
