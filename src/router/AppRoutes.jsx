import { 
    HeroSection, 
    FeaturesSection, 
    ProductLogo, 
    ProductSection, 
    PurposeSection 
} from "../sections";

const Home = () => {
    return (
        <main>
            <HeroSection />
            <ProductLogo />
            <PurposeSection />
            <FeaturesSection />
            <ProductSection />
        </main>
    );
};

export default Home;