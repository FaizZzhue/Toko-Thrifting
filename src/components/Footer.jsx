import logo from "../assets/Logo.png";

export const Footer = () => {
    const footerItems = [
        {
            name: "Contact Us",
            href: "/Contact",
        },
        {
            name: "Review",
            href: "/Review",
        },
        {
            name: "Product",
            href: "/Product",

        },
        {
            name: "About Us",
            href: "/About",
        }
    ]

    return (
        <footer className="bottom-0 left-0 mt-16">
            <div className="px-8 py-12 lg:py-16 bg-primary">
                <div className="container mx-auto flex w-full flex-col gap-6">
                    <div className="flex flex-col gap-10 text-sm md:gap-20 lg:flex-row"> 
                        <div className="flex flex-col gap-3">
                            <div className="">
                                <img 
                                    src={logo}
                                    alt="Logo Thrift Heaven"
                                    className="h-30 md:h-30 lg:h-30"
                                />
                                <div className="mb-3">
                                    <h1 className="text-link font-bold text-xl">Stay Updated</h1>
                                    <p className="text-lg text-white">Sign up for our newsletter to look updated product</p>
                                </div>
                                <div className="absolute text-gray-500">
                                    <input
                                        type="text"
                                        placeholder="Email Address"
                                        className="w-full pl-5 pr-30 py-2 bg-gray-100 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full  tracking-wide max-lg:justify-between md:flex-row lg:gap-14 xl:gap-28 items-center gap-8">
                            {footerItems.map((items, index) => (
                                <div>
                                    <h1 className="text-link font-bold">{items.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}