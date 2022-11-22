import React from 'react';
import styled, { keyframes } from 'styled-components';
import { pxToEm } from '../../utils/Converting';
import { getTypography } from '../../theme/typography';
import { colors, text_colors } from '../../theme/colors';

const appearance = keyframes`
    0% {
      transform: translateX(-30px);
      opacity: 0;
    } 
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
`;

const Line = styled.div`
  display: flex;
  height: ${pxToEm(16, 18)}em;
  width: ${pxToEm(2, 18)}em;
  background: ${colors.brand};
  justify-self: flex-end;
  opacity: 0;
`;

interface IWrapper {
  color?: string;
  onClick?: () => void;
}

const Wrapper = styled.button<IWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${pxToEm(8, 18)}em 0 ${pxToEm(12, 18)}em;

  width: ${pxToEm(240, 18)}em;
  height: ${pxToEm(48, 18)}em;

  ${getTypography('inputMedium')};
  color: ${({ color }) => color || text_colors.dark_grey};
  background: transparent;
  border: none;

  &:hover {
    color: ${colors.brand};
  }
  &:focus {
    color: ${colors.brand};
    ${getTypography('tabsBold')};
  }

  &:hover ${Line} {
    background: ${colors.brand};
    animation: ${appearance} ease-out 0.5s;
    opacity: 1;
  }
  &:focus ${Line} {
    color: ${colors.brand};
    height: ${pxToEm(24, 18)}em;
    opacity: 1;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToEm(12, 18)}em;
`;

interface INavButton {
  name: string;
  icon: JSX.Element;
  onClick?: () => void;
  color?: string;
}

const NavButton: React.FC<INavButton> = ({ name, icon, color, onClick }) => {
  return (
    <Wrapper onClick={onClick} color={color}>
      <Title>
        {icon}
        {name}
      </Title>
      <Line />
    </Wrapper>
  );
};

export default NavButton;
