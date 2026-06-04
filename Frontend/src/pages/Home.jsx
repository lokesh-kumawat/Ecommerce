
import CategoryCard from '../components/Home/CategoryCard'
import { products } from "../data/products"
import ProductCard from '../components/Home/ProductCard'
import Testimonials from '../components/Home/Testimonials'
import { Link } from 'react-router-dom'

const popularProductCard = products.filter(p => p.isPopular)

const Home = () => {
  return (
    <>
 
     {/* hero section */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          {/* Left Content */}
          <div>

            <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              NEW COLLECTION
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Design Your <br />
              <span className="text-purple-600">Own Style</span>
            </h1>

            <p className="text-gray-500 mt-4 max-w-md">
              Create unique, high-quality products that reflect your personality.
              Fully customizable and made just for you, shipped directly.
            </p>

            <div className="flex gap-4 mt-6">

              <Link to="/shop" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
                Shop Now
              </Link>

              <Link to="/shop" className="border px-6 py-3 rounded-full hover:bg-gray-100">
                Start Customizing
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <div className="rounded-xl shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGjA4X_xOYIoyvSDXsh8vBRCgjo2gW-yO-tYVP0Q77Tvf1SPOWOqBGbI1in32CT8Rc-4xS3wsBD9MDKkXwLmZYxOGQ3ROSAOEbiaFLJgQH7zL7J3E6yiERptIARdiq0uIRhk14ML1kAYaStBOT6uQ4NHeUHAsURPnBtTtz8rn8YJfAL49xl_SdVHPgj_GM2EcOo8vCB4ocwxw6XXmg1-yo9CFFmCQwvC6U1S1UACWv-iWJZOvIl9OujXPOgVh3-NQmGShgVJsbmylY"
                alt="Custom Frame"
                className="rounded-lg w-[420px] h-[300px] object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* categories section  */}

       <CategoryCard />

       {/* Title */}
        <div className=" bg-gray-50 text-center pt-6">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <p className="text-gray-500 text-sm mt-1">
            Trending items our community is designing right now
          </p>
        </div>

       {/* popular product section */}
       <ProductCard products={popularProductCard} />

       

       {/* testimonials */}
       
       <Testimonials />

    </>
  )
}

export default Home