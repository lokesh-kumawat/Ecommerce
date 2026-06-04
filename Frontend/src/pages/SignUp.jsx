import { Link, useNavigate } from "react-router-dom"
import backgroundImage from "../assets/images/background_image.jpg"
import { useState } from "react";
import { registerUser } from "../api/user"



const SignUp = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setloading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChnage = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true);
        setError("");
        setSuccess("");

        try {
            const res = await registerUser(formData)
            setSuccess(res.message || "Account create successfully");
            navigate("/login");

        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong");
        }


    }


    return (
        <div className="relative min-h-screen flex items-center justify-center">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Signup Card */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-[400px]">

                <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

                {/* error */}
                {error && (
                    <p className="text-red-500 text-sm mb-2 text-center">
                        {error}
                    </p>
                )}

                {/* success */}
                {success &&
                    <p className="text-green-500 text-sm mb-2 text-center">
                        {success}
                    </p>

                }



                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={formData.name}
                            onChange={handleChnage}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={formData.email}
                            onChange={handleChnage}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Create password"
                            name="password"
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
                        {loading ? "Creating.." : "Sign Up"}
                    </button>

                </form>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 font-semibold">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
};



export default SignUp