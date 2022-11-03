import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { getTypography } from '../../../theme/typography';
import { text_colors } from '../../../theme/colors';

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 0 12px 8px;

  ${getTypography('label')}
  color: ${text_colors.dark_grey}
`;

const HelperText = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4px 12px 0;
  align-self: stretch;

  ${getTypography('caption')}
  color: ${text_colors.grey}
`;

interface ITextField {
  label?: string;
  helper?: string;
  children: ReactElement;
}

const TextField: React.FC<ITextField> = ({ children, label, helper }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      {children}
      <HelperText>{helper}</HelperText>
    </FieldContainer>
  );
};

export default TextField;
