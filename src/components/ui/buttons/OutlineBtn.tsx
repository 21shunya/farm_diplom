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

export const OutlineBtn = styled.button<IBtn>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${pxToEm(8, fontSize)}em;

  border: 1px solid ${({ bg }) => bg || colors.brand};
  border-radius: 8px;

  background: transparent;

  ${({ size }) => btnSize[size]}
  ${getTypography('textBold')};

  text-align: center;

  color: ${({ bg }) => bg || colors.brand};
  &:hover {
    filter: drop-shadow(1px 2px 4px rgba(197, 22, 24, 0.35));
    border: 1.5px solid ${({ bg }) => bg || colors.brand};
  }
  &:active {
    border: 2px solid ${({ active_bg }) => active_bg || colors.secondary};
    color: ${({ active_bg }) => active_bg || colors.secondary};
  }
  &:disabled {
    background: ${text_colors.grey};
    filter: none;
  }
`;
