import { Route, Routes } from "react-router-dom"
import MainLayout from "../layout/MainLayout"

import Home from "../pages/Home"
import Shop from "../pages/Shop"
import ProductDetail from "../pages/ProductDetail"
import Cart from "../pages/Cart"
import PlaceOrder from "../pages/PlaceOrder"
import Profile from "../pages/Profile"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import AdminLayout from "../layout/AdminLayout"
import Page404 from "../pages/Page404"
import ProtectedRoute from "./ProtectedRoute"

// admin
import AdminDash from "../pages/Admin/AdminDash"
import Allproduct from "../pages/Admin/Allproduct"


const AppRoutes = () => {
    return (
        <Routes>


            {/* user routes */}

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />

                <Route path="/cart" element={
                    <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <Cart />
                    </ProtectedRoute>
                }
                />

                <Route path="/place-order" element={
                    <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <PlaceOrder />
                    </ProtectedRoute>
                }
                />

                <Route path="/profile" element={
                    <ProtectedRoute allowedRoles={["user", "admin"]}>
                        <Profile />
                    </ProtectedRoute>
                }
                />

            </Route>
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />


            {/* admin routes */}
            <Route path="/admin" element={
                <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminLayout />
                </ProtectedRoute>
            }>

                <Route index element={<AdminDash />} />
                <Route path="/admin/product" element={<Allproduct />} />


            </Route>

            {/* 404 PAGE Route */}
            <Route path="*" element={<Page404 />} />


        </Routes>
    )
}

export default AppRoutes