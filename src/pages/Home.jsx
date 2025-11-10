import React from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = ({ products, onProductClick }) => {
  const latest = products.slice(0, 4)
  const trending = products.slice(4, 8)
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
                      <Link to="/collection" className="inline-block border border-transparent bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transform hover:-translate-y-0.5">Explore</Link>
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

        {/* Highlights / USPs */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🧵', title: 'Quality Fabrics', desc: 'Breathable, durable materials' },
              { icon: '💸', title: 'Affordable Prices', desc: 'Great value everyday' },
              { icon: '👔', title: 'Uniform & Bulk', desc: 'School and corporate uniforms' },
              { icon: '🤝', title: 'Local Support', desc: 'Easy exchanges & assistance' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-lg shadow-sm border border-zinc-200 p-5 flex items-start gap-4">
                <div className="text-2xl" aria-hidden> {f.icon} </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">{f.title}</h3>
                  <p className="text-sm text-zinc-600 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Collection Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-zinc-900">Latest Collection</h2>
            <Link
              to="/collection"
              className="text-primary font-medium hover:text-primary/80 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {latest.map(p => (
              <ProductCard key={p.id} product={p} onClick={onProductClick} />
            ))}
          </div>
        </section>

        {/* Shop by Category */}
        <section className="mt-14">
          <h2 className="text-3xl font-semibold text-zinc-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Readymade garments', emoji: '👗' },
              { name: 'School dress', emoji: '🎒' },
              { name: 'Footwear', emoji: '👟' },
              { name: 'Men', emoji: '🧍‍♂️' },
              { name: 'Women', emoji: '🧍‍♀️' },
              { name: 'Kids', emoji: '🧒' },
            ].map((c) => (
              <Link
                key={c.name}
                to="/collection"
                className="group bg-white rounded-lg border border-zinc-200 p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Browse ${c.name}`}
              >
                <div className="text-3xl mb-2" aria-hidden>{c.emoji}</div>
                <div className="font-medium text-zinc-900 group-hover:text-primary">{c.name}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Now */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-zinc-900">Trending Now</h2>
            <Link
              to="/collection"
              className="text-primary font-medium hover:text-primary/80 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {trending.map(p => (
              <ProductCard key={p.id} product={p} onClick={onProductClick} />
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="mt-14">
          <div className="rounded-lg bg-primary text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-md">
            <div>
              <h3 className="text-2xl font-bold">Festive Styles Are In ✨</h3>
              <p className="text-white/90 mt-1">Fresh arrivals for every occasion. Limited stock available.</p>
            </div>
            <div>
              <Link
                to="/collection"
                className="inline-block bg-white text-primary px-5 py-2 rounded-md font-medium hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home