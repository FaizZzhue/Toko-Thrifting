import { 
    FaBoxOpen, 
    FaRecycle, 
    FaShoppingCart, 
    FaTshirt, 
    FaUser
} from "react-icons/fa"
import { LuNotebookPen } from "react-icons/lu"



export const StorySection = () => {

    const statistikTable = [
        {
            icon: <FaTshirt />,
            title: "Available Products",
            value: "1500"
        },
        {
            icon: <FaBoxOpen />,
            title: "New Products Incoming",
            value: "10"
        },
        {
            icon: <FaUser />,
            title: "Registered Customers",
            value: "270"
        },
        {
            icon: <LuNotebookPen />,
            title: "Review",
            value: "99"
        },
        {
            icon: <FaRecycle />,
            title: "Thrifted Products",
            value: "80%"
        },
        {
            icon: <FaShoppingCart />,
            title: "Total Sales",
            value: "350"
        },
    ]

    return (
        <section className="relative min-h-screen py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#8B4513]/50 to-orange-400/20 rounded-full blur-[100px] -z-10"/>
                    <div className="overflow-hidden"/> */}
                        <div className="text-center mb-16">
                            <h1 className="text-3xl font-bold mb-4"> Store 
                                <span className="text-link"> Overview</span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {statistikTable.map ((table, index) => (    
                                <div
                                    key={index}
                                    className="flex flex-col text-center items-center p-6"
                                >
                                    <div 
                                        className="group w-74 h-64 mb-6 flex flex-col items-center justify-center gap-3 rounded-sm transition-all duration-300 hover:shadow-white hover:scale-105 active:scale-95"
                                        style={{ backgroundColor
                                            : index === 0 ? "#FFF3E4" 
                                            : index === 1 ? "#FFEBEE"
                                            : index === 2 ? "#F3E5F5"
                                            : index === 3 ? "#F1EFF0" 
                                            : index === 4 ? "#E8F5E9"
                                            : "#E3F2FD"
                                        }}
                                    >
                                        <div className="text-5xl group-hover:animate-bounce transition-all duration-300">{table.icon}</div>
                                        <div className="text-2xl font-bold text-link">{table.value}</div>
                                        <div className="text-lg font-medium opacity-50 group-hover:font-bold group-hover:opacity-100">{table.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
            </div>
        </section>
    )
}