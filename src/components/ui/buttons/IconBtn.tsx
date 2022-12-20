import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { colors } from '../../../theme/colors';

interface IIconBtn {
  bg?: string;
  bg_hover?: string;
}

export const IconBtn = styled.button<IIconBtn>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100px;
  background: ${({ bg }) => bg ?? 'transparent'};
  transition: all 0.4s;

  width: ${pxToRem(50)}rem;
  height: ${pxToRem(50)}rem;

  &:hover {
    background: ${({ bg_hover }) => bg_hover ?? colors.input_hover};
  }

  &:disabled {
    opacity: 0.3;
  }

  &:active {
    background: ${colors.grey};
  }
`;
