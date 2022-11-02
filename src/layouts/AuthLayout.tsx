import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import img from '../assets/icons/background.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${img});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: clip;
`;

const AuthLayout: React.FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
