import { AboutSection } from "../components/about/AboutSection";
import { StorySection } from "../components/about/StorySection";
import { VisionSection } from "../components/about/VisionSection";


export const About = () => {
    return (
        <main>
            <div>
                <AboutSection />
                <VisionSection />
                <StorySection />
            </div>
        </main>
    );
};