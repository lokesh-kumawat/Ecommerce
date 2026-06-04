

import { BsArrowLeft } from 'react-icons/bs';
import CartItem from '../components/Cart/CartItem';
import CartOrderSummery from '../components/Cart/CartOrderSummery';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart= [], removeFromCart, updateQty } = useCart()


    const handleUpdateQty = (id, delta) => {
        const item = cart.find((i) => i.id === id);
        if (!item) return;

        const newQty = Math.max(1, item.qty + delta);
        updateQty(id, newQty);
    };


    // Calculations
    const subtotal = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + item.price * item.qty, 0)
    : 0;

    const shipping = cart.length > 0 ? 12.5 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    // if cart is empty show this
    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">

                {/* Image */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                    alt="Empty Cart"
                    className=" h-30 mb-6 opacity-80"
                />

                {/* Text */}
                <h2 className="text-lg font-bold text-gray-700 mb-3">
                    Your cart is empty
                </h2>

                {/* Button */}
                <Link to="/shop" className="bg-purple-600 text-white px-5 py-2 rounded-sm text-sm font-semibold hover:bg-purple-700 transition">
                    Start Shopping
                </Link>
            </div>
        )
    }

    // if cart have products
    return (
        <div className="min-h-screen bg-gray-50/50 p-4 md:p-12 font-sans text-slate-900">
            <div className="max-w-7xl mx-auto px-4 pt-5">
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-1">Shopping Cart</h1>
                    <p className="text-sm text-gray-500">
                        You have {cart.length} items in your selection.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* List Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdate={handleUpdateQty}
                                        onRemove={removeFromCart}
                                    />
                                ))
                            ) : (
                                <div className="p-12 text-center text-gray-400">Your cart is empty.</div>
                            )}
                        </div>

                        <Link to="/shop" className="flex items-center gap-2 text-xs font-bold text-purple-600 hover:text-purple-700 transition-all group">
                            <BsArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Continue Shopping
                        </Link >
                    </div>

                    {/* Summary Section */}
                    <div className="lg:col-span-1">
                        <CartOrderSummery
                            subtotal={subtotal}
                            shipping={shipping}
                            tax={tax}
                            total={total}
                        />


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart