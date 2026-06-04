import { CgShoppingCart } from 'react-icons/cg';
import { BsTruck, BsStarFill } from 'react-icons/bs';
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

    const renderTabContent = () => {
        if (activeTab === 'Specifications') {
            return (
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
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
        if (activeTab === 'Reviews (124)') {
            return (
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-orange-400"><BsStarFill size={10} /><BsStarFill size={10} /><BsStarFill size={10} /><BsStarFill size={10} /><BsStarFill size={10} /></div>
                        <span className="text-xs font-bold text-slate-800">4.9 / 5.0</span>
                    </div>
                    <div className="border-t border-gray-50 pt-3">
                        <p className="text-xs font-bold text-slate-800">Reviewer Name</p>
                        <p className="text-xs text-gray-500 italic">"Amazing quality and fast delivery. Looks great in my office!"</p>
                    </div>
                </div>
            );
        }
        return (
            <p className="text-xs text-gray-500 leading-relaxed">
                Handcrafted from sustainably sourced solid timber, each frame features precision-cut mitered corners and a deep gallery profile. Our proprietary UV protected acrylic glazing ensures vibrant longevity.
            </p>
        );
    };



    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-slate-900">
            <div className="max-w-7xl  mx-auto px-4 pt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Left Column: Image Gallery */}
                <div className="space-y-4">
                    <div className="relative bg-white rounded-xl p-6 shadow-sm flex justify-center items-center overflow-hidden border border-gray-100">
                        <div className="relative shadow-xl transition-all duration-300">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full max-w-[280px] object-cover"
                            />
                        </div>
                        <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-[8px] font-bold tracking-widest uppercase border border-gray-100 shadow-sm">
                            Live Preview
                        </span>
                    </div>

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
                <div className="max-w-2xl min-h-[100px]">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;