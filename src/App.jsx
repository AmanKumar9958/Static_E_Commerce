import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
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
      <div className="min-h-screen">
        <Navbar onSearch={setSearch} currentPath={window.location.pathname} />
        <main className="pt-6">
          <Routes>
            <Route path="/" element={<Home products={products} onProductClick={handleProductClick} />} />
            <Route path="/collection" element={<Collection products={products} searchQuery={search} onProductClick={handleProductClick} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {selectedProduct && <ProductModal product={selectedProduct} onClose={()=>setSelectedProduct(null)} />}
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App