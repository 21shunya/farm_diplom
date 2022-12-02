import React from 'react';
import styled from 'styled-components';
import DataCell from './DataCell';
import { colors } from '../../../theme/colors';
import { pxToRem } from '../../../utils/Converting';
import { IconBtn } from '../buttons/IconBtn';
import Pencil from '../../../assets/icons/Pencil';
import { IEmployeeRes } from '../../../models/response/EmployeeResponse';

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
  model: { name: string; title: string }[];
  data: IEmployeeRes | any;
}

const TableRow: React.FC<ITableRow> = ({ model, data }) => {
  return (
    <StyledRow>
      <IconBtn bg_hover={colors.icon_hover}>
        <Pencil color={colors.dark_grey} />
      </IconBtn>
      {model.map((item, idx) => (
        <DataCell key={idx} data={data[item.name]} />
      ))}
    </StyledRow>
  );
};

export default TableRow;
