import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as socialMediaLoader } from "./pages/Home";
import Users, { loader as usersLoader } from "./pages/Users";
import Products from "./pages/Products";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";

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
        loader: usersLoader,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
