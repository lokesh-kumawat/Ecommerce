import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { useWishlist } from "../../Context/WishlistContext"

const ProductCard = ({ products }) => {
  const { toggleWishlist, isInWishlist } = useWishlist()

  const { addToCart } = useCart()

  return (
    <section className="bg-gray-50 py-6">

      <div className="max-w-7xl mx-auto px-4">


        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => (

            <div
              key={index}
              className="bg-white rounded-md shadow-sm overflow-hidden relative border border-gray-100"
            >

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
              >
                {isInWishlist(product.id) ? (
                  <BiSolidHeart className="text-red-500" size={18} />
                ) : (
                  <BiHeart className="text-gray-400 hover:text-red-500" size={18} />
                )}
              </button>

              {/* Image */}
              <div className="w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden"> 
                <img
                  src={ product.img_url || "https://placehold.co/400x400?text=No+Image"}
                  alt={product.name || product.product_name || "Product"}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col gap-1">

                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-800 line-clamp-1 truncate pr-2">
                    {product.name || product.product_name}
                  </h3>

                  <span className="text-purple-600 font-bold whitespace-nowrap">
                    ₹{product.price}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center text-yellow-400 text-xs mt-1">
                  ⭐⭐⭐⭐⭐
                  <span className="text-gray-400 ml-1">
                    ({product.reviews || Math.floor(Math.random() * 100 + 10)} reviews)
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center gap-2 mt-3">

                  <button 
                    onClick={() => { addToCart(product); alert("Added to cart ") }} 
                    className="flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-800 transition-colors"
                  >
                    <CgShoppingCart size={14} />
                    Add
                  </button>

                  <Link to={`/product/${product.id}`}>
                    <button className="flex items-center gap-1.5 border border-purple-500 text-purple-600 px-3 py-1.5 rounded text-xs font-medium hover:bg-purple-50 transition-colors">
                      Details
                    </button>
                  </Link>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default ProductCard