import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);


export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Carregando...</p>} />;
}