import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
