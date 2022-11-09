import React from 'react';
import Table from '../components/ui/table/Table';
import styled from 'styled-components';
import ColorFlags from '../components/ui/colorFlags/colorFlags';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmployeePage: React.FC = () => {
  return (
    <Wrapper>
      Employee page <Table />
      <ColorFlags type={'status'} name={'inactive'} />
      <ColorFlags type={'status'} name={'active'} />
      <ColorFlags type={'role'} name={'admin'} />
    </Wrapper>
  );
};

export default EmployeePage;
