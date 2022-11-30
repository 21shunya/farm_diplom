import React, { useEffect, useState } from 'react';
import TextField from '../ui/inputs/TextField';
import { OutlineBtn } from '../ui/buttons/OutlineBtn';
import { PrimaryBtn } from '../ui/buttons/PrimaryBtn';
import { AuthForm, BtnGroup } from './AuthForm';
import CodeInput from '../ui/inputs/CodeInput';
import { validateAuthInput } from '../../utils';
import { doLogin } from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

interface ISendCode {
  setHasPhone: (b: boolean) => void;
}

const SendCode: React.FC<ISendCode> = ({ setHasPhone }) => {
  const navigate = useNavigate();
  const initialValue = '';
  const { phone, code } = useAppSelector((state) => state.authReducer);
  const [value, setValue] = useState(initialValue);
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const codeLength = 6;

  const sendCode = async () => {
    await dispatch(doLogin(phone, value));
    navigate('../employees');
  };

  const returnToPhone = () => {
    setHasPhone(false);
  };

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAuthInput(e.target.value, initialValue, codeLength, setValue, setIsDisabled);
  };

  useEffect(() => {
    setValue(code);
  }, [code]);

  return (
    <AuthForm onSubmit={(e) => e.preventDefault()}>
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
