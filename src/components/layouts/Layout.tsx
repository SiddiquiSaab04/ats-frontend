import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import {Toaster} from "../reusable/notifications/Notification";

const Layout: React.FC = () => {

    return (
        <div
            className="flex h-screen overflow-hidden"
            style={{
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Toaster/>
            <aside className="w-64 shrink-0">
                <Sidebar/>
            </aside>
            <div className="flex flex-col flex-1 min-w-0">
                <header className="z-10">
                    <Navbar/>
                </header>
                <main className="flex-1 overflow-y-auto bg-white/20 backdrop-blur-md border-b border-white/15 text-white/90">
                    <div className="mx-auto">
                        <Outlet/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
