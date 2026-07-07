import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Toaster } from "../reusable/notifications/Notification";

const Layout: React.FC = () => {

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Toaster />
      <aside className="w-64">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 min-w-0">
        <header className="z-10 shadow-sm shadow-slate-200/50">
          <Navbar />
        </header>
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;