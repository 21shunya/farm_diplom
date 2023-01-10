import AuthPage from '../pages/AuthPage';
import EmployeePage from '../pages/employee/EmployeePage';
import EmployeeByIdPage from '../pages/employee/EmployeeByIdPage';
import React, { ReactNode } from 'react';

export const authRoutes = [
  { path: '/auth', element: <AuthPage /> },
  { path: '/', element: <AuthPage /> },
  { path: '*', element: <AuthPage /> },
];

export enum pathEnum {
  clients = '/clients',
  employees = '/employees',
  orders = '/orders',
  calls = '/calls',
  pharmacies = '/pharmacies',
  logos = '/logos',
}

interface IMainRoutes {
  name: string;
  path: string;
  element: ReactNode;
}

export const mainRoutes: IMainRoutes[] = [
  { name: 'Клиенты', path: pathEnum.clients, element: <></> },
  { name: 'Сотрудники', path: pathEnum.employees, element: <EmployeePage /> },
  { name: '', path: `${pathEnum.employees}/:id`, element: <EmployeeByIdPage /> },
  { name: 'Заказы', path: pathEnum.orders, element: <></> },
  { name: 'Звонки', path: pathEnum.calls, element: <></> },
  { name: 'Аптеки', path: pathEnum.pharmacies, element: <></> },
  { name: 'Логотипы', path: pathEnum.logos, element: <></> },
  { name: 'Not Found', path: '*', element: <EmployeePage /> },
];
