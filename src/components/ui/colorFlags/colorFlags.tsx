import styled from 'styled-components';
import React from 'react';
import { getTypography, textTypes } from '../../../theme/typography';
import { text_colors } from '../../../theme/colors';
import { colorFlags } from '../../../theme/colorFlags';
import { pxToEm } from '../../../utils/Converting';
import { Roles } from '../../../models/Employee';

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
  name: Roles;
}
type IColorFlags = IStatus | IRole;

const ColorFlags: React.FC<IColorFlags> = ({ type, name }) => {
  let bg: string;
  let icon: string;

  const { width } = colorFlags[type];

  if (type === 'status') {
    bg = colorFlags.status[name].bg;
    icon = colorFlags.status[name].icon;
  } else {
    bg = colorFlags.role[name].bg;
    icon = colorFlags.role[name].icon;
  }

  // const bg = colorFlags.role[name].bg;
  // const icon = colorFlags.role[name].icon;
  // const bg = '#FCF1B5';
  // const icon = adminIcon;

  return (
    <Wrapper width={width} bg={bg}>
      <img src={icon} alt={''} />
      {name}
    </Wrapper>
  );
};

export default ColorFlags;
