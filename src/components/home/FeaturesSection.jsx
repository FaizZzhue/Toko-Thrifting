

export const FeaturesSection = () => {
    const features = [
        {
            icon: "🛍️",
            title: "Find Your Favorite Style",
            description: "Browse our clothing collection and pick the style that suits your vibe."
        },
        {
            icon: "📦",
            title: "Easy Order Process",
            description: "Place your order easily, choose the right size, and set your delivery preferences."
        },
        {
            icon: "🚀",
            title: "Fast Shipping",
            description: "Once confirmed, your order will be quickly processed and shipped to your doorstep."
        },
    ];
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">

            {/* Heading Texts */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">How can we help your problem?</h2>
                <p className="text-gray-600">When you resell clothes, you build trust and increase</p>
            </div>

            {/* Features Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((features, index) => (
                    <div 
                        key={index}
                        className="flex flex-col text-center items-center p-6" 
                    >
                        <div 
                            className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
                            style={{backgroundColor 
                                : index === 0 ? "#F1EFF0" 
                                : index === 1 ? "#FEE7E7"
                                : "#FFF3E4"
                            }}
                        >
                            <div className="text-3xl">{features.icon}</div>
                        </div>

                        <h3 className="text-2xl font-medium mb-3">{features.title}</h3>
                        <p className="text-gray-500 text-center">{features.description}</p>
                    </div>
                ))}
            </div>

            {/* Features Button
            <div className="text-center mt-12">
                <button className="click-button relative">
                    Start Your Shop
                    <div className="absolute -z-10 w-full h-full rounded-full bg-amber-600/50 blur-xl top-0 left-0"></div>
                </button>
            </div> */}
        </section>
    )
}