import React, { useState } from 'react';
import { SimpleInput } from './SimpleInput';
import styled, { keyframes } from 'styled-components';
import { pxToEm } from '../../../utils/Converting';
import { getTypography } from '../../../theme/typography';
import { colors } from '../../../theme/colors';
import ArrowDown from '../../../assets/icons/ArrowDown';

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  max-height: ${pxToEm(56, 18)}em;
  ${getTypography('inputMedium')};
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

interface IIconWrapper {
  animation: string;
  rotation: number;
}

const IconWrapper = styled.div<IIconWrapper>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${pxToEm(12, 18)}em;
  animation: ${({ animation }) => animation};
  transform: rotate(${({ rotation }) => rotation}deg);

  // &:hover {
  //   animation: ${rotate} linear 0.5s;
  //   transform: rotate(180deg);
  // }

  &:active {
    animation: ${rotate} linear 0.5s;
    transform: rotate(180deg);
  }
`;

interface IOptions {
  display: string;
}

const OptionsWrapper = styled.div<IOptions>`
  display: ${({ display }) => display};
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  flex-wrap: wrap;

  padding: ${pxToEm(16, 18)}em 0;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  background: ${colors.white};
`;

const Option = styled.button`
  display: flex;
  padding: ${pxToEm(16, 18)}em ${pxToEm(12, 18)}em;
  align-self: stretch;
  background: transparent;
  border: none;
  z-index: 5;

  ${getTypography('inputMedium')};

  &:hover {
    background: ${colors.input_hover};
  }
  &:active {
    background: ${colors.grey};
  }
`;

interface ISelect {
  placeholder?: string;
  options: string[];
  eventHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select: React.FC<ISelect> = ({ placeholder, options }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [display, setDisplay] = useState('none');
  const [animation, setAnimation] = useState('');
  const [rotation, setRotation] = useState(0);
  const [value, setValue] = useState('');

  const changeVisibility = () => {
    if (isHidden) {
      setIsHidden(false);
      setDisplay('flex');
      setAnimation('${rotate} linear 0.5s');
      setRotation(180);
    } else {
      setIsHidden(true);
      setDisplay('none');
      setAnimation('');
      setRotation(0);
    }
  };

  const makeHidden = (option: string) => {
    setValue(option);
    setIsHidden(true);
    setDisplay('none');
  };

  return (
    <SelectWrapper>
      <SimpleInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={() => changeVisibility()}
      />
      <IconWrapper rotation={rotation} animation={animation} onClick={() => changeVisibility()}>
        <ArrowDown color={colors.dark_grey} />
      </IconWrapper>
      <OptionsWrapper hidden={isHidden} display={display}>
        {options.map((item) => (
          <Option key={item} onClick={() => makeHidden(item)}>
            {item}
          </Option>
        ))}
      </OptionsWrapper>
    </SelectWrapper>
  );
};

export default Select;
