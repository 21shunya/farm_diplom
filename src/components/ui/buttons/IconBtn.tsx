import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';

export const IconBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100px;
  background: transparent;

  width: ${pxToRem(50)}rem;
  height: ${pxToRem(50)}rem;

  &:hover {
    background: #ffe0e0;
  }

  &:disabled {
    background: transparent;
  }
`;
