const ProfileSection = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 bg-purple-200 text-purple-700 rounded-full flex items-center justify-center font-bold">
            AJ
          </div>

          <div>
            <h2 className="font-semibold text-lg">Alex Johnson</h2>
            <p className="text-sm text-gray-500">
              Member since October 2022 • Gold Tier
            </p>
          </div>

        </div>

        <div className="flex gap-6 text-sm">

          <div className="text-center">
            <p className="font-semibold">24</p>
            <p className="text-gray-500">Orders</p>
          </div>

          <div className="text-center">
            <p className="font-semibold">12</p>
            <p className="text-gray-500">Wishlist</p>
          </div>

        </div>

      </div>

      {/* Tabs */}

      <div className="flex gap-6 mt-6 border-t pt-4 text-sm">

        <button
          onClick={() => setActiveTab("orders")}
          className={activeTab === "orders" ? "text-purple-600 font-semibold" : "text-gray-500"}
        >
          My Orders
        </button>

        <button
          onClick={() => setActiveTab("addresses")}
          className={activeTab === "addresses" ? "text-purple-600 font-semibold" : "text-gray-500"}
        >
          My Addresses
        </button>

        <button
          onClick={() => setActiveTab("wishlist")}
          className={activeTab === "wishlist" ? "text-purple-600 font-semibold" : "text-gray-500"}
        >
          Wishlist
        </button>

        <button className="ml-auto text-gray-500">
          Logout
        </button>

      </div>

    </div>
  );
};

export default ProfileSection;