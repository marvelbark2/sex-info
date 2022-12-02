import type { ReactNode } from "react";
import Sidenav from "./partials/SideNav";

function MobileSidenav() {
    return <span>NAVBAR</span>
}



export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-bloody-red">
            <div className="block lg:hidden">
                <div className="fixed w-full h-full bg-black opacity-75 z-10">...</div>
                <nav className="transition fixed h-screen z-20 top-0 overflow-auto  show bg-bloody-red msidenavleft left-0" style={{ zIndex: 9999 }}>
                    <div className="cursor-pointer text-white p-4">
                        <svg className="fill-current inline-block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                    <MobileSidenav />
                </nav>
            </div>

            <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="w-full lg:w-1/12 hidden lg:block">
                    <nav className="fixed w-1/12 h-screen bg-bloody-red" >
                        <Sidenav />
                    </nav>
                </div>

                <div className="w-full lg:w-11/12 rounded-none bg-bodyLight text-black lg:rounded-l-3xl">
                    <div className="inline-block lg:hidden mb-16 cursor-pointer text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512" className="fill-current stroke-current inline-block relative top-left-2"><line x1="80" y1="160" x2="432" y2="160" fill="none" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="32px" /><line x1="80" y1="256" x2="432" y2="256" fill="none" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="32px" /><line x1="80" y1="352" x2="432" y2="352" fill="none" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="32px" /></svg>
                    </div>
                    {children}
                </div >
            </div >
        </div >
    )

}