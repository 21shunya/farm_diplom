import styled from 'styled-components';
import { getTypography } from '../../../theme/typography';
import { colors, text_colors } from '../../../theme/colors';

export const SimpleInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  border: 2px solid ${colors.grey};
  border-radius: 12px;

  width: 300px;
  height: 56px;

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
