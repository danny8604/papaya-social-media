import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";

interface ProtectedRoute {
  children: JSX.Element;
}

function App() {
  const isLogin = true;

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
