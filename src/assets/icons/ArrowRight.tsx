import React from 'react';

interface IArrowRight {
  color: string;
  size?: number;
  onClick?: () => void;
}

const ArrowRight: React.FC<IArrowRight> = ({ color, size }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.41 6L8 7.41L12.58 12L8 16.59L9.41 18L15.41 12L9.41 6Z" fill={color || 'white'} />
    </svg>
  );
};

export default ArrowRight;
