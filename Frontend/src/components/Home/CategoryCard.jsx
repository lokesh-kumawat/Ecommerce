import { Link } from "react-router-dom";


const CategoryCard = () => {
    const categories = [

        {
            title: "Photo Frame",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvUy-CWw8ilM9gygSWaweHYfuDG14hzVYjBElWBWTBOmT_ZzFEkvWTwEWRcaEllwvOzvvirxgJdAeCs6p-xocj07qJ4VqhbSROHfjlp3VQOkAAXDIRM2tHIBs2U_z4zgE1JcTWIinjptYH6b-R8OiqJubWAVxPKLOfcOw0Q-BcNAjZfYNjneEmL2eCpRD6bZw3biC8Frn5rgxDOtoxpEEBUvzDPf16egMI_gCD-Vftz9DQt1Il9tz0iYoJXaTWoAn0EgR34s9JvJTE"
        },
        {
            title: "T-Shirt",
            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        },
        {
            title: "Photo Covers",
            img: "https://images.unsplash.com/photo-1601593346740-925612772716"
        },
        {
            title: "Wall Art",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxB-NsTHY8avjpELsVNe32IuaRK8aNCZjik0GeAUooIwBM1eflFyxH0RxrxnZNorfH-IIImG64dwPO4UznVZMtbTmH1n6JnhCs8R9UkHWReuKNXPfWmjwgLwi71Oeak5p3LWJnXqp51uN7v3Ya1zxtfhKyGHpUGj7USVWplGK6NNDwzK76r6ixcpQ74k2bFv2zGoZ57xkh4mQTjmAHxE_4E8pRDB0l5owPPDyJglFdUes1J032jrXHlhQstKIsDzHlOcixAgxAfr97"
        }

    ];

    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">

                    <div>
                        <h2 className="text-2xl font-bold">Shop by Category</h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Discover our range of customizable categories.
                        </p>
                    </div>

                    <Link to="/shop" className="text-purple-600 text-sm font-medium hover:underline">
                        View All →
                    </Link >

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
                        >

                            {/* Image */}
                            <div className="h-40 overflow-hidden bg-gray-50 flex items-center justify-center">
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-2 flex flex-col flex-grow text-center">

                                <h3 className="font-semibold mb-1">
                                    {cat.title}
                                </h3>

                                <Link
                                    to="/shop"
                                    className="mt-auto text-purple-600 text-sm font-medium bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition"
                                >
                                    Customize Now
                                </Link>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CategoryCard