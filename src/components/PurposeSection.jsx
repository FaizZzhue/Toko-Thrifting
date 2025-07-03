

export const PurposeSection = () => {
    const purpose = [
        {
            icon: "🟠",
            title: "Built for impact",
            description: "We curate and market trending clothing at affordable prices — for all ages, from kids to adults."
        },
        {
            icon: "🟤",
            title: "In sync with you",
            description: "We adapt to your market's flow and style, aiming to blend in seamlessly for optimal performance."
        }
    ]

    return (
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8" id="About">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    {/* Heading Text */}
                    <div className="">
                        <p className="text-sm text-link font-medium mb-2"> ACHIEVE MORE</p>
                        <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900"> The purpose of the convoy is to market products</h2>
                    </div>
                    {/* Bullet Point */}
                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
                        {purpose.map((purpose, index) => (
                            <div 
                                key={index}
                                className="flex space-x-4"
                            >
                                <div className="w-12 h-12 flex items-center justify-start rounded-lg">{purpose.icon}</div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{purpose.title}</h3>
                                    <p className="text-gray-600">{purpose.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}