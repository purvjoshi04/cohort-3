import { useState } from "react";
import { SidebarIcon } from "../icons/SidebarIcon";
import startImg from "../assets/star.jpg";
import { LockIcon } from "../icons/LockeIcon";

export const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <aside
            className={`h-screen bg-[#323332] font-bold text-white transition-all duration-300 ${open ? "w-64" : "w-16"
                }`}
        >
            <div className="flex items-center justify-between p-4 ml-2">
                {open && <span>My Lists</span>}
                <button onClick={() => setOpen(!open)} className="cursor-pointer">
                    <SidebarIcon />
                </button>
            </div>
            {open && <div className="pl-4 mt-3 text-gray-300 text-sm">Created by me</div>}
            <div className="bg-[#474755] p-3 mt-3 pl-3.5 flex items-center gap-2 rounded-lg mx-2">
                <img src={startImg} alt="star" className="h-5 w-5" />
                {open && <span className="flex-1">Favorite</span>}
                <LockIcon />
            </div>
        </aside>
    );
};