import { useState, useEffect } from "react"
import { SidebarToggleOut } from "./icons/SidebarToggleOut"
import { SidebarToggleIn } from "./icons/SidebarToggleIn"
import television from "../assets/television.png"
import { useNavigate } from "react-router-dom";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
};

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState("Home");
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1025px)");
    const isMobile = useMediaQuery("(max-width: 767px)");
    const navigate = useNavigate();
    useEffect(() => {
        if (isMobile) {
            setSidebarOpen(false);
        } else if (isTablet) {
            setSidebarOpen(false);
        } else if (isDesktop) {
            setSidebarOpen(true);
        }
    }, [isMobile, isTablet, isDesktop]);

    const menuItems = [
        {
            name: 'Home',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            name: 'Webinars',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            name: 'Billing',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            )
        },
        {
            name: 'User Management',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            name: 'Settings',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className={`h-screen bg-black-500 transition-all duration-300 ${sidebarOpen ? 'w-96' : 'w-16'}`}>
            <div className='flex items-center p-4 transition-all duration-300'>
                <div
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <SidebarToggleIn className="w-6 h-6" /> : <SidebarToggleOut className="w-6 h-6" />}
                </div>
                {sidebarOpen && (
                    <div className="bg-[#012d59] rounded-xl ml-4 flex items-center p-2">
                        <img
                            src={television}
                            alt="Webinar Logo"
                            width={30}
                            height={40}
                            className="object-contain"
                        />
                        <div className="flex items-baseline ml-1 text-lg pt-0.5 cursor-pointer" onClick={() => navigate("/")}>
                            <div className="text-white">
                                Webinar
                            </div>
                            <div className="text-[#68d5d7]">.gg</div>
                        </div>
                    </div>
                )}
            </div>
            <nav className="flex-1 px-3 py-2">
                <ul className="space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button onClick={() => setActiveItem(item.name)} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${activeItem === item.name
                                    ? 'bg-gray-100 text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                                }`}>
                                <div className={`flex-shrink-0 ${!sidebarOpen ? 'mx-auto' : ''}`}>
                                    {item.icon}
                                </div>
                                {sidebarOpen && (
                                    <span className="font-medium text-sm">
                                        {item.name}
                                    </span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
