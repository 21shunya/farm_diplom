import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { colors } from '../../../theme/colors';

interface IContentWrapper {
  gap?: number;
  flex_dir: 'column' | 'row';
  flex_wrap: 'wrap' | 'nowrap';
}
export const ContentWrapper = styled.div<IContentWrapper>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ flex_dir }) => flex_dir};
  flex-wrap: ${({ flex_wrap }) => flex_wrap};
  gap: ${({ gap }) => (gap ? pxToRem(gap) : 0)}rem;
  border-radius: 20px;
  align-self: stretch;
  flex: 1 1;
  padding: ${pxToRem(24)}rem;
  background: ${colors.white};
  overflow-y: auto;
`;
