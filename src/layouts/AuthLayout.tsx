import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div>
      auth layout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
