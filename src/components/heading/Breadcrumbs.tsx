import React from 'react';
import styled from 'styled-components';
import { getTypography } from '../../theme/typography';
import { text_colors } from '../../theme/colors';
import { pxToEm } from '../../utils/Converting';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToEm(6, 30)}em;

  ${getTypography('header1')};
  color: ${text_colors.dark_grey};
`;

const Text = styled.div`
  display: flex;
  ${getTypography('inputMedium')};
  color: ${text_colors.grey};
`;

interface IBreadcrumbs {
  title: string;
  breadcrumbs: string;
}

const Breadcrumbs: React.FC<IBreadcrumbs> = ({ breadcrumbs, title }) => {
  return (
    <Wrapper>
      {title}
      <Text>{breadcrumbs}</Text>
    </Wrapper>
  );
};

export default Breadcrumbs;
