import { useCart } from "../../Context/CartContext";

const OrderSummary = () => {
  const { cart, buyNowItem } = useCart();

  // Use buyNowItem if present, otherwise use cart items
  const items = buyNowItem ? [buyNowItem] : cart;

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-300 h-fit">
        <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
        <p className="text-gray-500 text-center py-8">No items in order</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-300 h-fit">

      <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

      {/* Products */}
      {items.map((item) => (
        <div key={item.id} className="flex gap-4 mb-4">
          <img
            src={item.image || item.img}
            alt={item.name}
            className="w-14 h-14 rounded-lg object-cover"
          />

          <div className="flex-1">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-gray-500">${item.price} x {item.qty}</p>
          </div>
        </div>
      ))}

      <div className="border-t border-gray-400 pt-4 space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-500">FREE</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

      </div>

      <div className="border-t border-gray-400 mt-4 pt-4 flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span className="text-purple-600">${total.toFixed(2)}</span>
      </div>

      <button className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
        Place Order →
      </button>

      <p className="text-xs text-gray-500 text-center mt-3">
        🔒 Secure 256-bit SSL connection
      </p>

    </div>

  )
}

export default OrderSummary