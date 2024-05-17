import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
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
      },
      {
        path: "/users",
        element: <Users />,
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
