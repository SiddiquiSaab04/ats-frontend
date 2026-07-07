import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoutes from "./protectedRoutes";

const Router = createBrowserRouter([
  
  {
    path: "/",
    element: <ProtectedRoutes><Layout /></ProtectedRoutes>,
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
