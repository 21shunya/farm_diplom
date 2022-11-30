import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, mainRoutes } from '../routes';
import MainLayout from '../layouts/MainLayout';
import { useAppSelector } from '../hooks/redux';
import AuthLayout from '../layouts/AuthLayout';

const AppRouter: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  if (isAuth) {
    return (
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          {mainRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path={'/'} element={<AuthLayout />}>
        {authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
