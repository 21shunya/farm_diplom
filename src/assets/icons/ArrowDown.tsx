import React from 'react';

interface IArrowDown {
  color: string;
  size?: number;
  onClick?: () => void;
}

const ArrowDown: React.FC<IArrowDown> = ({ color, size }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.705 9.70492L16.295 8.29492L11.705 12.8749L7.11502 8.29492L5.70502 9.70492L11.705 15.7049L17.705 9.70492Z"
        fill={color || 'white'}
      />
    </svg>
  );
};

export default ArrowDown;
