import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/NavBar";
import { ProductLogo } from "../components/ProductLogo";

export const Home = () => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="absolute inset-0 flex justify-center items-center  -z-10">
                <div className="w-[500px] h-[500px] bg-gradient-to-br from-[#8B4513]/50 to-orange-400/20 rounded-full blur-[100px]"/>
            </div>
            <div className="overflow-hidden">
                <Navbar />
                <div>
                    <HeroSection />
                    <ProductLogo />
                </div>
            </div>
        </main>
    );
};