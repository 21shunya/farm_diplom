import React, { useState } from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';
import { pxToEm, pxToRem } from '../../../utils/Converting';
import { colors, text_colors } from '../../../theme/colors';
import ArrowRight from '../../../assets/icons/ArrowRight';
import { getTypography } from '../../../theme/typography';
import TextField from '../inputs/TextField';
import { SimpleInput } from '../inputs/SimpleInput';
import { OutlineBtn } from '../buttons/OutlineBtn';
import { PrimaryBtn } from '../buttons/PrimaryBtn';
import { Textarea } from '../inputs/Textarea';

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
  background: ${colors.input_hover};
  border-radius: 12px;
  border: none;
  min-width: ${pxToRem(300)}rem;
  border: none;

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

const FieldsWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(48)}rem;
  flex-wrap: wrap;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${pxToRem(16)}rem;
  align-self: flex-end;
`;

const Address: React.FC = () => {
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
        <FieldsWrapper>
          <TextField label={'Регион'}>
            <SimpleInput placeholder={'Дагестан'} disabled />
          </TextField>
          <TextField label={'Город'}>
            <SimpleInput />
          </TextField>
          <TextField label={'Улица'}>
            <SimpleInput />
          </TextField>
          <TextField label={'Дом'}>
            <SimpleInput />
          </TextField>
          <TextField label={'Подъезд'}>
            <SimpleInput />
          </TextField>
          <TextField label={'Этаж'}>
            <SimpleInput />
          </TextField>
          <TextField label={'Квартира'}>
            <SimpleInput />
          </TextField>
          <TextField label={'Комментарий'}>
            <Textarea disabled />
          </TextField>
        </FieldsWrapper>
        <BtnsWrapper>
          <OutlineBtn size={'medium'}>Удалить</OutlineBtn>
          <PrimaryBtn size={'medium'}>Сохранить</PrimaryBtn>
        </BtnsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Address;
