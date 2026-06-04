import profile_image from "../assets/images/profile.jpg"
import { useEffect, useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
    const { cart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("accessToken");
            setIsLoggedIn(!!token);
        }


        checkAuth();

        window.addEventListener("authChanged", checkAuth);

        return () => {
            window.removeEventListener("authChnaged", checkAuth)
        }

    }, []);



    return (
        <nav className="w-full bg-white shadow-sm">

            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-purple-600 text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold">
                        S
                    </div>
                    <h1 className="text-lg font-semibold">CustomStore</h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "hover:text-purple-600"} >Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "hover:text-purple-600"} > Shop </NavLink>

                </ul>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full">
                        <IoSearch className="text-gray-500 text-lg" />
                        <input
                            type="text"
                            placeholder="Search designs..."
                            className="bg-transparent outline-none ml-2 text-sm"
                        />
                    </div>

                    {/* Cart */}
                    <Link to="/cart" className="relative cursor-pointer">
                        <FaShoppingCart className="text-xl text-gray-700" />
                        <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1.5 rounded-full">
                            {cart.length}
                        </span>
                    </Link>

                    {/* Login */}

                    {isLoggedIn ? (
                        <Link to="/profile">
                            <img src={profile_image} alt="profile image" className="w-10 h-10 rounded-full object-cover" />
                        </Link>
                    ) : (
                        <Link to="/login" className="hidden md:block bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                            Login
                        </Link>
                    )

                    }



                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {menuOpen && (
                        <div className="md:hidden px-6 pb-4">
                            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                                <li>Home</li>
                                <li>Shop</li>

                            </ul>

                            {!isLoggedIn && (
                                <Link to="/login" className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full block text-center">
                                    Login
                                </Link>
                            )}
                        </div>
                    )}

                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4">

                    <ul className="flex flex-col gap-4 text-gray-700 font-medium">

                        <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 font-semibold" : "hover:text-purple-600"} >Home</NavLink>
                        <li className="hover:text-purple-600 cursor-pointer">Shop</li>
                        <li className="hover:text-purple-600 cursor-pointer">Popular</li>
                        <li className="hover:text-purple-600 cursor-pointer">Customize</li>
                        <li className="hover:text-purple-600 cursor-pointer">Contact</li>

                    </ul>

                    {/* Mobile Login */}
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full">
                        Login
                    </button>

                </div>
            )}

        </nav>
    );
}

export default Navbar;