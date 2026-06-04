import { FaInstagram, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-[#0B1B3B] text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-purple-600 text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold">
              S
            </div>
            <h1 className="text-white font-semibold text-lg">CustomStore</h1>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            The world’s leading platform for personalized high-quality products.
            Empowering creativity since 2018.
          </p>

          <div className="flex gap-4 mt-5 text-lg">
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Our Story</li>
            <li className="hover:text-white cursor-pointer">Customizer Tool</li>
            <li className="hover:text-white cursor-pointer">Corporate Gifting</li>
            <li className="hover:text-white cursor-pointer">Wholesale</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Returns Policy</li>
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe for design tips and exclusive offers.
          </p>

          <div className="flex bg-[#1A2A4A] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 text-sm outline-none flex-1"
            />
            <button className="bg-purple-600 px-4 text-white text-sm hover:bg-purple-700">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>© 2024 CustomStore Inc. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer