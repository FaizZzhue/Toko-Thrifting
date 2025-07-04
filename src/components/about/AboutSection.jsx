import bgAbout from "../../assets/bg-hero.jpg"

export const AboutSection = () => {
    return (
        <section>
            <div className="relative w-full h-screen">
                <img
                    src={bgAbout}
                    alt="Background About"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
                    <h1 className="text-white text-4xl font-bold"> About Thrift Heaven</h1>
                </div>

            </div>
        </section>
    )
}