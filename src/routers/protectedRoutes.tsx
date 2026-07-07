import React from "react";
import { Navigate } from "react-router-dom";
import type { ProtectedRoutesProps } from "../interfaces/routes";

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({children}) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoutes;