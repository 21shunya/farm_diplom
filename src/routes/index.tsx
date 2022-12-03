import AuthPage from '../pages/AuthPage';
import EmployeePage from '../pages/employee/EmployeePage';
import EmployeeByIdPage from '../pages/employee/EmployeeByIdPage';

export const authRoutes = [
  { path: '/auth', element: <AuthPage /> },
  { path: '/', element: <AuthPage /> },
  { path: '*', element: <AuthPage /> },
];

export const mainRoutes = [
  { path: '/employees', element: <EmployeePage /> },
  { path: '/employees/:id', element: <EmployeeByIdPage /> },
  { path: '*', element: <EmployeePage /> },
];
