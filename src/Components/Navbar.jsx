import { useState } from "react"
import { GrRefresh } from "react-icons/gr";
import { BsViewList } from "react-icons/bs";export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="m-1 container">
            <div className="flex items-center w-auto mx-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-5 h-5 text-slate-50 mx-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className="mx-2">
                    <img src="/google-keep.png" alt="googlKeepLogo" className="w-14" />
                </div>
                <h1 className="text-slate-200 font-medium text-xl pr-16">
                    Keep
                </h1>

                <div className="flex mx-3 bg-zinc-600 rounded border w-[700px] items-center group focus-within:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="logo"
                        className={`w-6 h-6 m-2 ${isOpen ? "stroke-black" : "stroke-white"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder="Search" onFocus={() => {
                        setIsOpen(true);
                    }}
                        onBlur={() => {
                            setIsOpen(false);
                        }}
                        className="bg-zinc-600 mx-2 w-[600px] text-white focus:outline-none focus:bg-white focus:text-black" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" id="logo" className={`w-6 h-6 m-2 ${isOpen ? "stroke-black" : "stroke-white"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="ml-auto pr-8 flex items-center">
                    <GrRefresh color="white" size="1.4rem"  className="mx-5"/>
                    <BsViewList className="text-white size-5" />
                    <div className="p-4 rounded-full bg-white ml-5 "></div>
                </div>
            </div>
        </nav>
    )
}

