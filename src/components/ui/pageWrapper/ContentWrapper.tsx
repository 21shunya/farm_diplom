import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { colors } from '../../../theme/colors';

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-self: stretch;
  flex: 1 1;
  padding: ${pxToRem(24)}rem;
  background: ${colors.white};
  overflow-y: auto;
`;
