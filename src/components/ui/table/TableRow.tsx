import React from 'react';
import styled from 'styled-components';
import DataCell from './DataCell';
import { colors } from '../../../theme/colors';
import { pxToRem } from '../../../utils/Converting';
import { IconBtn } from '../buttons/IconBtn';
import Pencil from '../../../assets/icons/Pencil';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  height: ${pxToRem(56)}rem;
  flex-grow: 1;
  align-self: stretch;
  border-bottom: 1px solid ${colors.grey};

  &:hover {
    background: ${colors.input_hover};
  }
`;

interface ITableRow {
  data: (string | JSX.Element)[];
}

const TableRow: React.FC<ITableRow> = ({ data }) => {
  return (
    <StyledRow>
      <IconBtn bg={colors.icon_hover}>
        <Pencil color={colors.dark_grey} />
      </IconBtn>
      {data.map((item, idx) => (
        <DataCell key={idx} data={item} />
      ))}
    </StyledRow>
  );
};

export default TableRow;
