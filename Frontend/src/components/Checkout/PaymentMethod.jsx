

const PaymentMethod = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-300">

      <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
        💳 Payment Method
      </h2>

      <div className="space-y-3">

        <label className="flex items-center justify-between border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-purple-500">
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" className="accent-purple-600" />
            <span className="font-medium">Credit / Debit Card</span>
          </div>
          <span>💳</span>
        </label>

        <label className="flex items-center justify-between border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-purple-500">
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" className="accent-purple-600" />
            <span className="font-medium">UPI Payment</span>
          </div>
          <span>📱</span>
        </label>

        <label className="flex items-center justify-between border border-gray-300 rounded-xl p-4 cursor-pointer hover:border-purple-500">
          <div className="flex items-center gap-3">
            <input type="radio" name="payment" className="accent-purple-600" />
            <span className="font-medium">Cash on Delivery</span>
          </div>
          <span>🚚</span>
        </label>

      </div>

    </div>

  )
}

export default PaymentMethod