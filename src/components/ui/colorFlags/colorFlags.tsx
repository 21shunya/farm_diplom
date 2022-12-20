import styled from 'styled-components';
import React from 'react';
import { getTypography, textTypes } from '../../../theme/typography';
import { text_colors } from '../../../theme/colors';
import { pxToEm } from '../../../utils/Converting';
import { RoleEnum } from '../../../models/Employee';
import { roleInfo, statusInfo } from '../../../models/EmployeeModel';

const fontSize = textTypes.textRegular.font_size;

interface IWrapper {
  width: number;
  bg: string;
}

const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${pxToEm(10, fontSize)}em;
  border-radius: 57px;
  padding: ${pxToEm(8, fontSize)}em ${pxToEm(16, fontSize)}em;

  width: ${({ width }) => pxToEm(width, fontSize)}em;
  background: ${({ bg }) => bg};

  ${getTypography('textRegular')};
  color: ${text_colors.dark_grey};
`;

interface IStatus {
  type: 'status';
  name: 'active' | 'inactive';
}

interface IRole {
  type: 'role';
  name: RoleEnum;
}
type IColorFlags = IStatus | IRole;

const ColorFlags: React.FC<IColorFlags> = ({ type, name }) => {
  let bg = '';
  let icon = '';
  let title = '';
  let width = 0;

  if (type === 'status') {
    const status = statusInfo.options.find((item) => item.name === name);
    bg = status?.bg ?? '';
    icon = status?.icon ?? '';
    title = status?.title ?? '';
    width = statusInfo.width;
  } else {
    const role = roleInfo.options.find((item) => item.name === name);
    bg = role?.bg ?? '';
    icon = role?.icon ?? '';
    title = role?.title ?? '';
    width = roleInfo.width;
  }

  return (
    <Wrapper width={width} bg={bg}>
      <img src={icon} alt={''} />
      {title}
    </Wrapper>
  );
};

export default ColorFlags;
