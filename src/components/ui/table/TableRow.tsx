import React from 'react';
import styled from 'styled-components';
import DataCell from './DataCell';
import HeaderCell from './HeaderCell';
import { colors } from '../../../theme/colors';
import { pxToRem } from '../../../utils/Converting';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  height: ${pxToRem(60)}rem;
  padding: 0 0 0 ${pxToRem(60)}rem;
  flex-grow: 1;
  align-self: stretch;
  border-bottom: 1px solid ${colors.grey};
`;

interface ITableRow {
  isHeader: boolean;
  data: (string | JSX.Element)[];
}

const TableRow: React.FC<ITableRow> = ({ isHeader, data }) => {
  return (
    <StyledRow>
      {data.map((item, idx) =>
        isHeader ? <HeaderCell key={idx} data={item} /> : <DataCell key={idx} data={item} />,
      )}
    </StyledRow>
  );
};

export default TableRow;
