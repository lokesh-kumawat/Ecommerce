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
            const productId = product.id || product._id;
            const existing = prev.find((item) => (item.id || item._id) === productId);

            if (existing) {
                return prev.map((item) =>
                    (item.id || item._id) === productId
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            let parsedPrice = product.price;
            if (typeof parsedPrice === "string") {
                parsedPrice = parseFloat(parsedPrice.replace(/[^0-9.]/g, ""));
            }

            return [
                ...prev,
                {
                    ...product,
                    id: productId,
                    name: product.name || product.product_name,
                    price: parsedPrice,
                    qty: 1,
                    image: product.img || product.img_url
                }
            ];
        });
    };

    // Set buy now item for direct checkout
    const setBuyNow = (product, quantity = 1) => {
        let parsedPrice = product.price;
        if (typeof parsedPrice === "string") {
            parsedPrice = parseFloat(parsedPrice.replace(/[^0-9.]/g, ""));
        }

        setBuyNowItem({
            ...product,
            id: product.id || product._id,
            name: product.name || product.product_name,
            price: parsedPrice,
            qty: quantity,
            image: product.img || product.img_url
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