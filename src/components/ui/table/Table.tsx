import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';
import LastRow from './LastRow';
import HeaderRow from './HeaderRow';
import { EmployeeResponse } from '../../../models/Employee';
import { IEmployee } from '../../../store/reducers/employee/UserSlice';

const StyledTable = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid #dddddd;
  border-radius: 10px;
`;

interface ITable {
  header: { name: keyof EmployeeResponse; title: string }[];
  data: IEmployee[];
}

const Table: React.FC<ITable> = ({ header, data }) => {
  return (
    <StyledTable>
      <HeaderRow data={header} />
      {data.map((row, idx) => (
        <TableRow key={idx} model={header} data={row} />
      ))}
      <LastRow />
    </StyledTable>
  );
};

export default Table;
