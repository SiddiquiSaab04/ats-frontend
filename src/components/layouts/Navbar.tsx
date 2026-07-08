import React from "react";
import { User } from "lucide-react";
import { useCurrentUser } from "../../hooks/auth/auth";

const Navbar: React.FC = () => {
  const { data: userProfile } = useCurrentUser();

  let name = userProfile?.name ?? localStorage.getItem("name") ?? "User";
  let role = userProfile?.role ?? localStorage.getItem("role") ?? "Candidate";

  // Keep localStorage updated whenever fresh profile data is available
  if (userProfile?.name) {
    localStorage.setItem("name", userProfile.name);
  }

  if (userProfile?.role) {
    localStorage.setItem("role", userProfile.role);
  }

  return (
    <div className="flex h-16 w-full items-center justify-between px-6 bg-white/20 border-b border-white/15 text-indigo-700 backdrop-blur-md">
      <div className="flex items-center">
        <h1 className="text-lg font-bold tracking-tight">Portal</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 rounded-xl border border-indigo-200/40 bg-white/40 px-4 py-1.5 shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-md shadow-indigo-500/20">
            <User size={18} />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold capitalize">
              {name}
            </span>

            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-500">
              {role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;