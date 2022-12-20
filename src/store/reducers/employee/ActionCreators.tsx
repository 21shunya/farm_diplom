import { AppDispatch } from '../../store';
import EmployeeService from '../../../services/EmployeeService';
import { IEmployee, setEmployee, setEmployeeList, setError, setLoading } from './UserSlice';
import { EmployeeRequest, EmployeeResponse, UpdateEmployee } from '../../../models/Employee';
import ColorFlags from '../../../components/ui/colorFlags/colorFlags';

export const fetchEmployees = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await EmployeeService.getUsers();
      const employeeItems = response.data.payload.items;

      let newUserList: IEmployee[] = [];

      employeeItems.reduce((prev: IEmployee[], current): IEmployee[] => {
        if (current.role === 'Courier' || current.role === 'Admin' || current.role === 'SAdmin') {
          newUserList = [
            ...prev,
            {
              id: current.id,
              name: current.name,
              patronymic: current.patronymic,
              surname: current.surname,
              phone: current.phone,
              active: <ColorFlags type={'status'} name={current.active ? 'active' : 'inactive'} />,
              role: <ColorFlags type={'role'} name={current.role} />,
            },
          ];
        }
        return newUserList;
      }, []);

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
    dispatch(setLoading(true));
    const response = await EmployeeService.getUserById(id);
    dispatch(setEmployee({ ...response.data.payload }));
    dispatch(setLoading(false));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};

export const updateEmployee = (data: EmployeeResponse) => async (dispatch: AppDispatch) => {
  try {
    const id = data.id;
    const newData: UpdateEmployee = {
      name: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      role: data.role,
      active: data.active,
    };

    return await EmployeeService.updateUser(id, newData);
  } catch (e) {
    if (e instanceof Error) {
      dispatch(setError(e.message));
    } else {
      console.log('Unexpected error', e);
    }
  }
};
