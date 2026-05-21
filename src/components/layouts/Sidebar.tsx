import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from './menu/MenuItems';
import { LayoutDashboard } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full bg-slate-900 text-slate-300">
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
            {({ isActive }) => (
              <div
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'hover:bg-slate-800 hover:text-white'
                  }
                `}
              >
                <span
                  className={`
                    transition-colors duration-200
                    ${isActive 
                      ? 'text-white' 
                      : 'text-slate-400 group-hover:text-indigo-400'
                    }
                  `}
                >
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;