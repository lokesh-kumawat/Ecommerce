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
              className="bg-white rounded-md shadow-sm hover:shadow-md transition overflow-hidden relative border border-gray-100"
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
              <div className="bg-gray-50 flex items-center justify-center h-40 "> 
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-1 pb-4 pt-1">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm text-gray-800">
                    {product.name}
                  </h3>

                  <span className="text-purple-600 font-semibold text-sm">
                    {product.price}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center text-yellow-400 text-xs mt-1">
                  ⭐⭐⭐⭐⭐
                  <span className="text-gray-400 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex justify-around gap-3 mt-4">

                  <button onClick={() => { addToCart(product); alert("Added to cart ") }} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-xs hover:bg-gray-800 cursor-pointer">
                    <CgShoppingCart size={14} />
                    Add
                  </button>

                  <Link to={`/product/${product.id}`}>

                    <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-4 py-2 rounded-lg text-xs hover:bg-purple-50 cursor-pointer">
                      Buy Now
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