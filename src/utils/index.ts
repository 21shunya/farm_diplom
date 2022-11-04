export const validateAuthInput = (
  targetValue: string,
  initialValue: string,
  maxLength: number,
  setValue: (s: string) => void,
  setIsDisabled: (b: boolean) => void,
) => {
  const typedSymbol = targetValue.slice(-1);
  const typedSymbolIsDigit = isDigit(typedSymbol);

  if (targetValue.length <= 0) {
    setValue(initialValue);
  } else if (targetValue.length <= maxLength && typedSymbolIsDigit) {
    setValue(targetValue);
    setIsDisabled(targetValue.length !== maxLength);
  }
};

const isDigit = (digit: string): boolean => {
  if (digit.trim() === '') {
    return false;
  }

  return [...Array(10).keys()].indexOf(Number(digit)) !== -1;
};
