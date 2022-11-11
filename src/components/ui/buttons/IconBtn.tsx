import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { colors } from '../../../theme/colors';

interface IIconBtn {
  bg?: string;
}

export const IconBtn = styled.button<IIconBtn>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100px;
  background: transparent;

  width: ${pxToRem(50)}rem;
  height: ${pxToRem(50)}rem;

  &:hover {
    background: ${({ bg }) => bg ?? colors.input_hover};
  }

  &:disabled {
    background: transparent;
  }

  &:active {
    background: ${colors.grey};
  }
`;
