import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

export default Router;
