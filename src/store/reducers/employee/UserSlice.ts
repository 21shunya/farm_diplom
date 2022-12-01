import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEmployee } from '../../../models/response/EmployeeResponse';

interface IEmployeeSlice {
  employeeList: IEmployee[];
  isLoading: boolean;
  error: string;
}

const initialState: IEmployeeSlice = {
  employeeList: [],
  isLoading: false,
  error: '',
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployeeList(state, action: PayloadAction<Array<any>>) {
      state.employeeList = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setEmployeeList, setLoading, setError } = employeeSlice.actions;

export default employeeSlice.reducer;
