import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

export default function SafeLayout({ children }) {

    return (
        <div className='h-screen w-full authBackImg bg-[#2a2a2a] overflow-y-auto'>
            <AuthHeader />
            <div>
                <Outlet>
                    {children}
                </Outlet>
            </div>
        </div>
    );
}