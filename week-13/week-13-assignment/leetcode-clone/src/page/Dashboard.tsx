import { Sidebar } from "../components/Sidebar";
import startImg from "../assets/star.jpg";
import { LockIcon } from "../icons/LockeIcon";
import { ChevronDownIcon } from "../icons/ChevronDownICon";
import { PlayIcon } from "../icons/PlayIcon";
import { GitForkIcon } from "../icons/GitForkIcon";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export const Dashboard = () => {
    const total = 19;
    const solved = 19;
    const percentage = (solved / total) * 100;
    return (
        <div className="flex bg-[#1a1a1a] min-h-screen text-white">
            <Sidebar />
            <main className="flex p-18 gap-6 h-185">
                <div className="w-110 bg-[#262626] rounded-xl p-6 shadow-lg">
                    <div className="w-20 mt-1">
                        <img src={startImg} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mt-3">Favorite</h2>
                        <p className="flex mt-4 gap-1 text-md">User · 19 questions · <LockIcon /> Private <ChevronDownIcon /></p>
                    </div>
                    <div className="flex items-center text-sm mt-2 font-semibold text-black gap-3">
                        <button className="flex items-center gap-2 bg-white rounded-3xl px-4 py-2">
                            <PlayIcon />
                            Practice
                        </button>
                        <button className="bg-[#323332] rounded-full p-2 text-white">
                            <GitForkIcon />
                        </button>
                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="font-semibold">
                        Progress
                        <div className="flex gap-2">

                            <div className="bg-[#323332] h-56 w-72 rounded flex items-center justify-center mt-2">
                                <div className="relative w-45">
                                    <CircularProgressbar
                                        value={percentage}
                                        strokeWidth={8}
                                        styles={buildStyles({
                                            pathColor: "#22c55e",
                                            trailColor: "#3a3a3a",
                                            textColor: "transparent",
                                        })}
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                        <div className="flex items-end">
                                            <span className="text-4xl font-bold">{solved}</span>
                                            <span className="text-md font-semibold text-gray-300">/{total}</span>
                                        </div>
                                        <span className="text-green-400 text-sm mt-1">✔ Solved</span>
                                        <span className="text-gray-400 text-xs mt-1">0 Attempting</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#323332] h-19 w-30 mt-2 rounded flex flex-col justify-center items-center">
                                    <span className="text-green-400 font-semibold">Easy</span>
                                    <span className="text-white">11/11</span>
                                </div>

                                <div className="bg-[#323332] h-16.5 w-30 mt-2 rounded flex flex-col justify-center items-center">
                                    <span className="text-yellow-400 font-semibold">Medium</span>
                                    <span className="text-white">7/7</span>
                                </div>

                                <div className="bg-[#323332] h-16.5 w-30 mt-2 rounded flex flex-col justify-center items-center">
                                    <span className="text-red-400 font-semibold">Hard</span>
                                    <span className="text-white">1/1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
