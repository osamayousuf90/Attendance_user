import { Outlet, Navigate } from "react-router-dom";

const UserAuthGuard = () => {
    const token = localStorage?.getItem('token')

    return token ? <Navigate to="/attendance" /> : <Outlet />
};

export default UserAuthGuard;
