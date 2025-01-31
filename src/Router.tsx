import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { CafeCompassCase } from './pages/cases/CafeCompassCase';
import { FlipFlossCase } from './pages/cases/FlipFlossCase';
import { SvRaidsCase } from './pages/cases/SvRaidsCase';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage/>}>
        <Route path="/case/cafe-compass" element={<CafeCompassCase/>}/>
        <Route path="/case/sv-raids" element={<SvRaidsCase/>}/>
        <Route path="/case/flip-floss" element={<FlipFlossCase/>}/>
      </Route>
    ),
  // [
  //   {
  //     path: '/',
  //     element: <HomePage />,
  //   },
  //   {
  //     path: '/case/cafe-compass',
  //     element: <CafeCompassCase />,
  //   },
  //   {
  //     path: '/case/sv-raids',
  //     element: <SvRaidsCase />,
  //   },
  //   {
  //     path: '/case/flip-floss',
  //     element: <FlipFlossCase />,
  //   },
  // ],
  { basename: '/' }
);

export function Router() {
  return <RouterProvider router={router} />;
}
