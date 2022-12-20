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

interface ILine {
  focus: boolean;
}

const Line = styled.div<ILine>`
  display: flex;
  height: ${({ focus }) => (focus ? pxToEm(24, 18) : pxToEm(16, 18))}em;
  width: ${pxToEm(2, 18)}em;
  background: ${colors.brand};
  justify-self: flex-end;
  opacity: ${({ focus }) => (focus ? 1 : 0)};
`;

interface IWrapper {
  focus: boolean;
  color?: string;
  onClick?: () => void;
}

const Wrapper = styled.button<IWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${pxToEm(8, 18)}em 0 ${pxToEm(12, 18)}em;

  width: ${pxToEm(220, 18)}em;
  height: ${pxToEm(48, 18)}em;

  ${({ focus }) => (focus ? getTypography('tabsBold') : getTypography('inputMedium'))}
  color: ${({ color, focus }) => (focus ? colors.brand : color ? color : text_colors.dark_grey)};
  background: transparent;
  border: none;

  &:hover {
    color: ${colors.brand};
  }

  &:hover ${Line} {
    background: ${colors.brand};
    animation: ${appearance} ease-out 0.5s;
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
  focus: boolean;
  onClick?: () => void;
  color?: string;
}

const NavButton: React.FC<INavButton> = ({ name, icon, color, onClick, focus }) => {
  return (
    <Wrapper focus={focus} onClick={onClick} color={color}>
      <Title>
        {icon}
        {name}
      </Title>
      <Line focus={focus} />
    </Wrapper>
  );
};

export default NavButton;
