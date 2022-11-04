import React, { useState } from 'react';
import TextField from '../ui/inputs/TextField';
import { SimpleInput } from '../ui/inputs/SimpleInput';
import { PrimaryBtn } from '../ui/buttons/PrimaryBtn';
import { AuthForm, BtnGroup } from './AuthForm';

interface ISendPhone {
  setHasPhone: (b: boolean) => void;
}

const SendPhone: React.FC<ISendPhone> = ({ setHasPhone }) => {
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const setInitialState = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setValue('+7 ' + e.target.value);
    }
  };

  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.length < 14 &&
      (e.target.value.slice(-1) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] || e.target.value === '+7 ')
    ) {
      setValue(e.target.value);
      if (e.target.value.length === 13) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
    if (e.target.value.length < 3) {
      setValue('+7 ');
    }
  };

  const getCode = () => {
    if (value.length === 13) {
      setHasPhone(true);
    }
  };

  return (
    <AuthForm onSubmit={(e) => e.preventDefault()}>
      <TextField label={'Номер телефона'} helper={'На этот номер будет отправлен код'}>
        <SimpleInput
          placeholder={'+7 XXX XXX XX XX'}
          value={value}
          onChange={(e) => changePhone(e)}
          onFocus={(e) => setInitialState(e)}
        />
      </TextField>
      <BtnGroup justify={'flex-end'}>
        <PrimaryBtn disabled={isDisabled} onClick={() => getCode()} size={'small'}>
          Получить Код
        </PrimaryBtn>
      </BtnGroup>
    </AuthForm>
  );
};

export default SendPhone;
