import React, { useState } from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';
import { pxToEm, pxToRem } from '../../../utils/Converting';
import { colors, text_colors } from '../../../theme/colors';
import ArrowRight from '../../../assets/icons/ArrowRight';
import { getTypography } from '../../../theme/typography';
import { OutlineBtn } from '../buttons/OutlineBtn';
import { PrimaryBtn } from '../buttons/PrimaryBtn';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 ${pxToEm(24, 20)}em;
  gap: ${pxToRem(64)}rem;
`;

interface ITitle {
  color?: string;
}

const StyledTitle = styled.button<ITitle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pxToEm(8, 20)}em ${pxToEm(24, 20)}em;
  border-radius: 12px;
  background: transparent;
  border: 1px solid ${colors.grey};
  min-width: ${pxToRem(300)}rem;

  ${getTypography('header2')};
  color: ${({ color }) => color || text_colors.dark_grey};

  &:hover {
    color: ${colors.brand};
    border: 1px solid ${colors.brand};
  }
`;

const rotate90 = keyframes`
  from{
    transform: rotate(0);
  }
  to{transform: rotate(90deg);}
`;

const rotate0 = keyframes`
  from{
    transform: rotate(90deg);
  }
  to{transform: rotate(0);}
`;

interface IIconWrapper {
  animation?: Keyframes;
  rotation: number;
}

const IconWrapper = styled.div<IIconWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ animation }) => animation} ease-in-out 0.3s;
  transform: rotate(${({ rotation }) => rotation}deg);
`;

const open = keyframes`
  from{
    opacity:  0;
  }
  to{opacity: 1}
`;

interface IContentWrapper {
  display: 'none' | 'flex';
}
const ContentWrapper = styled.div<IContentWrapper>`
  display: ${({ display }) => display};
  flex-direction: column;
  gap: ${pxToRem(64)}rem;
  align-self: stretch;
  flex-wrap: wrap;
  animation: ${open} ease-in-out 0.5s;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${pxToRem(16)}rem;
  align-self: flex-end;
`;

interface IAccordion {
  children: JSX.Element;
}
const Accordion: React.FC<IAccordion> = ({ children }) => {
  const [titleColor, setTitleColor] = useState(text_colors.dark_grey);
  const [animation, setAnimation] = useState<{ name: Keyframes; rotation: number }>({
    name: rotate0,
    rotation: 0,
  });
  const [visibility, setVisibility] = useState<{ hidden: boolean; display: 'none' | 'flex' }>({
    hidden: true,
    display: 'none',
  });

  const showInfo = () => {
    if (visibility.hidden) {
      setTitleColor(colors.brand);
      setAnimation({ name: rotate90, rotation: 90 });
      setVisibility({ hidden: false, display: 'flex' });
    } else {
      setTitleColor(text_colors.dark_grey);
      setAnimation({ name: rotate0, rotation: 0 });
      setVisibility({ hidden: true, display: 'none' });
    }
  };

  return (
    <Wrapper>
      <StyledTitle color={titleColor} onClick={() => showInfo()}>
        Address
        <IconWrapper rotation={animation.rotation} animation={animation.name}>
          <ArrowRight color={titleColor} size={42} />
        </IconWrapper>
      </StyledTitle>
      <ContentWrapper display={visibility.display} hidden={visibility.hidden}>
        {children}
        <BtnsWrapper>
          <OutlineBtn size={'medium'}>??????????????</OutlineBtn>
          <PrimaryBtn size={'medium'}>??????????????????</PrimaryBtn>
        </BtnsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Accordion;
