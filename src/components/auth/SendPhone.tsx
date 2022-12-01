import React, { useState } from 'react';
import TextField from '../ui/inputs/TextField';
import { SimpleInput } from '../ui/inputs/SimpleInput';
import { PrimaryBtn } from '../ui/buttons/PrimaryBtn';
import { AuthForm, BtnGroup } from './AuthForm';
import { validateAuthInput } from '../../utils';
import { useAppDispatch } from '../../hooks/redux';
import { getSms } from '../../store/reducers/auth/ActionCreators';

interface ISendPhone {
  setHasPhone: (b: boolean) => void;
}

const SendPhone: React.FC<ISendPhone> = ({ setHasPhone }) => {
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const initialValue = '+7 ';
  const phoneLength = 13;

  const setInitialState = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setValue(initialValue);
    }
  };

  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAuthInput(e.target.value, initialValue, phoneLength, setValue, setIsDisabled);
  };

  const getCode = () => {
    if (value.length === phoneLength) {
      const phone = value.slice(3);
      dispatch(getSms(phone));
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
