import { EmployeeResponse, EmployeeRequest, Roles } from './Employee';
import adminIcon from '../assets/icons/admin.svg';
import courierIcon from '../assets/icons/courier.svg';
import activeIcon from '../assets/icons/check.svg';
import inactiveIcon from '../assets/icons/delete.svg';

export const employeeResponseModel: { name: keyof EmployeeResponse; title: string }[] = [
  { name: 'surname', title: 'Фамилия' },
  { name: 'name', title: 'Имя' },
  { name: 'patronymic', title: 'Отчество' },
  { name: 'phone', title: 'Телефон' },
  { name: 'role', title: 'Роль' },
  { name: 'active', title: 'Статус' },
];

export const employeeRequestModel: { name: keyof EmployeeRequest; title: string }[] = [
  { name: 'surname', title: 'Фамилия' },
  { name: 'name', title: 'Имя' },
  { name: 'patronymic', title: 'Отчество' },
  { name: 'phone', title: 'Телефон' },
  { name: 'role', title: 'Роль' },
];

export interface IRoleOptions {
  name: Roles;
  title: string;
  bg: string;
  icon: string;
}

export interface IRoleInfo {
  name: string;
  options: IRoleOptions[];
  width: number;
}

export const roleInfo: IRoleInfo = {
  name: 'Роль',
  options: [
    // { name: '', title: 'Все' },
    { name: 'SAdmin', title: 'САдмин', bg: '#FCF1B5', icon: adminIcon },
    { name: 'Admin', title: 'Админ', bg: '#FCF1B5', icon: adminIcon },
    { name: 'Courier', title: 'Курьер', bg: '#EFDDFA', icon: courierIcon },
  ],
  width: 98,
};

export interface IStatusOptions {
  name: 'active' | 'inactive';
  title: string;
  bg: string;
  icon: string;
}

export interface IStatusInfo {
  name: string;
  options: IStatusOptions[];
  width: number;
}

export const statusInfo: IStatusInfo = {
  name: 'Статус',
  options: [
    // {
    //   name: '',
    //   title: 'Все',
    // },
    {
      name: 'active',
      title: 'Активен',
      bg: '#CBFCD0',
      icon: activeIcon,
    },
    {
      name: 'inactive',
      title: 'Неактивен',
      bg: '#FEC6C6',
      icon: inactiveIcon,
    },
  ],
  width: 118,
};
