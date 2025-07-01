import adidas from "../assets/adidas-logo.png";
import asics from "../assets/asics-logo.jpg";
import carhartt from "../assets/Carhartt-Logo.png";
import stussy from "../assets/Logo-Stussy.png";
import nike from "../assets/nike-logo.jpg";
import tnf from "../assets/png-logo.png";
import puma from "../assets/puma-black-logo.png";
import stone from "../assets/stone_island-logo.png";

export const ProductLogo = () => {
    const logos = [adidas, asics, carhartt, stussy, nike, tnf, puma, stone]

    return (
        <div className="w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start">
            <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-primary bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
                Proud partner at <br /> Hubspot & Segment 
            </div>

            {/* Logo Product */}
            <div className="flex animate-marquee whitespace-nowrap">
                {logos.map((logo, index) => (
                    <img 
                        key={index}
                        src={logo} 
                        alt="Company Logo"
                        className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                    />  
                ))}
                {logos.map((logo, index) => (
                    <img
                        key={`duplicate-${index}`}
                        src={logo} 
                        alt="Company Logo"
                        className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                    />  
                ))}
            </div>
        </div>
    )
}