import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      main layout <Outlet />
    </div>
  );
};

export default MainLayout;
