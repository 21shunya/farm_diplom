import React from 'react';
import styled from 'styled-components';
import Address from '../components/ui/accordions/Address';
import { Textarea } from '../components/ui/inputs/Textarea';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmployeePage: React.FC = () => {
  return (
    <Wrapper>
      {/*<Address />*/}
      {/*<Address />*/}
      <Address />
      <Textarea />
      {/*<ModalWrapper>*/}
      {/*  <CreateEmployee />*/}
      {/*</ModalWrapper>*/}
    </Wrapper>
  );
};

export default EmployeePage;
