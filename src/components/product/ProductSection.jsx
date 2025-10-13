

export const ProductSection = () => {
    return(
        <section
            id="Product"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Discover Your Style, 
                            <span className="text-first"> Sustainably  </span>  
                        </span>
                    </h1>
                    <div className="container flex items-center gap-2 w-fit px-4 py-2 animate-fade-in group">
                        <span className="text-lg text-first font-medium hover:text-black">
                            Explore our curated collection of thrift fashion pieces that speak your vibe
                        </span>
                    </div>
                </div>
            </div>
                <button 
                    className="relative bg-first text-white px-6 py-2.5 rounded-lg hover:bg-link text-sm font-medium transition-all hover:shadow-[0_0_10px_rgba(234,95,16,0.5)] hover:scale-105 active:scale-95y"
                >
                    <a href=""> Shop Now</a>
                </button>
        </section>
    )
}