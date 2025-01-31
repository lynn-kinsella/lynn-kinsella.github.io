import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CafeCompassCase } from './pages/cases/CafeCompassCase';
import { FlipFlossCase } from './pages/cases/FlipFlossCase';
import { SvRaidsCase } from './pages/cases/SvRaidsCase';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/case/cafe-compass',
      element: <CafeCompassCase />,
    },
    {
      path: '/case/sv-raids',
      element: <SvRaidsCase />,
    },
    {
      path: '/case/flip-floss',
      element: <FlipFlossCase />,
    },
  ],
  { basename: '/' }
);

export function Router() {
  return <RouterProvider router={router} />;
}
