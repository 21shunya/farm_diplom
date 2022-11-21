import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import Sidebar from '../components/sidebar/Sidebar';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${colors.input_hover};
`;

const MainLayout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
