import styled from 'styled-components';
import React from 'react';
import { getTypography, textTypes } from '../../../theme/typography';
import { text_colors } from '../../../theme/colors';
import { colorFlags } from '../../../theme/colorFlags';
import activeIcon from '../../../assets/icons/check.svg';
import { pxToEm } from '../../../utils/Converting';

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
  padding: 10px 16px;

  width: ${({ width }) => width};
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
  name: 'courier' | 'admin';
}
type IColorFlags = IStatus | IRole;

const ColorFlags: React.FC<IColorFlags> = ({ type, name }) => {
  let bg = '#FFFFF';
  let icon = activeIcon;

  const { width } = colorFlags[type];

  if (type === 'status') {
    bg = colorFlags.status[name].bg;
    icon = colorFlags.status[name].icon;
  } else {
    bg = colorFlags.role[name].bg;
    icon = colorFlags.role[name].icon;
  }

  return (
    <Wrapper width={width} bg={bg}>
      <img src={icon} alt={''} />
      {name}
    </Wrapper>
  );
};

export default ColorFlags;
