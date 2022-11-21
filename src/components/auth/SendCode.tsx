import React, { useState } from 'react';
import TextField from '../ui/inputs/TextField';
import { OutlineBtn } from '../ui/buttons/OutlineBtn';
import { PrimaryBtn } from '../ui/buttons/PrimaryBtn';
import { AuthForm, BtnGroup } from './AuthForm';
import { useNavigate } from 'react-router-dom';
import CodeInput from '../ui/inputs/CodeInput';
import { validateAuthInput } from '../../utils';

interface ISendCode {
  setHasPhone: (b: boolean) => void;
}

const SendCode: React.FC<ISendCode> = ({ setHasPhone }) => {
  const navigate = useNavigate();
  const initialValue = '';
  const [value, setValue] = useState(initialValue);
  const [isDisabled, setIsDisabled] = useState(true);
  const codeLength = 6;

  const sendCode = () => {
    navigate('../employees');
  };

  const returnToPhone = () => {
    setHasPhone(false);
  };

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAuthInput(e.target.value, initialValue, codeLength, setValue, setIsDisabled);
  };

  return (
    <AuthForm>
      <TextField label={'Код'} helper={'Повторить отправку'}>
        <CodeInput value={value} eventHandler={eventHandler} autoFocus={true} />
      </TextField>
      <BtnGroup justify={'space-between'}>
        <OutlineBtn onClick={() => returnToPhone()} size={'small'}>
          Назад
        </OutlineBtn>
        <PrimaryBtn disabled={isDisabled} onClick={() => sendCode()} size={'small'}>
          Далее
        </PrimaryBtn>
      </BtnGroup>
    </AuthForm>
  );
};

export default SendCode;
