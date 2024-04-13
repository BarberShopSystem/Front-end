import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";

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
]);


export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Carregando...</p>} />;
}