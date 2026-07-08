import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProtectedRoutes from "./protectedRoutes";
import Signup from "../pages/Signup";
import Job from "../pages/Job";
import Application from "../pages/Application";
const Router = createBrowserRouter([
  
  {
    path: "/",
    element: <ProtectedRoutes><Layout /></ProtectedRoutes>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "jobs", element: <Job /> },
      {path:"applications",element:<Application/>}
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default Router;
