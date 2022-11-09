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
  gap: ${pxToEm(10, fontSize)}em;

  ${getTypography('textBold')};
  color: ${text_colors.dark_grey};
`;

const Divider = styled.div`
  border: 1px solid ${text_colors.grey};
  align-self: stretch;
`;

interface ITableCell {
  data: string | JSX.Element;
}

const HeaderCell: React.FC<ITableCell> = ({ data }) => {
  return (
    <StyledCell>
      <Divider />
      {data}
    </StyledCell>
  );
};

export default HeaderCell;
