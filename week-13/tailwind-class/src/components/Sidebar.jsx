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
    const isDesktop = useMediaQuery("(min-width: 768px)");
    
    useEffect(() => {
        if (isDesktop === false) {
            setSidebarOpen(false)
        } else {
            setSidebarOpen(true)
        }
    }, [isDesktop])

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