import AuthPage from '../AuthPage';
import EmployeePage from '../EmployeePage';

export const authRoute = { path: '/auth', element: <AuthPage /> };

export const mainRoutes = [{ path: '/employee', element: <EmployeePage /> }];
