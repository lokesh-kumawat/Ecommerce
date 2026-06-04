import { useState } from "react";
import ProfileSection from "../components/Profile/ProfileSection";
import OrderCard from "../components/Profile/OrderCard";
import WishlistCard from "../components/Profile/WishlistCard";
import AddressCard from "../components/Profile/AddressCard";
import { useWishlist } from "../Context/WishlistContext";

const Profile = () => {

  const [activeTab, setActiveTab] = useState("orders");
  const { wishlist } = useWishlist();

  const orders = [
    {
      id: 1,
      title: "Nike Air Zoom Pegasus 39",
      brand: "Nike Running Shoes",
      price: 120,
      status: "Delivered",
      date: "Oct 18, 2023",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Headphones",
      brand: "Sony",
      price: 348,
      status: "Processing",
      date: "Oct 15, 2023",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG4PdPon6MEfLgdeZdZey5cWQzHuMqGxRxfUHajcw7I2NCtkTSH8CfsF_dkYIOOl8iLbOCtYXEOizIzaiPlEcQ3WPF3vYJdiM7OeeRval3HV9R9ZNpMoXSKtwSpClqiFWKm5o_TPmZRjMsLqzP3bF1ZQWkNgbHv1U1rfuFtUVmIPRQYThXep9S9ccFF3i0otAtypyQE4q6sO3ZCApv7XGjl0ZlHjNOpZXnGWlaoly1CuypP6A8r6Rb5FjRtEJv3THYtFqF4aLoOr6x"
    }
  ];

  const addresses = [
    {
      id: 1,
      name: "Alex Johnson",
      street: "221B Baker Street",
      city: "London",
      country: "UK",
      phone: "+44 987654321"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-7xl mx-auto px-4 pt-5">

        <ProfileSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {activeTab === "orders" &&
          orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))
        }

        {activeTab === "wishlist" && (
          wishlist.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <p className="text-gray-500">Your wishlist is empty</p>
            </div>
          ) : (
            wishlist.map(item => (
              <WishlistCard key={item.id} item={item} />
            ))
          )
        )}

        {activeTab === "addresses" &&
          addresses.map(address => (
            <AddressCard key={address.id} address={address} />
          ))
        }

      </div>

    </div>
  );
};

export default Profile;