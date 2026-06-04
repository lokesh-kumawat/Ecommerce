import { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext();

// custome hook 
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    // load form localStorage
    const [wishlist, setWishlist] = useState(() => {
        try {
            const data = JSON.parse(localStorage.getItem("wishlist"));
            return Array.isArray(data) ? data : []
        } catch (error) {
            return []
        }
    });

    // save to localStorage
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist]);

    // Toggle Wishlist (Add / Remove)
    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find(item => item.id === product.id);

            if (exists) {
                return prev.filter(item => item.id !== product.id);
            } else {
                return [...prev, product];
            }
        });
    };

    // Check if item exists
    const isInWishlist = (id) => {
        return wishlist.some(item => item.id === id);
    };

    return (
        <WishlistContext.Provider value={{wishlist, toggleWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    )



}


