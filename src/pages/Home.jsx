import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import ProductCard from '../components/ProductCard'

const Home = ({ products, onProductClick }) => {
  const latest = products.slice(0, 4)
  const trending = products.slice(4, 8)
  return (
    <div className="bg-page py-8">
      <div className="container-max mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg p-6 md:p-8 shadow-lg mb-12">
          <Reveal direction="left">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-heading">SKS Mart - Barbigha</h1>
              <p className="mt-4 text-lg text-body/80">
                Stylish, modern garments for Men, Women & Kids. Shop school dresses, readymade garments and corporate uniforms.
              </p>
              <div className="mt-8">
                <Link
                  to="/collection"
                  className="inline-block bg-cta text-heading px-7 py-3 rounded-md font-bold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cta transform hover:-translate-y-0.5"
                >
                  Explore
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-lg overflow-hidden">
              <Carousel
                slides={[
                  { id: 's1', title: 'Men', subtitle: 'Contemporary men wear', image: 'men.png', alt: 'Men clothing' },
                  { id: 's2', title: 'Women', subtitle: 'Modern women wear', image: 'women.png', alt: 'Women clothing' },
                  { id: 's3', title: 'Kids', subtitle: 'Comfortable school wear', image: 'kids.png', alt: 'Kids clothing' },
                ]}
                interval={3000}
              />
            </div>
          </Reveal>
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
              <Reveal key={f.title} direction="up">
                <div className="bg-white rounded-lg shadow-sm border border-primary/20 p-5 flex items-start gap-4">
                  <div className="text-2xl" aria-hidden>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">{f.title}</h3>
                    <p className="text-sm text-body mt-1">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Latest Collection Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-heading">Latest Collection</h2>
            <Link
              to="/collection"
              className="text-primary font-medium hover:text-primary/80 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {latest.map((p) => (
              <Reveal key={p.id} direction="up">
                <ProductCard product={p} onClick={onProductClick} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Shop by Category */}
        <section className="mt-14">
          <h2 className="text-3xl font-semibold text-heading mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Readymade garments', emoji: '👗' },
              { name: 'School dress', emoji: '🎒' },
              { name: 'Footwear', emoji: '👟' },
              { name: 'Men', emoji: '🧍‍♂️' },
              { name: 'Women', emoji: '🧍‍♀️' },
              { name: 'Kids', emoji: '🧒' },
            ].map((c) => (
              <Reveal key={c.name} direction="up">
                <Link
                  to="/collection"
                  className="group bg-white rounded-lg border border-primary/20 p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Browse ${c.name}`}
                >
                  <div className="text-3xl mb-2" aria-hidden>
                    {c.emoji}
                  </div>
                  <div className="font-medium text-heading group-hover:text-primary">{c.name}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Trending Now */}
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-heading">Trending Now</h2>
            <Link
              to="/collection"
              className="text-primary font-medium hover:text-primary/80 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {trending.map((p) => (
              <Reveal key={p.id} direction="up">
                <ProductCard product={p} onClick={onProductClick} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="mt-14">
          <Reveal direction="up">
            <div className="rounded-lg bg-primary text-heading p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg">
              <div>
                <h3 className="text-2xl font-bold text-heading">Festive Styles Are In ✨</h3>
                <p className="mt-1 text-heading opacity-90">Fresh arrivals for every occasion. Limited stock available.</p>
              </div>
              <div>
                <Link
                  to="/collection"
                  className="inline-block bg-cta text-heading px-5 py-2 rounded-md font-bold hover:bg-cta/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  )
}

export default Home