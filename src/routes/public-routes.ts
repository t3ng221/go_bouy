import { lazy } from 'react';

import { PUBLIC_ROUTES } from './paths';

export const publicRoutes = [
  {
    path: PUBLIC_ROUTES.LOGIN,
    Component: lazy(() => import('@/app/authentication/login')),
  },
  {
    path: PUBLIC_ROUTES.SIGN_UP,
    Component: lazy(() => import('@/app/authentication/signup')),
  },
  {
    path: PUBLIC_ROUTES.Home,
    Component: lazy(() => import('@/app/home')),
  },
];
