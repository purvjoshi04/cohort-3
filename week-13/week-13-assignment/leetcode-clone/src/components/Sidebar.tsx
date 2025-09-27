import { SidebarIcon } from "../icons/SidebarIcon"
import startImg from "../assets/star.jpg"
import { LockIcon } from "../icons/LockeIcon"

export const Sidebar = () => {
    return (
        <div className="h-screen bg-[#323332] w-65 font-bold">
            <div className="flex items-center justify-around">
                <div className="mt-5 mr-10">
                    My Lists
                </div>
                <div className="mt-5">
                    <SidebarIcon />
                </div>
            </div>
            <div className="pl-9 mt-3">
                Create by me
            </div>
            <div className="bg-[#474755] p-3 mt-3 pl-9 flex gap-2">
                <div>
                    <img src={startImg} height={30} width={30}/>
                </div>
                Favorite
                <div className="flex">
                <LockIcon />
                </div>
            </div>
        </div>
    )
}