import { Outlet } from "react-router-dom";
// import Header from "../components/Header";

export default function AuthLayout({ children }) {

    return (
        <div className='h-screen w-full authBackImg bg-[#DC2626] overflow-y-auto'>
            {/* <Header /> */}
            <div className="container sm:px-5">
                <Outlet>
                    {children}
                </Outlet>
            </div>
            {/* <Footer /> */}
        </div>
    );
}