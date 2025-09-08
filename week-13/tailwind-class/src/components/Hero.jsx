import { MainContent } from "./MainContent"
import { Sidebar } from "./Sidebar"

export const Hero = () => {
    return (
        <div className="flex">
            <Sidebar />
            <MainContent />
        </div>
    )
}