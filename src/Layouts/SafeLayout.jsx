import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

export default function SafeLayout({ children }) {

    return (
        <div className='h-screen w-full authBackImg bg-[#2a2a2a] overflow-y-auto'>
            <AuthHeader />
            <div className="container sm:px-5 mt-5">
                <Outlet>
                    {children}
                </Outlet>
            </div>
        </div>
    );
}