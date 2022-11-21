import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { colors } from '../../../theme/colors';
import { getTypography } from '../../../theme/typography';
import { IconBtn } from '../buttons/IconBtn';
import close from '../../../assets/icons/delete.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(48)}rem;
  gap: ${pxToRem(24)}rem;

  background: ${colors.white};
  border-radius: 12px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  ${getTypography('header2')};
  color: ${colors.brand};
`;

interface IModalWrapper {
  children: JSX.Element;
}
const ModalWrapper: React.FC<IModalWrapper> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Title>
          Some Title{' '}
          <IconBtn>
            <img src={close} alt={'close'} />
          </IconBtn>
        </Title>
        {children}
      </Container>
    </Wrapper>
  );
};

export default ModalWrapper;
