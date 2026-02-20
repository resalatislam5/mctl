import { createBrowserRouter } from 'react-router';
import AuthLayout from '../auth/layout/AuthLayout';
import Login from '../auth/pages/Login';
import MainLayout from '../layout/pages/MainLayout';
import { AppRoutes } from './AppRoutes';
import AccessDenied from '../common/ui/AccessDenied';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: AppRoutes.map((item) =>
      item.name === 'DASHBOARD'
        ? item
        : {
            path: item.path,
            element: <AccessDenied />,
            name: item.name,
          },
    ),
  },
  {
    path: '/auth',
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
