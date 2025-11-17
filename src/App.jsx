import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTopButton from './components/BackToTopButton'
import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductModal from './components/ProductModal'
import products from './data/products'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const [search, setSearch] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (product) => setSelectedProduct(product)

  return (
    <BrowserRouter>
      <div className="min-h-svh flex flex-col bg-page"> {/* Use svh to avoid mobile bottom gap */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-white px-3 py-2 rounded">Skip to content</a>
        <Navbar onSearch={setSearch} currentPath={window.location.pathname} />
        <ScrollToTop />
        <main className="flex-1" id="main" role="main"> {/* Removed pt-6 */}
          <Routes>
            <Route path="/" element={<Home products={products} onProductClick={handleProductClick} />} />
            <Route path="/collection" element={<Collection products={products} searchQuery={search} onProductClick={handleProductClick} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {selectedProduct && <ProductModal product={selectedProduct} onClose={()=>setSelectedProduct(null)} />}
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </BrowserRouter>
  )
}

export default App