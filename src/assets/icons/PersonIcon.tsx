import React from 'react';
import { colors } from '../../theme/colors';

interface IIcon {
  color: string;
}

const PersonIcon: React.FC<IIcon> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12.7141C14.7625 12.7141 17 10.4766 17 7.71411C17 4.95161 14.7625 2.71411 12 2.71411C9.2375 2.71411 7 4.95161 7 7.71411C7 10.4766 9.2375 12.7141 12 12.7141ZM12 15.2141C8.6625 15.2141 2 16.8891 2 20.2141V22.7141H22V20.2141C22 16.8891 15.3375 15.2141 12 15.2141Z"
        fill={color || colors.dark_grey}
      />
    </svg>
  );
};

export default PersonIcon;
