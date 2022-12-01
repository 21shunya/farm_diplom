import { AppDispatch } from '../../store';
import EmployeeService from '../../../services/EmployeeService';
import { setEmployeeList, setError } from './UserSlice';

export const fetchEmployees = () => async (dispatch: AppDispatch) => {
  try {
    const response = await EmployeeService.getUsers();
    setEmployeeList(response.data.payload.items);
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};
