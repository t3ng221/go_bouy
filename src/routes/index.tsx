import { lazy } from 'react';
import { RouteGuard } from 'react-access-boundary-v2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthRedirect from './auth-direct';
import { privateRoutes } from './private-routes';
import { publicRoutes } from './public-routes';
import useAuthStore from '@/stores/useAuthStore';

import AuthenticationLayout from '@/components/Layouts/AuthenticationLayout';
import DashboardLayout from '@/components/Layouts/DashboardLayout';

const NotFound = lazy(() => import('@/app/not-found'));

export const BaseRoutes = () => {
  const isLoggedIn = useAuthStore((state) => state.accessToken !== null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRedirect isLoggedIn={isLoggedIn} />} />

        <Route element={<AuthenticationLayout />}>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        <Route element={<DashboardLayout />}>
          {privateRoutes.map(({ path, Component, permissions }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <RouteGuard permissions={permissions}>
                  <Component />
                </RouteGuard>
              }
            />
          ))}
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
