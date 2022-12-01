export const employeeModel = [
  { name: 'surname', title: 'Фамилия' },
  { name: 'name', title: 'Имя' },
  { name: 'patronymic', title: 'Отчество' },
  { name: 'phone', title: 'Телефон' },
  { name: 'role', title: 'Роль' },
  { name: 'active', title: 'Статус' },
];

export const roleOptions = {
  name: 'Роль',
  options: [
    { name: '', title: 'Все' },
    { name: 'admin', title: 'Админ' },
    { name: 'courier', title: 'Курьер' },
  ],
};

export const statusOptions = {
  name: 'Статус',
  options: [
    {
      name: '',
      title: 'Все',
    },
    {
      name: 'active',
      title: 'Активен',
    },
    {
      name: 'inactive',
      title: 'Неактивен',
    },
  ],
};
