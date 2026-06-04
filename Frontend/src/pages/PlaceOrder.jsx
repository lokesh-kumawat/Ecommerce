import  OrderSummary  from "../components/Checkout/OrderSummary"
import  PaymentMethod  from "../components/Checkout/PaymentMethod"
import  ShippingAddress  from "../components/Checkout/ShippingAddress"

const PlaceOrder = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <ShippingAddress />
          <PaymentMethod />
        </div>

        {/* RIGHT */}
        <OrderSummary />

      </div>
    </div>
  )
}

export default PlaceOrder