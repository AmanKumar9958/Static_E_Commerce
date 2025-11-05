import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = ({products, onProductClick}) => {
  const latest = products.slice(0,4)
  return (
    <div className="container-max mx-auto px-6 py-8">
      <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg p-6 shadow-card mb-8">
        <div>
          <h1 className="text-4xl font-extrabold">SKS Mart - Barbigha</h1>
          <p className="mt-4 text-slate-600">Stylish, modern garments for Men, Women & Kids. Shop school dresses, readymade garments and corporate uniforms.</p>
          <div className="mt-6">
            <Link to="/collection" className="border px-4 py-2 rounded hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-200">Explore</Link>
          </div>
        </div>
        <div>
          <Carousel slides={[
            { id: 's1', title: 'Men', subtitle: 'Contemporary men wear', image: 'men.png', alt: 'Men clothing' },
            { id: 's2', title: 'Women', subtitle: 'Modern women wear', image: 'women.png', alt: 'Women clothing' },
            { id: 's3', title: 'Kids', subtitle: 'Comfortable school wear', image: 'kids.png', alt: 'Kids clothing' }
          ]} interval={2000} />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold animate-pulse">Latest Collection</h2>
          <Link to="/collection" className="text-black hover:cursor-pointer border-2 border-black p-1 rounded-xl">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {latest.map(p => (
            <ProductCard key={p.id} product={p} onClick={onProductClick} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
