import React from 'react';
import styled from 'styled-components';
import img from '../../assets/logo/logo_white.svg';
import NavBar from './NavBar';
import { colors } from '../../theme/colors';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 24px 48px;
  background: ${colors.brand};
  border-radius: 0 0 16px 16px;
`;

interface INavBar {
  isItemPage: boolean;
}

const Header: React.FC<INavBar> = ({ isItemPage }) => {
  return (
    <Container>
      <img src={img} alt={'logo'} />
      <NavBar isItemPage={isItemPage} />
    </Container>
  );
};

export default Header;
