import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeRes } from '../../../models/response/EmployeeResponse';

interface IEmployeeSlice {
  employeeList: EmployeeRes[];
  employee: EmployeeRes;
  isLoading: boolean;
  error: string;
}

const initialState: IEmployeeSlice = {
  employeeList: [],
  employee: { id: '', name: '', surname: '', patronymic: '', phone: '', role: '', active: true },
  isLoading: false,
  error: '',
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployeeList(state, action: PayloadAction<EmployeeRes[]>) {
      state.employeeList = action.payload;
    },
    setEmployee(state, action: PayloadAction<EmployeeRes>) {
      state.employee = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setEmployeeList, setLoading, setError, setEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
