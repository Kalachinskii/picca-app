import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
    // const jwt = null; - непропустит
    const jwt1 = localStorage.getItem("jwt");
    // перенаправление на авторизацию
    // if (!jwt1) {
    if (0) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};
