import logo from "../assets/Logo-preview.png";

export const Footer = () => {
    const footerItems = {
        contact: [
            { name: "FAQ", href: "#"},
            { name: "Email", href: "#"},
            { name: "Support 24", href: "#"},
        ],
        review: [
            { name: "Rating", href: "#"},
            { name: "Testimonials", href: "#"},
            { name: "Quick Answer", href: "#"},
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
                        <div className="text-gray-500 md:w-3/4">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="w-full pl-5 pr-30 py-2 bg-gray-100 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                            />
                        </div>
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
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-12 pt-8">
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