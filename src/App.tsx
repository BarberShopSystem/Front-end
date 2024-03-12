import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
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