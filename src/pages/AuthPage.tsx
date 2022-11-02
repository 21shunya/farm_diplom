import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import img from '../assets/logo/logo.svg';
import AuthForm from '../components/auth/AuthForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  width: 500px;
  height: 550px;

  background: ${colors.white};
  box-shadow: 0 2px 40px rgba(80, 80, 80, 0.45);
  border-radius: 16px;
`;

const AuthPage: React.FC = () => {
  return (
    <Wrapper>
      <img src={img} alt={''} />
      <AuthForm />
    </Wrapper>
  );
};

export default AuthPage;
