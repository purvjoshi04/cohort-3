import { useState, useEffect } from "react"
import { SidebarToggleOut } from "./icons/SidebarToggleOut"
import { SidebarToggleIn } from "./icons/SidebarToggleIn"

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change" ,listener);
        return () => media.removeEventListener("change" ,listener);
    }, [matches, query]);

    return matches;
};

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1025px)");
    const isMobile = useMediaQuery("(max-width: 767px)");
    
    useEffect(() => {
        if (isMobile) {
            setSidebarOpen(false);
        } else if (isTablet) {
            setSidebarOpen(false);
        } else if (isDesktop) {
            setSidebarOpen(true);
        }
    }, [isMobile, isTablet, isDesktop]);

    return (
        <div className={`h-screen bg-black-500 transition-all duration-300 ${sidebarOpen ? 'w-96' : 'w-16'}`}>
            <div className="cursor-pointer pl-1 p-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <SidebarToggleOut className="w-6 h-6" /> : <SidebarToggleIn className="w-6 h-6" />}
            </div>
            {sidebarOpen && (
                <div className="p-4 text-gray-800">
                    <h2>Sidebar Content</h2>
                    <p>Your sidebar content goes here</p>
                </div>
            )}
        </div>
    )
}