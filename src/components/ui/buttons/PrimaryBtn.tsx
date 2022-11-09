import styled from 'styled-components';
import { getTypography, textTypes } from '../../../theme/typography';
import { colors, text_colors } from '../../../theme/colors';
import { btnSize } from '../../../theme/btnSize';
import { pxToEm } from '../../../utils/Converting';

const fontSize = textTypes.textBold.font_size;

interface IBtn {
  color?: string;
  bg?: string;
  active_bg?: string;
  size: 'small' | 'medium' | 'large';
}

export const PrimaryBtn = styled.button<IBtn>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${pxToEm(8, fontSize)}em;

  background: ${({ bg }) => bg || colors.brand};
  border-radius: 8px;
  border: none;

  ${({ size }) => btnSize[size]}
  ${getTypography('textBold')};

  text-align: center;

  color: ${({ color }) => color || colors.white};
  &:hover {
    filter: drop-shadow(1px 2px 4px rgba(197, 22, 24, 0.35));
  }
  &:active {
    background: ${({ active_bg }) => active_bg || colors.secondary};
  }
  &:disabled {
    background: ${text_colors.grey};
    filter: none;
  }
`;
