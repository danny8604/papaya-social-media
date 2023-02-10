import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "./app/hooks/hooks";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

interface ProtectedRoute {
  children: JSX.Element;
}

function App() {
  const { theme } = useAppSelector((state) => state.theme);
  const isLogin = true;

  useEffect(() => {
    console.log(theme);
    document.documentElement.className = theme;
  }, [theme]);

  const ProtectedRoute = ({ children }: ProtectedRoute) => {
    if (!isLogin) return <Login />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
