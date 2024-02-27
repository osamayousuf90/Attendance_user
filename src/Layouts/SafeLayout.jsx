import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

export default function SafeLayout({ children }) {

    return (
        <div className='h-screen w-full bg-white overflow-auto'>
            <AuthHeader />
            <div className="container sm:px-5 mt-5">
                <Outlet>
                    {children}
                </Outlet>
            </div>
        </div>
    );
}