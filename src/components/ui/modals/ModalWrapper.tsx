import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';
import { colors } from '../../../theme/colors';
import { getTypography } from '../../../theme/typography';
import { IconBtn } from '../buttons/IconBtn';
import close from '../../../assets/icons/delete.svg';

interface IWrapper {
  visibility: 'hidden' | 'visible';
}

const Wrapper = styled.div<IWrapper>`
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
  visibility: ${({ visibility }) => visibility};
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
  visibility: 'hidden' | 'visible';
  title: string;
  children: JSX.Element;
  setVisibility: Dispatch<SetStateAction<'hidden' | 'visible'>>;
}
const ModalWrapper: React.FC<IModalWrapper> = ({ title, children, visibility, setVisibility }) => {
  return (
    <Wrapper visibility={visibility}>
      <Container>
        <Title>
          {title}
          <IconBtn onClick={() => setVisibility('hidden')}>
            <img src={close} alt={'close'} />
          </IconBtn>
        </Title>
        {children}
      </Container>
    </Wrapper>
  );
};

export default ModalWrapper;
