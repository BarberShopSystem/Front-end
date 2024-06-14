import React, { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Lazy load the pages
const LandingPage = lazy(() => import('./pages/index'));
const AppPage = lazy(() => import('./pages/index'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <AppPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
