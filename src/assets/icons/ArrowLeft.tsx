import React from 'react';

interface IArrowLeft {
  color: string;
  size?: number;
  onClick?: () => void;
}

const ArrowLeft: React.FC<IArrowLeft> = ({ color, size }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 18L15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18Z" fill={color || 'white'} />
    </svg>
  );
};

export default ArrowLeft;
