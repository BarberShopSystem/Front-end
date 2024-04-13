import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Carregando...</p>} />;
}