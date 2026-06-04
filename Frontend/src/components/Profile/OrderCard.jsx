const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center mb-4">

      <div className="flex gap-4">

        <img
          src={order.image}
          className="w-16 h-16 rounded-lg object-cover"
        />

        <div>

          <h3 className="font-semibold">{order.title}</h3>

          <p className="text-sm text-gray-500">
            {order.brand}
          </p>

          <span className="text-xs text-green-600 font-medium">
            {order.status}
          </span>

        </div>

      </div>

      <div className="text-right">

        <p className="font-semibold">${order.price}</p>

        <p className="text-xs text-gray-500">
          {order.date}
        </p>

      </div>

    </div>
  );
};

export default OrderCard;