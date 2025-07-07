import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { cn } from "@/lib/utils";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Home", href:"/Hero"},
    { name: "About Us", href:"/About"},
    { name: "Product", href:"/Product"},
    { name: "Contact Us", href:"/Contact"},
];

export const Navbar = () => {
    const [ActiveItems, setActiveItems] = useState("#Hero");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav 
            className={cn(
                "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm z-50 rounded-xl", 
                isScrolled ? "text-primary" : "text-black"
            )}
        >
            <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-1 lg:px-2 md:h-20 h-16"> 
                
                {/* Logo Nav */}    
                <div className="flex items-center gap-1 cursor-pointer">
                    <a href="#Hero" className="items-center">
                        <img 
                            src={logo} 
                            alt="Logo Thrift Heaven"
                            className="h-20 md:h-30 lg:h-30"
                        />
                    </a>
                </div> 

                {/* Mobile Nav */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2"
                >
                    {isMenuOpen ? <HiX className="size-6"/> : <HiMenu className="size-6"/>}
                </button>                

                {/* Dekstop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item, key) => (
                        <NavLink 
                            to={item.href}
                            key={key}  
                            onClick={() => {
                                if (window.location.pathname === item.href) {
                                    window.scrollTo({top: 0, behavior: 'smooth'});
                                }
                                setActiveItems(item.href);
                                setIsMenuOpen(false);
                            }}
                            className={` hover:text-link font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-link after:transition-all
                                ${ActiveItems === item.href 
                                    ? "text-link after:w-full" 
                                    : ""
                                }`
                            }
                        >   
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Button Nav */}
                <button className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full hover:bg-link text-sm font-medium transition-all hover:shadow-[0_0_10px_rgba(234,95,16,0.5)] hover:scale-105 active:scale-95y">
                    <a href=""> Login</a>
                </button>

            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4">
                    <div className="container mx-auto px-4 space-y-4">
                        {navItems.map((item, key) => (
                            <NavLink 
                                key={key}
                                to={item.href}
                                onClick={() => {
                                    if (window.location.pathname === item.href) {
                                        window.scrollTo({top: 0, behavior: 'smooth'});
                                    }
                                    setActiveItems(item.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2 ${ActiveItems === item.href ? "text-link" : ""}`}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <button className="w-full bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-link text-sm font-medium transition-all hover:shadow-[0_0_10px_rgba(234,95,16,0.5)] hover:scale-105 active:scale-95y">
                            <a href=""> Login</a>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};