import { FeaturesSection } from "../components/home/FeaturesSection";
import { HeroSection } from "../components/home/HeroSection";
import { NewsLatterSection } from "../components/home/NewsLatterSection";
import { ProductLogo } from "../components/home/ProductLogo";
import { ProductSection } from "../components/home/ProductSection";
import { PurposeSection } from "../components/home/PurposeSection";
import { TestimonialSection } from "../components/home/TestimonialSection";

export const Home = () => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#8B4513]/50 to-orange-400/20 rounded-full blur-[100px] -z-10" />
            <div className="overflow-hidden">
                <div>
                    <HeroSection />
                    <ProductLogo />
                    <PurposeSection />
                    <FeaturesSection />
                    <ProductSection />
                    <TestimonialSection />
                    <NewsLatterSection />
                </div>
            </div>
        </main>
    );
};
