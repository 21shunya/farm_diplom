import styled, { keyframes } from 'styled-components';
import { getTypography } from '../../../theme/typography';
import { colors } from '../../../theme/colors';
import React from 'react';

const appearance = keyframes`
    0% {
      transform: translateY(-13px);
      opacity: 0;
    } 
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
`;

const Line = styled.div`
  border: 2px solid ${colors.white};
  min-width: 48px;
  opacity: 0;
`;

const StyledDiv = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: none;

  ${getTypography('tabsBold')};
  color: ${colors.white};

  &:hover ${Line} {
    animation: ${appearance} 0.5s ease-out;
    opacity: 1;
  }

  &:focus {
    ${getTypography('tabsExtraBold')};
  }
  &:focus ${Line} {
    align-self: stretch;
    opacity: 1;
  }
`;

interface ITabs {
  children: React.ReactNode;
  onClick?: React.EventHandler<any>;
}

const Tabs: React.FC<ITabs> = ({ children }) => {
  return (
    <StyledDiv>
      <div>{children}</div>
      <Line> </Line>
    </StyledDiv>
  );
};

export default Tabs;
