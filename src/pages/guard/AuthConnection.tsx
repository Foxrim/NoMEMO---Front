import { Outlet, Navigate } from "react-router";

export default function AuthConnection() {
    const user = localStorage.getItem('isAuth') === "true";

    return (
        user ? <Outlet/> : <Navigate to="/login" replace/>
    )
}