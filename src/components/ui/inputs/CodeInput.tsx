import styled from 'styled-components';
import { colors, text_colors } from '../../../theme/colors';
import { getTypography } from '../../../theme/typography';
import React from 'react';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  border: 2px solid ${colors.grey};
  border-radius: 12px;
  box-sizing: border-box;

  width: 300px;
  height: 56px;

  text-align: center;

  ${getTypography('numbers')};

  &:hover {
    background: ${colors.input_hover};
  }
  // &:focus {
  //   border: 2px solid ${colors.dark_grey};
  // }
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
  min-width: 300px;
  height: 56px;
  background: transparent;
  margin-top: -56px;
  outline: none;
  border: none;
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
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const CodeInput: React.FC<ICodeInput> = ({ value, setValue }) => {
  const numbers = [0, 0, 0, 0, 0, 0];

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.length < 7 &&
      (e.target.value.slice(-1) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] || e.target.value === '')
    ) {
      setValue(e.target.value);
    }
  };

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
      <HiddenInput value={value} onChange={(e) => eventHandler(e)} />
    </StyledInput>
  );
};

export default CodeInput;
