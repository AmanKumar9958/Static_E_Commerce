import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

const Home = ({products, onProductClick}) => {
  const latest = products.slice(0,4)
  return (
    <div className="container-max mx-auto px-6 py-8">
      <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg p-6 shadow-card mb-8">
        <div>
          <h1 className="text-4xl font-extrabold">SKS Mart</h1>
          <p className="mt-4 text-slate-600">Stylish, modern garments for Men, Women & Kids. Shop school dresses, readymade garments and corporate uniforms.</p>
          <div className="mt-6">
            <button className="bg-accent text-white px-4 py-2 rounded mr-3">Shop Collection</button>
            <Link to="/collection" className="border px-4 py-2 rounded hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-200">Explore</Link>
          </div>
        </div>
        <div className="w-full h-80 overflow-hidden rounded">
          <img src="/hero_img.png" alt="hero" className="w-full h-"/>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold animate-pulse">Latest Collection</h2>
          <Link to="/collection" className="text-slate-500 hover:cursor-pointer">View All</Link>
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
