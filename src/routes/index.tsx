import AuthPage from '../pages/AuthPage';
import EmployeePage from '../pages/EmployeePage';

export const authRoutes = [
  { path: '/auth', element: <AuthPage /> },
  { path: '*', element: <AuthPage /> },
];

export const mainRoutes = [
  { path: '/employees', element: <EmployeePage /> },
  { path: '*', element: <EmployeePage /> },
];
