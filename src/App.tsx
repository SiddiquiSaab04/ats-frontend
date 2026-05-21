import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./routers/router";
import "./App.css"
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
