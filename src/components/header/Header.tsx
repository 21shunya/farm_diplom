import React from 'react';
import styled from 'styled-components';
import img from '../../assets/logo/logo_white.svg';
import NavBar from './NavBar';
import { colors } from '../../theme/colors';
import { pxToRem } from '../../utils/Converting';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: ${pxToRem(24)}rem ${pxToRem(48)}rem;
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
