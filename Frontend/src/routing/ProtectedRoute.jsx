import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {

    const token = localStorage.getItem("accessToken");

    // Not logged in
    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        const decoded = jwtDecode(token);

        // Role not allowed
        if (!allowedRoles.includes(decoded.role)) {
            return <Navigate to="/" />;
        }

        // Allowed
        return children;

    } catch (error) {
        //  Invalid token
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;