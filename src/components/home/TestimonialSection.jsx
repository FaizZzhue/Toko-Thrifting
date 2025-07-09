import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const TestimonialSection = () => {

    const testimonialData = [
        {
            id: 1,
            name: 'Primal',
            text: "High-quality products, fast delivery, and friendly service. Totally satisfied shopping here!",
            img: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/avatars/04.png",
        },
        {
            id: 2,
            name: 'Paldy',
            text: "The clothes look exactly like the pictures. Perfect fit and super comfy!",
            img: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/avatars/02.png",
        },
        {
            id: 3,
            name: 'Rani',
            text: "Affordable prices with premium quality! Highly recommended for fashion lovers.",
            img: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/avatars/03.png",
        },
        {
            id: 4,
            name: 'Mojo',
            text: "Been shopping here multiple times and never disappointed. Great service and great items.",
            img: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/avatars/04.png",
        },
        {
            id: 5,
            name: 'Salsa',
            text: "Neatly packed, product matches the description. Thank you, Thrift Heaven!",
            img: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/avatars/05.png",
        },
        {
            id: 6,
            name: 'Munthaha',
            text: "Customer service was very helpful when I entered the wrong address. Super thankful!",
            img: "https://github.com/evilrabbit.png",
        },
        {
            id: 7,
            name: 'Abiyyu',
            text: "So happy to get rare items in great condition. Absolutely love it!",
            img: "https://github.com/leerob.png",
        },
        {
            id: 8,
            name: 'Faiz',
            text: "The website is user-friendly and the checkout process is fast. Impressive!",
            img: "https://github.com/shadcn.png",
        },
        {
            id: 9,
            name: 'Fajri',
            text: "Lots of product variety and always updated. Makes me want to keep shopping!",
            img: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/avatars/01.png",
        },
        {
            id: 10,
            name: 'Idan',
            text: "Highly recommended for anyone into premium quality thrift fashion.",
            img: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/public/avatars/02.png",
        },
    ]

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10 mb-10">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-3xl font-bold mb-4"> 
                        Testimonial
                    </p>
                    <p className=" text-gray-600"> What our customers are saying</p>
                </div>

                {/* Cards */}
                <div className="zoom-in">
                    <Slider {...settings}>
                        {testimonialData.map((data) => (
                            <div className="my-6">
                                <div
                                    key={data.id}
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-first/10 relative"
                                >
                                    <div className="mb-4">
                                        <Avatar>
                                            <AvatarImage 
                                                src={data.img} 
                                                alt={data.name} 
                                                className="rounded-full"
                                            />
                                            <AvatarFallback>{data.name[0]}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="font-text-xs text-gray-500">{data.text}</p>
                                            <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"> ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}