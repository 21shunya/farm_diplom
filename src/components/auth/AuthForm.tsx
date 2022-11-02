import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../ui/inputs/TextField';
import { PrimaryBtn } from '../ui/buttons/PrimaryBtn';
import { OutlineBtn } from '../ui/buttons/OutlineBtn';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

interface IBtnGroup {
  justify: string;
}
const BtnGroup = styled.div<IBtnGroup>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  align-self: stretch;
`;

const AuthForm: React.FC = () => {
  const [hasNumber, setHasNumber] = useState(false);
  const navigate = useNavigate();

  const getCode = () => {
    setHasNumber(true);
  };

  const changeNumber = () => {
    setHasNumber(false);
  };

  const sendCode = () => {
    navigate('../employee');
  };

  return hasNumber ? (
    <FormWrapper>
      <TextField
        inputType={'simple'}
        placeholder={'0 0 0 0 0 0'}
        label={'Код'}
        helper={'Повторить отправку'}
      />
      <BtnGroup justify={'space-between'}>
        <OutlineBtn onClick={() => changeNumber()} size={'small'}>
          Назад
        </OutlineBtn>
        <PrimaryBtn onClick={() => sendCode()} size={'small'}>
          Далее
        </PrimaryBtn>
      </BtnGroup>
    </FormWrapper>
  ) : (
    <FormWrapper>
      <TextField
        inputType={'simple'}
        placeholder={'+7 XXX XX XX'}
        label={'Номер телефона'}
        helper={'На этот номер будет отправлен код'}
      />
      <BtnGroup justify={'flex-end'}>
        <PrimaryBtn onClick={() => getCode()} size={'small'}>
          Получить Код
        </PrimaryBtn>
      </BtnGroup>
    </FormWrapper>
  );
};

export default AuthForm;
