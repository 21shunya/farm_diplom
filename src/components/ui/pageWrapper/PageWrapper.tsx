import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${pxToRem(24)}rem;
  align-self: stretch;
  flex: 1 1;
`;

interface IPageWrapper {
  children: JSX.Element[];
}

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageWrapper;
