import { useEffect, useState } from "react"
import { getAllProducts, deleteProduct, createProduct, updateProduct } from "../../api/adminproduct"
import { BiPlus, BiPencil, BiTrash, BiX } from "react-icons/bi"

const Allproduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    
    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
    const [currentProduct, setCurrentProduct] = useState(null);
    const [formData, setFormData] = useState({
        product_name: "",
        description: "",
        img_url: "",
        image: null,
        price: "",
        discount: 0,
        is_popular: 0
    });

    const fetchProducts = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await getAllProducts();
            setProducts(res.data || []);
        } catch (error) {
            console.error("Product fetch error:", error);
            setError("Failed to load products: " + (error.response?.data?.error || error.message))
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        
        try {
            await deleteProduct(id);
            setProducts(products.filter(p => p.id !== id));
        } catch (error) {
            alert("Delete failed: " + (error.response?.data?.error || error.message));
        }
    }

    const handleOpenModal = (mode, product = null) => {
        setModalMode(mode);
        if (mode === "edit" && product) {
            setCurrentProduct(product);
            setFormData({
                product_name: product.product_name,
                description: product.description,
                img_url: product.img_url,
                image: null,
                price: product.price,
                discount: product.discount || 0,
                is_popular: product.is_popular || 0
            });
        } else {
            setFormData({
                product_name: "",
                description: "",
                img_url: "",
                image: null,
                price: "",
                discount: 0,
                is_popular: 0
            });
        }
        setIsModalOpen(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const submitData = new FormData();
            submitData.append("product_name", formData.product_name);
            submitData.append("description", formData.description);
            submitData.append("price", formData.price);
            submitData.append("discount", formData.discount);
            submitData.append("is_popular", formData.is_popular);
            if (formData.image) {
                submitData.append("image", formData.image);
            } else if (formData.img_url) {
                submitData.append("img_url", formData.img_url);
            }

            if (modalMode === "add") {
                await createProduct(submitData);
            } else {
                await updateProduct(currentProduct.id, submitData);
            }
            setIsModalOpen(false);
            fetchProducts();
        } catch (error) {
            alert("Save failed: " + (error.response?.data?.error || error.message));
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="max-w-7xl mx-auto ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 ps-2">Product Management</h2>
                <button 
                    onClick={() => handleOpenModal("add")}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-all shadow-md"
                >
                    <BiPlus size={20} />
                    <span>Add New Product</span>
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700 rounded shadow-sm">
                    {error}
                </div>
            )}

            {/* Products Table */}
            <div className="bg-white shadow-xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-normal text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-4 text-left text-xs font-normal text-gray-500 uppercase tracking-wider">Product Info</th>
                                <th className="px-6 py-4 text-left text-xs font-normal text-gray-500 uppercase tracking-wider">Price (₹)</th>
                                <th className="px-6 py-4 text-left text-xs font-normal text-gray-500 uppercase tracking-wider text-center">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-normal text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                            <p className="font-medium animate-pulse">Loading amazing products...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-2 whitespace-nowrap">
                                            <img 
                                                src={product.img_url || "https://placehold.co/100x100?text=No+Image"} 
                                                alt={product.product_name} 
                                                className="h-14 w-14 object-cover border border-gray-100 group-hover:scale-105 transition-transform"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-normal text-gray-900 mb-0.5">{product.product_name}</span>
                                                <span className="text-xs text-gray-500 max-w-[200px] truncate">{product.description}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-normal text-gray-900">₹{product.price}</span>
                                                {product.discount > 0 && (
                                                    <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded w-fit mt-1">
                                                        {product.discount}% OFF
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-center">
                                            {product.is_popular ? (
                                                <span className="px-3 py-1 text-[11px] font-bold bg-amber-100 text-amber-700 rounded-full border border-amber-200">
                                                    POPULAR
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 text-[11px] font-bold bg-gray-100 text-gray-600 rounded-full border border-gray-200">
                                                    STANDARD
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-right">
                                            <div className="flex justify-end gap-2">
                                                <button 
                                                    onClick={() => handleOpenModal("edit", product)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="Edit Product"
                                                >
                                                    <BiPencil size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(product.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete Product"
                                                >
                                                    <BiTrash size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-20 text-center text-gray-400">
                                        <div className="flex flex-col items-center gap-2">
                                            <BiPlus size={40} className="text-gray-200" />
                                            <p className="text-lg font-medium">No products found</p>
                                            <button 
                                                onClick={() => handleOpenModal("add")}
                                                className="mt-2 text-blue-600 hover:underline"
                                            >
                                                Create your first product
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800">
                                {modalMode === "add" ? "Create New Product" : "Edit Product"}
                            </h3>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                            >
                                <BiX size={24} />
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Enter product title..."
                                        value={formData.product_name}
                                        onChange={(e) => setFormData({...formData, product_name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
                                    <textarea 
                                        rows="3"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Describe the product..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Price (₹)</label>
                                        <input 
                                            type="number" 
                                            required
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="0.00"
                                            value={formData.price}
                                            onChange={(e) => setFormData({...formData, price: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Discount (%)</label>
                                        <input 
                                            type="number" 
                                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="0"
                                            value={formData.discount}
                                            onChange={(e) => setFormData({...formData, discount: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Image</label>
                                    <input 
                                        type="file" 
                                        accept="image/*"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                                    />
                                    {formData.img_url && !formData.image && (
                                        <div className="mt-2 text-sm text-gray-500">
                                            Current image: <img src={formData.img_url} alt="Current" className="h-10 mt-1 rounded" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                    <input 
                                        type="checkbox" 
                                        id="is_popular"
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                        checked={formData.is_popular === 1}
                                        onChange={(e) => setFormData({...formData, is_popular: e.target.checked ? 1 : 0})}
                                    />
                                    <label htmlFor="is_popular" className="text-sm font-medium text-gray-700 cursor-pointer">Mark as Popular Product</label>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 mt-8">
                                <button 
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`flex-1 px-4 py-2.5 text-white font-bold rounded-lg transition-all shadow-md ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}
                                >
                                    {isSubmitting ? "Saving..." : (modalMode === "add" ? "Create Product" : "Save Changes")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Allproduct