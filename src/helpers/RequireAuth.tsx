import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
    // const jwt = null; - непропустит
    // const jwt1 = localStorage.getItem("jwt");

    // берём инфу с слайса
    // useSelector - конкретный ограниченный запрос к данным
    const jwt = useSelector((s: RootState) => s.user.jwt);
    // перенаправление на авторизацию
    // if (!jwt) {
    if (0) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
};
