import { Outlet, Navigate } from "react-router-dom";

const AuthGuard = () => {
    const token = localStorage?.getItem('token')

    return token ? <Outlet /> : <Navigate to="/" />
};

export default AuthGuard;
