import styled from 'styled-components';
import { pxToRem } from '../../utils/Converting';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(32)}rem;
`;

interface IBtnGroup {
  justify: string;
}
export const BtnGroup = styled.div<IBtnGroup>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  align-self: stretch;
`;
