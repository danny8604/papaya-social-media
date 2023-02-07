import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "./app/hooks/hooks";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";

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
          path: "test",
          element: <div>te123123st</div>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <div>register</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
