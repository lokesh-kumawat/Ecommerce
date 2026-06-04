import ProductCard from "../components/Home/ProductCard"
import { products } from "../data/products"

const Shop = () => {
    return (
        <div className="bg-gray-50 ">
            <div className="max-w-7xl mx-auto px-4 pt-5">
                <h3 className="text-3xl font-bold">
                    Our Collection
                </h3>
                <p>Personalize your favorite items with ease.</p>
            </div>


            <ProductCard products={products} />

        </div>
    )
}

export default Shop