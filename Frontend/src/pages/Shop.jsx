import { useEffect, useState } from "react"
import ProductCard from "../components/Home/ProductCard"
import { getPublicProducts } from "../api/product"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getPublicProducts();
                setProducts(res.data || []);
            } catch (err) {
                console.error("Failed to fetch products", err);
                setError("Failed to load products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 pt-5 pb-8">
                <h3 className="text-3xl font-bold mb-2">
                    Our Collection
                </h3>
                <p className="text-gray-600 mb-8">Personalize your favorite items with ease.</p>
                
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-10">{error}</div>
                ) : (
                    <ProductCard products={products} />
                )}
            </div>
        </div>
    )
}

export default Shop