import { FiFacebook, FiInstagram, FiMap, FiPhone, FiTwitter } from "react-icons/fi";
import logo from "../assets/Logo-preview.png";

export const Footer = () => {
    const footerItems = {
        contact: [
            { name: "FAQ", href: "#"},
            { name: "Email", href: "#"},
            { name: "Support 24", href: "#"},
        ],
        product: [
            { name: "Best Product", href: "#"},
            { name: "Product List", href: "#"},
            { name: "Product price", href: "#"},
        ],
        about: [
            { name: "Vision and Mission", href: "#"},
            { name: "Terms of Use", href: "#"},
            { name: "Privacy Policy", href: "#"},
            { name: "Superiority", href: "#"},
            { name: "Our Story", href: "#"},
        ],
    }

    return (
        <footer id="/Hero" className="bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-4">
                        <img 
                            src={logo}
                            alt="Logo Thrift Heaven"
                            className="h-15 md:h-20 lg:h-15 mb-8"
                        />
                        <div className="mb-5">
                            <h1 className="text-link font-bold text-xl">Stay Updated</h1>
                            <p className="text-lg text-white md:w-3/4">Sign up for our newsletter to get updated product info</p>
                        </div>
                        <button className="click-button bg-link w-1/3 rounded-sm">
                            Login
                        </button>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {Object.entries(footerItems).map(([category, items], categoryIndex) => (
                                <div 
                                    key={category}
                                > 
                                    <h3 className="text-lg text-white font-medium mb-4 uppercase">{category}                                       
                                    </h3>
                                    <ul className="spay-y-3">
                                        {items.map((item, index) => (
                                            <li 
                                                key={index}
                                            >
                                                <a 
                                                    href="#"
                                                    className="text-white/50 hover:text-link"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className="text-white uppercase text-lg font-medium">
                                <h3 className="mb-4">Find Us</h3>
                                <div className="flex gap-7">
                                    <a 
                                        href="https://facebook.com"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <FiFacebook className="text-link text-2xl hover:-translate-y-1 transition-transform duration-300"/>
                                    </a>
                                    <a 
                                        href="https://instagram.com"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <FiInstagram className="text-link text-2xl hover:-translate-y-1 transition-transform duration-300"/>
                                    </a>
                                    <a 
                                        href="https://twitter.com"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <FiTwitter className="text-link text-2xl hover:-translate-y-1 transition-transform duration-300"/>
                                    </a>
                                </div>
                                <div className="mt-8 flex gap-10 pl-5">
                                    <a
                                        href="https://www.google.com/maps"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <FiMap className="text-link text-2xl hover:-translate-y-1 transition-transform duration-300"/>
                                    </a>
                                    <a
                                        href="https://whatsapp.com"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <FiPhone className="text-link text-2xl hover:-translate-y-1 transition-transform duration-300"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-5 pt-3">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm"> &copy; {new Date().getFullYear()} Thrift Heaven. All rights reserved.</p>
                        <p className="text-sm text-white/50">Created by  
                            <span className="text-link"> FaizZzHue</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}