import { FiArrowRight } from "react-icons/fi"


export const NewsLatterSection = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-link rounded-2xl overflow-hidden">
                <div className="relative md:px-16 py-16 px-6 md:py-16 ">

                    {/* Gradient BG */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-first clip-path-slant hidden md:block" />

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left Content */}
                        <div className="text-white max-w-lg text-center md:text-left">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"> Get Notified About New Products</h3>
                            <p className="text-sm sm:text-base"> Best clothes and best delivery guys all at your service.</p>
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                            <input 
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
                            />
                            <button className="w-full sm:w-auto cursor-pointer bg-[#F4A261] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2">
                                <span >Discover</span>
                                <FiArrowRight className="size-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {
                    `.clip-path-slant {
                        clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)
                    }`
                }
            </style>
        </section> 
    )
}