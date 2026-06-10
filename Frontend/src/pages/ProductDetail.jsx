import { CgShoppingCart } from 'react-icons/cg';
import { BsTruck, BsStarFill } from 'react-icons/bs';
import { MdStar } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../Context/CartContext';


const ProductDetail = () => {

    const {addToCart, setBuyNow } = useCart();
    const navigate =  useNavigate();

    const {id} = useParams();
    const product = products.find(p => p.id === Number(id) );
    if(!product) return <div>Product not found</div>


    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('Description');
    const [reviews, setReviews] = useState([]);
    const [reviewForm, setReviewForm] = useState({
        rating: 5,
        comment: ""
    });
    const [hoverRating, setHoverRating] = useState(0);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (reviewForm.comment.trim() === "") {
            alert("Please write a comment");
            return;
        }
        setReviews([...reviews, reviewForm]);
        setReviewForm({ rating: 5, comment: "" });
        alert("Review added successfully!");
    };


    const renderTabContent = () => {
        if (activeTab === 'Specifications') {
            return (
                <div className="max-w-2xl grid grid-cols-2 gap-x-8 gap-y-3">
                    {[
                        { label: "Material", value: "Solid Wood" },
                        { label: "Glazing", value: "UV Acrylic" },
                        { label: "Weight", value: "1.2 kg" },
                        { label: "Finish", value: "Matte" }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-[10px] uppercase text-gray-400 font-bold">{item.label}</span>
                            <span className="text-xs text-slate-700">{item.value}</span>
                        </div>
                    ))}
                </div>
            );
        }
       if (activeTab === "Reviews (124)") {
    return (
        <div className="flex flex-col md:flex-row gap-8 w-full items-start">

            {/* Add Review Form - Right */}
            <div className="bg-white rounded-lg p-6 shadow-sm w-full md:w-[350px] lg:w-[400px] h-fit order-1 md:order-2 shrink-0">
                <h3 className="text-lg font-bold text-slate-800 mb-6">
                    Write a Review
                </h3>

                <form
                    onSubmit={handleReviewSubmit}
                    className="space-y-5"
                >
                    <div>
                        <label className="text-sm font-semibold text-slate-700 mb-3 block">Your Rating</label>
                        <div className="flex gap-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() =>
                                        setReviewForm({
                                            ...reviewForm,
                                            rating: star
                                        })
                                    }
                                    className="transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <MdStar
                                        size={36}
                                        className={`${
                                            star <= (hoverRating || reviewForm.rating)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        } transition-colors`}
                                    />
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">{reviewForm.rating} out of 5 stars</p>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700 mb-2 block">Your Comment</label>
                        <textarea
                            rows="4"
                            placeholder="Share your experience with this product..."
                            value={reviewForm.comment}
                            onChange={(e) =>
                                setReviewForm({
                                    ...reviewForm,
                                    comment: e.target.value
                                })
                            }
                            className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        Submit Review
                    </button>
                </form>
            </div>

            {/* Reviews Summary */}
            <div className="flex-1 max-w-3xl order-2 md:order-1">
                <h3 className="text-lg font-bold text-slate-800 mb-4">
                    Customer Reviews ({reviews.length})
                </h3>

                {/* Reviews List */}
                <div className="space-y-3">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex text-yellow-400 gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <BsStarFill key={i} size={14} className={i < review.rating ? 'text-yellow-400' : 'text-gray-200'} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400">Just now</span>
                                </div>

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {review.comment}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                            <p className="text-sm text-gray-500">
                                No reviews yet. Be the first to review this product!
                            </p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
        return (
            <div className="max-w-2xl">
                <p className="text-xs text-gray-500 leading-relaxed">
                    Handcrafted from sustainably sourced solid timber, each frame features precision-cut mitered corners and a deep gallery profile. Our proprietary UV protected acrylic glazing ensures vibrant longevity.
                </p>
            </div>
        );
    };

    



    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-slate-900">
            <div className="max-w-7xl  mx-auto px-4 pt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Left Column: Image Gallery */}
                <div className="flex justify-center items-start">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full max-w-[300px] object-cover rounded-2xl shadow-lg"
                    />
                </div>

                {/* Right Column: Configuration */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-fit">

                    <h1 className="text-2xl font-bold text-slate-800 mb-1 leading-tight">{product.name}</h1>
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-xl font-bold text-purple-600">{product.price}</span>
                        <span className="text-gray-400 line-through text-xs">{product.discount}</span>
                    </div>

                    {/* Quantity and Stock */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center bg-gray-100 rounded-full px-2 py-0.5 border border-gray-200">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-2 text-lg hover:text-purple-600">-</button>
                            <span className="px-3 font-bold text-xs">{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)} className="px-2 text-lg hover:text-purple-600">+</button>
                        </div>
                        <span className="text-[9px] text-emerald-600 font-bold flex items-center gap-1 uppercase tracking-wide">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> In Stock
                        </span>
                    </div>

                    <div className="space-y-2">
                        <button onClick={() => addToCart(product)} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-100 text-sm cursor-pointer">
                            <CgShoppingCart className="w-4 h-4" /> Add To Cart
                        </button>

                        <button onClick={() => {
                                setBuyNow(product, quantity);
                                navigate('/place-order');
                            }} 
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-all text-sm cursor-pointer">
                            Buy Now
                        </button>
                    </div>

                    {/* Shipping Info */}
                    <div className="mt-6 bg-purple-50/40 rounded-xl p-3 flex items-center gap-3 border border-purple-100">
                        <div className="bg-white p-1.5 rounded shadow-sm">
                            <BsTruck className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-800">Free Express Shipping</p>
                            <p className="text-[9px] text-gray-400">Est. Oct 12 - Oct 15</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="max-w-7xl mx-auto mt-10">
                <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto whitespace-nowrap">
                    {['Description', 'Specifications', 'Reviews (124)'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-xs font-bold transition-colors ${activeTab === tab ? 'border-b-2 border-purple-600 text-slate-800' : 'text-gray-400 hover:text-slate-600'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="w-full min-h-[100px]">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;