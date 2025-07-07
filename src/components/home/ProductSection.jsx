import Img1 from "../../assets/product/Shoes.png";
import Img2 from "../../assets/product/Shirt.jpeg";
import Img3 from "../../assets/product/Cap.jpeg";
import Img4 from "../../assets/product/Camo.jpeg";
import Img5 from "../../assets/product/Jacket.png";
import { FiStar } from "react-icons/fi";


export const ProductSection = () => {
    const productData = [
        {
            id: 1,
            img: Img1,
            title: "Nike Jordan",
            rating: 5.0,
            color: "Blue Fragment",
            aosDelay: "0"
        },
        {
            id: 2,
            img: Img2,
            title: "Stussy X Nike",
            rating: 4.0,
            color: "White",
            aosDelay: "200"
        },
        {
            id: 3,
            img: Img3,
            title: "New Era",
            rating: 4.5,
            color: "Black",
            aosDelay: "400"
        },
        {
            id: 4,
            img: Img4,
            title: "Camo Pants",
            rating: 4.6,
            color: "Brown",
            aosDelay: "600"
        },
        {
            id: 5,
            img: Img5,
            title: "Carhartt Jacket",
            rating: 4.8,
            color: "Blue Atlantic",
            aosDelay: "800"
        },
    ];
    return (
        <section className="mt-14 mb-12">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-3xl font-bold mb-4"> 
                        Top Selling 
                        <span className="text-link"> Best </span>
                        <span className="text-primary"> Products</span> 
                    </p>
                    <p className=" text-gray-600"> Best of the best products</p>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {productData.map((product) => (
                        <div
                            key={product.id}
                        >
                            <img
                                src={product.img}
                                alt=""
                                className="h-[200px] w-[200px] object-contain rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.color}</p>
                                <div className="flex items-center gap-1">
                                    <FiStar className="text-yellow-400" />
                                    <span>{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}