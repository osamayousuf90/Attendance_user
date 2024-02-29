import { Outlet } from "react-router-dom";

export default function AuthLayout({ children }) {

    return (
        <div className='h-screen w-full authBackImg bg-[#DC2626] overflow-y-auto'>
            <div className="container sm:px-5">
                <Outlet>
                    {children}
                </Outlet>
            </div>
        </div>
    );
}