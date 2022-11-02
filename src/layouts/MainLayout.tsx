import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import styled from 'styled-components';
import { colors } from '../theme/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${colors.white};
  padding: 0 64px 64px 64px;
`;

const MainLayout: React.FC = () => {
  return (
    <Container>
      <Header isItemPage={false} />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
