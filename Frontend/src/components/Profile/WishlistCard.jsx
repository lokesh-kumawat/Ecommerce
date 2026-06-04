import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";

const WishlistCard = ({ item }) => {

  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center mb-4">

      <div className="flex gap-4">

        <img
          src={item.img}
          className="w-16 h-16 rounded-lg object-cover"
        />

        <div>

          <h3 className="font-semibold">{item.name}</h3>

          <p className="text-sm text-gray-500">
            {item.price}
          </p>

        </div>

      </div>

      <button
        onClick={() => {
          addToCart(item);
          toggleWishlist(item); // optional: remove after adding
        }}
        className="bg-purple-600 text-white text-sm px-4 py-1 rounded cursor-pointer"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default WishlistCard;