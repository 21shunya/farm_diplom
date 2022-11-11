import React from 'react';

interface IPencil {
  color: string;
}

const Pencil: React.FC<IPencil> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.59999 16.9006V20.4001H7.09951L17.4207 10.0789L13.9212 6.57935L3.59999 16.9006ZM20.127 7.37257C20.491 7.00862 20.491 6.42071 20.127 6.05676L17.9433 3.87306C17.5794 3.50911 16.9915 3.50911 16.6275 3.87306L14.9198 5.58082L18.4193 9.08034L20.127 7.37257Z"
        fill={color || 'white'}
      />
    </svg>
  );
};

export default Pencil;
