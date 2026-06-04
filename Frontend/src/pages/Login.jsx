import { Link, useNavigate } from "react-router-dom"
import backgroundImage from "../assets/images/background_image.jpg"
import { useState } from "react";
import { loginUser } from "../api/user"



const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setloading] = useState(false);
    const [error, setError] = useState("")


    const handleChnage = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true);
        setError("")

        try {

            const res = await loginUser(formData);

            localStorage.setItem("accessToken", res.accessToken);
            navigate("/")

        } catch (error) {
            setError(error.response?.data?.message || "login failed");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="absolute inset-0 bg-black/40"></div>

            <div className=" relative bg-white p-8 rounded-lg shadow-lg w-[400px]">

                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-sm mb-3 text-center">
                        {error}
                    </p>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={formData.email}
                            onChange={handleChnage}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             value={formData.password}
                            onChange={handleChnage}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                        {loading ? "Loggin in..." :"Login"}
                    </button>

                </form>

                <p className="text-center text-sm mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-indigo-600 font-semibold">
                        Sign Up
                    </Link>
                </p>

            </div>

        </div>

    )
}

export default Login