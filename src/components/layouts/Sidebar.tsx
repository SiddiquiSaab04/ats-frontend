import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem } from "./menu/MenuItems";
import { LayoutDashboard } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div
      className="flex flex-col h-full w-full text-white/90 bg-white/50 border-r border-white/15 backdrop-blur-md"
      style={{
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Brand Logo */}
      <div className="flex h-16 items-center px-6 gap-3">
        <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
          <LayoutDashboard className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
          <span className="text-indigo-400">DashBoard</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {MenuItem.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {({ isActive }) => {
              const wrapperClass = isActive
                ? "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group bg-lavender/40 text-indigo-700 shadow-lg shadow-indigo-500/20 border border-indigo-400/30"
                : "flex items-center text-indigo-700 gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-white/10 hover:text-indigo-700";

              const iconClass = isActive
                ? "transition-colors duration-200 text-indigo-700"
                : "transition-colors duration-200 text-indigo-700 group-hover:text-indigo-700";

              return (
                <div className={wrapperClass}>
                  <span className={iconClass}>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            }}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
