const AddressCard = ({ address }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">

      <h3 className="font-semibold">
        {address.name}
      </h3>

      <p className="text-sm text-gray-600">
        {address.street}
      </p>

      <p className="text-sm text-gray-600">
        {address.city}, {address.country}
      </p>

      <p className="text-sm text-gray-600">
        Phone: {address.phone}
      </p>

    </div>
  );
};

export default AddressCard;