


export const StorySection = () => {
    return (
        <section className="w-full h-screen py-110 px-4 sm:px-6 md:px-8 flex items-center">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
                    <div>
                        <h3 className="text-3xl font-medium">Your Style. Delivered.</h3>
                        <p className="text-lg opacity-70"> Discover clothing that suits your personality. We provide curated styles that match your needs and help you look great every day—effortlessly.</p>
                    </div>
                    <div className="text-center">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                            <div className="w-full bg-[#fff8f1] px-6 py-4 rounded-md shadow-md border border-[#f4e8d4] transition-all duration-300 hover:shadow-[0_0_10px_rgba(234,95,16,0.5)] hover:scale-105 active:scale-95">
                                <h3 className="text-lg font-medium text-[#6B4226] border-b">What We Stand For</h3>
                                <p className="text-lg opacity-70">Our mission is to make fashion simple and personal. We combine expert style picks with tech to help you find clothes you truly love.</p>
                            </div>
                            <div className="w-full bg-[#fff8f1] px-6 py-4 rounded-md shadow-md border border-[#f4e8d4] transition-all duration-300 hover:shadow-[0_0_10px_rgba(234,95,16,0.5)] hover:scale-105 active:scale-95">
                                <h3 className="text-lg font-medium text-[#6B4226] border-b">How We Got Here</h3>
                                <p className="text-lg opacity-70"> What started as a passion for styling has grown into a platform that serves thousands of customers. We’re here to connect people with fashion that fits their life.</p>
                            </div>
                        </div>
                        <div className="w-full bg-[#fff8f1] px-6 py-4 rounded-md shadow-md border border-[#f4e8d4] transition-all duration-300 hover:shadow-[0_0_10px_rgba(234,95,16,0.5)] hover:scale-105 active:scale-95 mt-8">
                            <h3 className="text-lg font-medium border-b">Our Stylists</h3>
                            <p className="text-lg opacity-70"> Our team of fashion experts work hard to understand your preferences and recommend items that reflect your unique style. You choose. We deliver.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}