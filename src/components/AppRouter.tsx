import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoute, mainRoutes } from '../routes';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

const AppRouter: React.FC = () => {
  // const isLogin = true;
  return (
    <Routes>
      <Route path={authRoute.path} element={<AuthLayout />}>
        <Route path={authRoute.path} element={authRoute.element} />
      </Route>
      <Route path={'/'} element={<MainLayout />}>
        {mainRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
