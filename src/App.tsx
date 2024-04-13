import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
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
]);


export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Carregando...</p>} />;
}