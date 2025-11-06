import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = ({ products, onProductClick }) => {
  const latest = products.slice(0, 4)
  return (
    // Page background
    <div className="bg-zinc-50 py-8">
      <div className="container-max mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg p-6 md:p-8 shadow-md mb-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-zinc-900">SKS Mart - Barbigha</h1>
            <p className="mt-4 text-lg text-zinc-600">
              Stylish, modern garments for Men, Women & Kids. Shop school dresses, readymade garments and corporate uniforms.
            </p>
            <div className="mt-8">
              <Link
                to="/collection"
                className="inline-block border border-transparent bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600 transform hover:-translate-y-0.5"
              >
                Explore Collection
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Carousel slides={[
              { id: 's1', title: 'Men', subtitle: 'Contemporary men wear', image: 'men.png', alt: 'Men clothing' },
              { id: 's2', title: 'Women', subtitle: 'Modern women wear', image: 'women.png', alt: 'Women clothing' },
              { id: 's3', title: 'Kids', subtitle: 'Comfortable school wear', image: 'kids.png', alt: 'Kids clothing' }
            ]} interval={3000} />
          </div>
        </section>

        {/* Latest Collection Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-zinc-900">Latest Collection</h2>
            <Link
              to="/collection"
              className="text-teal-600 font-medium hover:text-teal-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-md px-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latest.map(p => (
              <ProductCard key={p.id} product={p} onClick={onProductClick} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home