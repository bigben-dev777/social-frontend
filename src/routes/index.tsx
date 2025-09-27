import Layout from '@/layouts/Layout';
import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from './AuthRoute';
import UserRoutes from './UserRoute';
import PostRoutes from './PostRoute';
import ErrorBoundary from '@/pages/error';
import ErrorRoutes from './ErrorRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: AuthRoutes
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: UserRoutes
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: PostRoutes
  },
  {
    path: '/',
    element: <Layout />,
    children: ErrorRoutes
  }
]);

export default routes;
