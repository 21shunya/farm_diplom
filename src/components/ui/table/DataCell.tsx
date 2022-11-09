import React from 'react';
import styled from 'styled-components';
import { pxToEm } from '../../../utils/Converting';
import { getTypography, textTypes } from '../../../theme/typography';
import { text_colors } from '../../../theme/colors';

const fontSize = textTypes.textRegular.font_size;

const StyledCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1;
  padding: 0 ${pxToEm(12, fontSize)}em;

  ${getTypography('textRegular')};
  color: ${text_colors.dark_grey};
`;

interface ITableCell {
  data: string | JSX.Element;
}

const DataCell: React.FC<ITableCell> = ({ data }) => {
  return <StyledCell>{data}</StyledCell>;
};

export default DataCell;
