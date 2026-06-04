import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

// Custom hook 
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    // load cart form localStorage 
    const [cart, setCart] = useState(() => {
        try {
            const data = JSON.parse(localStorage.getItem("cart"));
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    });

    // Buy now item - single product for direct checkout (not added to cart)
    const [buyNowItem, setBuyNowItem] = useState(null);

    // save cart to localStorage whenever it chnages 
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    // Add to cart
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    price: parseFloat(product.price.replace("$", "")),
                    qty: 1,
                    image: product.img
                }
            ];
        });
    };

    // Set buy now item for direct checkout
    const setBuyNow = (product, quantity = 1) => {
        setBuyNowItem({
            ...product,
            price: parseFloat(product.price.replace("$", "")),
            qty: quantity,
            image: product.img
        });
    };

    // Clear buy now item
    const clearBuyNow = () => {
        setBuyNowItem(null);
    };

    // Remove item
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    //  Update quantity
    const updateQty = (id, qty) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty } : item
            )
        );
    };

    // Clear cart
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                buyNowItem,
                addToCart,
                setBuyNow,
                clearBuyNow,
                removeFromCart,
                updateQty,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};