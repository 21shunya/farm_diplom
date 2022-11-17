import styled from 'styled-components';
import { pxToEm } from '../../../utils/Converting';
import { colors, text_colors } from '../../../theme/colors';
import { getTypography } from '../../../theme/typography';

export const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: ${pxToEm(11, 18)} 0;
  border: 2px solid ${colors.grey};
  border-radius: 12px;
  outline: none;

  width: ${pxToEm(300, 18)}em;
  min-height: ${pxToEm(75, 18)}em;

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
  &:disabled {
    border: 2px dashed ${colors.grey};
    background: transparent;
  }
`;
