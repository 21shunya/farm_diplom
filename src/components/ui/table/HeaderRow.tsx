import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { colors } from '../../../theme/colors';
import React from 'react';
import HeaderCell from './HeaderCell';
import { EmployeeResponse } from '../../../models/Employee';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  height: ${pxToRem(56)}rem;
  padding: 0 0 0 ${pxToRem(50)}rem;
  flex-grow: 1;
  align-self: stretch;
  border-bottom: 1px solid ${colors.grey};
`;

interface IHeaderRow {
  data: { name: keyof EmployeeResponse; title: string }[];
}
const HeaderRow: React.FC<IHeaderRow> = ({ data }) => {
  return (
    <StyledRow>
      {data.map((item, idx) => (
        <HeaderCell key={idx} data={item.title} />
      ))}
    </StyledRow>
  );
};

export default HeaderRow;
