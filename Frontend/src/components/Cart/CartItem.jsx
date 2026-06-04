import { BiMinus, BiPlus } from "react-icons/bi"
import { BsTrash2 } from "react-icons/bs"
import { Link } from "react-router-dom"


const CartItem = ({item, onUpdate, onRemove}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 gap-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/30 transition-colors">
            {/* Product Information */}

            <Link to={`/product/${item.id}`} className="col-span-1 md:col-span-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-slate-800">{item.name}</h3>
                    <p className="text-[10px] text-gray-400 font-medium uppercase mt-0.5 tracking-tight">
                        {item.variant}
                    </p>
                </div>
            </Link>

            {/* Quantity Selector */}
            <div className="col-span-1 md:col-span-3 flex justify-center">
                <div className="flex items-center bg-gray-50 rounded-full px-2 py-1 border border-gray-100">
                    <button
                        onClick={() => onUpdate(item.id, -1)}
                        className="p-1 hover:text-purple-600 transition-colors"
                        aria-label="Decrease quantity"
                    >
                        <BiMinus size={14} />
                    </button>
                    <span className="px-4 font-bold text-xs w-8 text-center">{item.qty}</span>
                    <button
                        onClick={() => onUpdate(item.id, 1)}
                        className="p-1 hover:text-purple-600 transition-colors"
                        aria-label="Increase quantity"
                    >
                        <BiPlus size={14} />
                    </button>
                </div>
            </div>

            {/* Item Price */}
            <div className="col-span-1 md:col-span-2 text-right">
                <span className="text-sm font-bold text-slate-800">
                    ${(item.price * item.qty).toFixed(2)}
                </span>
            </div>

            {/* Actions */}
            <div className="col-span-1 md:col-span-1 text-right">
                <button
                    onClick={() => onRemove(item.id)}
                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                >
                    <BsTrash2 size={18} />

                </button>
            </div>
        </div>
    )
}

export default CartItem