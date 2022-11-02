import AuthPage from '../pages/AuthPage';
import EmployeePage from '../pages/EmployeePage';

export const authRoute = { path: '/auth', element: <AuthPage /> };

export const mainRoutes = [{ path: '/employee', element: <EmployeePage /> }];
