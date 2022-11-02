import React from 'react';
import { PrimaryBtn } from './components/ui/buttons/PrimaryBtn';
import { OutlineBtn } from './components/ui/buttons/OutlineBtn';
import { SimpleInput } from './components/ui/inputs/SimpleInput';
import TextField from './components/ui/inputs/TextField';
import Tabs from './components/ui/buttons/Tabs';

const AuthPage: React.FC = () => {
  return (
    <div>
      Auth Page
      <PrimaryBtn size={'medium'}>Добавить сотрудника!</PrimaryBtn>
      <OutlineBtn size={'medium'}>Назад</OutlineBtn>
      <Tabs>Клиенты</Tabs>
      <SimpleInput placeholder={'enter name'} />
      <TextField label="Login" placeholder="phone number" inputType={'simple'} helper={'Helper'} />
    </div>
  );
};

export default AuthPage;
