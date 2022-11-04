import React, { useState } from 'react';
import TextField from '../ui/inputs/TextField';
import { OutlineBtn } from '../ui/buttons/OutlineBtn';
import { PrimaryBtn } from '../ui/buttons/PrimaryBtn';
import { AuthForm, BtnGroup } from './AuthForm';
import { useNavigate } from 'react-router-dom';
import CodeInput from '../ui/inputs/CodeInput';

interface ISendCode {
  setHasPhone: (b: boolean) => void;
}

const SendCode: React.FC<ISendCode> = ({ setHasPhone }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const sendCode = () => {
    navigate('../employee');
  };

  const returnToPhone = () => {
    setHasPhone(false);
  };

  return (
    <AuthForm>
      <TextField label={'Код'} helper={'Повторить отправку'}>
        <CodeInput value={value} setValue={setValue} setIsDisabled={setIsDisabled} />
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
