import { BiChevronLeft, BiChevronRight } from "react-icons/bi";


const Testimonials = () => {

    const testimonials = [
        {
            name: "Sarah Jenkins",
            img: "https://i.pravatar.cc/40?img=1",
            text: `"The customization tool was so intuitive. I created a gift for my parents and the print quality was even better than expected."`
        },
        {
            name: "David Miller",
            img: "https://i.pravatar.cc/40?img=2",
            text: `"I bought a custom phone case and I've received so many compliments. The fit is perfect and the colors are very vibrant."`
        },
        {
            name: "Elena Rodriguez",
            img: "https://i.pravatar.cc/40?img=3",
            text: `"The shipping was incredibly fast. I was worried it wouldn't arrive in time for my anniversary, but it came 2 days early!"`
        }
    ];

    return (

        <section className="py-6">

            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        What Our Customers Say
                    </h2>

                    
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-xl p-5"
                        >

                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-8 h-8 rounded-full"
                                />

                                <h4 className="text-sm font-semibold text-gray-800">
                                    {item.name}
                                </h4>
                            </div>

                            <p className="text-xs text-gray-600 leading-relaxed italic">
                                {item.text}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Testimonials