import styled from 'styled-components';
import { getTypography } from '../../../theme/typography';
import { colors, text_colors } from '../../../theme/colors';
import { pxToEm } from '../../../utils/Converting';

export const SimpleInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${pxToEm(12, 18)}em;
  border: 2px solid ${colors.grey};
  border-radius: 12px;
  box-sizing: border-box;
  outline: none;

  width: ${pxToEm(300, 18)}em;
  min-height: ${pxToEm(56, 18)}em;

  ${getTypography('inputMedium')};
  color: ${text_colors.dark_grey};

  &:hover {
    background: ${colors.input_hover};
  }
  &:focus {
    border: 2px solid ${colors.dark_grey};
  }
  &::placeholder {
    color: ${text_colors.grey};
  }
`;
