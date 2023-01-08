import { roleInfo, statusInfo } from '../models/EmployeeModel';
import { EmployeeResponse, StatusEnum } from '../models/Employee';

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

export const getCurrentRoleName = (user: EmployeeResponse) => {
  const role = roleInfo.options.find((role) => role.name === user.role);
  return role?.title ?? '';
};

export const getCurrentStatusName = (user: EmployeeResponse) => {
  const statusName: StatusEnum = user.active ? StatusEnum.active : StatusEnum.inactive;
  const status = statusInfo.options.find((status) => status.name === statusName);
  return status?.title ?? '';
};
