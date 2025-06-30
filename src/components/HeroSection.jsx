import { useState } from "react";
import { 
    FiSearch, 
    FiX, 
    FiArrowRight,
} from "react-icons/fi";


export const HeroSection = () => {

    const [searchValue, setSearchValue] = useState("");

    return (
        <section 
            id="Hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            {/* <div className="absolute inset-0 bg-[url('/assets/bg-hero.jpg')] bg-cover bg-center brightness-15" /> */}
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Customer 
                            <span className="text-primary"> Showcase </span>  
                        </span>
                    </h1>
                    <div className="container flex items-center gap-2 w-fit px-4 py-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer animate-fade-in group">
                        <span className="text-sm text-primary font-medium">
                            Find your dream item
                        </span>
                        <button className="text-lg text-primary cursor-pointer">
                            <FiArrowRight />
                        </button>
                    </div>

                    <div className="flex gap-3 pt-4 justify-center opacity-0  animate-fade-in-delay-2">
                        <div className="relative w-full max-w-md">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                <FiSearch size={18}/>
                            </span>
                            <input 
                                type="text" 
                                placeholder="Search Product" 
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 bg-gray-100 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                            /> 
                            {searchValue && (
                                <button
                                    onClick={() => setSearchValue("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black focus:outline-none"
                                >
                                    <FiX size={18} />
                                </button>
                            )}
                        </div>

                        <a href="#Product" className="click-button ">
                            →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};