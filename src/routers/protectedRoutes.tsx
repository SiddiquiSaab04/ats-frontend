import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { useCurrentUser } from "../hooks/auth/auth";
import { login } from "../features/auth/authSlice";
import type { ProtectedRoutesProps } from "../interfaces/routes";

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const { user } = useSelector((state: RootState) => state.auth);
    const { data: currentUser, isLoading } = useCurrentUser();

    useEffect(() => {
        if (currentUser && !user && token) {
            dispatch(login({
                user: {
                    id: currentUser.id || 0,
                    name: currentUser.name,
                    email: currentUser.email || "",
                    role: currentUser.role || ""
                },
                token: token
            }));
        }
    }, [currentUser, user, token, dispatch]);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // While fetching user profile on fresh reload, show a simple loader
    if (isLoading && !user) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div>Loading user profile...</div>
            </div>
        );
    }

    return children;
};

export default ProtectedRoutes;