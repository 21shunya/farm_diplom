import React from 'react';
import { colors } from '../../theme/colors';

interface IIcon {
  color?: string;
}

const FarmIcon: React.FC<IIcon> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 13.6544C22 14.5816 21.2487 15.3336 20.3208 15.3336H15.3336V20.3208C15.3336 21.248 14.5809 22 13.6544 22H10.3456C9.4184 22 8.66645 21.248 8.66645 20.3208V15.3336H3.67852C2.7513 15.3336 2 14.5816 2 13.6544V10.3456C2 9.4184 2.7513 8.6671 3.67852 8.6671H8.66645V3.67918C8.66645 2.75196 9.4184 2 10.3456 2H13.6544C14.5809 2 15.3336 2.75196 15.3336 3.67918V8.6671H20.3208C21.2487 8.6671 22 9.4184 22 10.3456V13.6544Z"
        fill={color || colors.dark_grey}
      />
    </svg>
  );
};

export default FarmIcon;
