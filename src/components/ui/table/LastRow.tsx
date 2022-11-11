import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { getTypography } from '../../../theme/typography';
import { colors, text_colors } from '../../../theme/colors';
import ArrowRight from '../../../assets/icons/ArrowRight';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import { IconBtn } from '../buttons/IconBtn';

const StyledRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${pxToRem(56)}rem;
  padding: 0 ${pxToRem(10)}rem;
  gap: ${pxToRem(20)}rem;
  flex-grow: 1;
  align-self: stretch;

  ${getTypography('textRegular')};
  color: ${text_colors.dark_grey};
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LastRow: React.FC = () => {
  const offset = 1;
  const limit = 10;
  return (
    <StyledRow>
      <div>
        {offset} - {limit}
      </div>
      <BtnWrapper>
        <IconBtn disabled>
          <ArrowLeft color={colors.grey} />
        </IconBtn>
        <IconBtn>
          <ArrowRight color={colors.dark_grey} />
        </IconBtn>
      </BtnWrapper>
    </StyledRow>
  );
};

export default LastRow;
