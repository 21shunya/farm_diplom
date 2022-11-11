import styled from 'styled-components';
import { colors, text_colors } from '../../../theme/colors';
import { getTypography, textTypes } from '../../../theme/typography';
import React from 'react';
import { pxToEm } from '../../../utils/Converting';

const fontSize = textTypes.numbers.font_size;

const StyledInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 ${pxToEm(12, fontSize)}em;
  border: 2px solid ${colors.dark_grey};
  border-radius: 12px;
  box-sizing: border-box;

  width: ${pxToEm(300, fontSize)}em;
  height: ${pxToEm(56, fontSize)}em;

  text-align: center;

  ${getTypography('numbers')};

  &:hover {
    background: ${colors.input_hover};
  }
  &:focus {
    border: 2px solid ${colors.dark_grey};
  }
`;

interface ICell {
  color: string;
}

const StyledCell = styled.span<ICell>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  height: 42px;
  border-bottom: 1px solid ${colors.dark_grey};

  color: ${({ color }) => color};
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  background: transparent;
  outline: none;
  border: none;
  box-sizing: border-box;
  opacity: 0;
`;

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  min-height: 56px;
  max-height: 56px;
`;

interface ICodeInput {
  placeholder?: string;
  value: string;
  eventHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus: boolean;
}
const CodeInput: React.FC<ICodeInput> = ({ value, eventHandler, placeholder, autoFocus }) => {
  let numbers: string[] = ['0', '0', '0', '0', '0', '0'];

  if (placeholder) {
    numbers = placeholder.split('');
  }

  return (
    <StyledInput>
      <NumberWrapper>
        {numbers.map((item, idx) =>
          value.split('')[idx] ? (
            <StyledCell color={text_colors.dark_grey} key={idx}>
              {value.split('')[idx]}
            </StyledCell>
          ) : (
            <StyledCell color={text_colors.grey} key={idx}>
              {item}
            </StyledCell>
          ),
        )}
      </NumberWrapper>
      <HiddenInput autoFocus={autoFocus} value={value} onChange={(e) => eventHandler(e)} />
    </StyledInput>
  );
};

export default CodeInput;
