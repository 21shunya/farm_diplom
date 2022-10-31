import styled from 'styled-components';
import { getTypography } from '../../theme/typography';
import { colors } from '../../theme/colors';

const typography = getTypography('textBold');

export const PrimaryBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 38px;
  gap: 8px;

  background: ${colors.brand};
  border-radius: 10px;
  border: none;

  ${typography};

  text-align: center;
  letter-spacing: -0.32px;

  color: ${colors.white};
  &:hover {
    filter: drop-shadow(2px 4px 16px rgba(197, 22, 24, 0.35));
  }
  &:active {
    background: ${colors.secondary};
  }
`;
