import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as socialMediaLoader } from "./pages/Home";
import Users from "./pages/Users";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: socialMediaLoader,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
