import { useState } from 'react';

const ShippingAddress = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    zipCode: '',
    address: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-300">

      <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
         Shipping Address
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="PIN Code"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street Address"
          rows="2"
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        ></textarea>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <select 
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select State</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

      </div>
    </div>

  )
}

export default ShippingAddress