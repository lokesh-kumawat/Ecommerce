import { BiCreditCard } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"

const CartOrderSummery = ({ subtotal, shipping, tax, total }) => {
    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col sticky top-8">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-slate-700 font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-400">Estimated Shipping</span>
                    <span className="text-slate-700 font-bold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-medium">
                    <span className="text-gray-400">Estimated Tax</span>
                    <span className="text-slate-700 font-bold">${tax.toFixed(2)}</span>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-slate-800">Total</span>
                    <span className="text-xl font-extrabold text-purple-600">
                        ${total.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Promo Code Input */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Promo code"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs font-medium outline-none focus:ring-2 focus:ring-purple-100 transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-purple-600 uppercase tracking-widest hover:text-purple-700">
                    Apply
                </button>
            </div>

            {/* Checkout Buttons */}
            <a href="/place-order" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-100 mb-4 group">
                Proceed to Checkout
                <BsArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust Badges */}
            <div className="flex flex-col items-center gap-3">
                <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">
                    Guaranteed Secure Checkout
                </p>
                <div className="flex gap-4 text-gray-300 grayscale opacity-50">
                    <BiCreditCard size={20} />
                    <div className="w-8 h-5 bg-gray-200 rounded-sm" />
                    <div className="w-8 h-5 bg-gray-200 rounded-sm" />
                </div>
            </div>
        </div>
    )
}

export default CartOrderSummery