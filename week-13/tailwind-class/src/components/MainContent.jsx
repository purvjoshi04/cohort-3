import banner from "../assets/_.jpeg"

export const MainContent = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="h-16 sm:h-40 md:h-48 lg:h-44 xl:h-48 w-full overflow-hidden">
                <img src={banner} alt="banner-profile" className="w-full h-full object-cover" />
            </div>
            {/* Mobile Layout - Stack vertically */}
            <div className="md:hidden space-y-4 p-4">
                <div className="h-64 rounded-2xl bg-green-300 shadow-lg">
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Main Content</h2>
                        <p className="text-gray-700">Your main content goes here.</p>
                    </div>
                </div>
                <div className="h-64 rounded-2xl bg-yellow-200 shadow-lg">
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-800">Right Panel</h3>
                        <p className="text-sm text-gray-600 mt-2">Additional content</p>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px-1024px) */}
            <div className="hidden md:block lg:hidden">
                <div className="mx-4 md:mx-8 mb-4 md:mb-6 -translate-y-10">
                    <div className="h-48 rounded-2xl bg-red-200 shadow-lg">
                        <div className="p-4 md:p-6">
                            <h3 className="text-lg font-semibold text-gray-800">Left Panel</h3>
                            <p className="text-sm text-gray-600 mt-2">This content is now displayed horizontally for better tablet experience</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-4 md:mx-8">
                    <div className="md:col-span-2 min-h-96 rounded-2xl bg-green-300 shadow-lg">
                        <div className="p-4 md:p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Main Content</h2>
                            <p className="text-gray-700">Your main content goes here. This section takes up 2/3 of the width on tablet.</p>
                        </div>
                    </div>

                    <div className="h-96 rounded-2xl bg-yellow-200 shadow-lg">
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800">Right Panel</h3>
                            <p className="text-sm text-gray-600 mt-2">Additional content takes up 1/3 of the width.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout (1024px+) */}
            <div className="hidden lg:block">
                <div className="grid grid-cols-12 gap-8 p-8">
                    <div className="h-85 rounded-2xl bg-red-200 col-span-3 -translate-y-24 shadow-lg">
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800">Left Panel</h3>
                            <p className="text-sm text-gray-600 mt-2">Content here</p>
                        </div>
                    </div>
                    <div className="h-96 rounded-2xl bg-green-300 col-span-6 shadow-lg">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Main Content</h2>
                            <p className="text-gray-700">Your main content goes here. This section will adapt to different screen sizes.</p>
                        </div>
                    </div>
                    <div className="h-96 rounded-2xl bg-yellow-200 col-span-3 shadow-lg">
                        <div className="p-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}