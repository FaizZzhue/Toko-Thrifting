

export const HeroSection = () => {

    return (
        <section 
            id="#Hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Temukan Barang impian anda</span>
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center opacity-0 animate-fade-in-delay-1 ">
                        <a href="#Product" className="click-button">
                            Disini
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};