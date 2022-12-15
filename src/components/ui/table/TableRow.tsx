import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import { pxToRem } from '../../../utils/Converting';
import { IconBtn } from '../buttons/IconBtn';
import Pencil from '../../../assets/icons/Pencil';
import { useNavigate } from 'react-router-dom';
import { EmployeeResponse } from '../../../models/Employee';
import { IEmployee } from '../../../store/reducers/employee/UserSlice';
import DataCell from './DataCell';

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
  model: { name: keyof EmployeeResponse; title: string }[];
  data: IEmployee;
}

const TableRow: React.FC<ITableRow> = ({ model, data }) => {
  const navigate = useNavigate();
  return (
    <StyledRow>
      <IconBtn bg_hover={colors.icon_hover} onClick={() => navigate(`./${data.id}`)}>
        <Pencil color={colors.dark_grey} />
      </IconBtn>
      {model.map((item, idx) => (
        <DataCell key={idx} data={data[item.name]} />
      ))}
    </StyledRow>
  );
};

export default TableRow;
