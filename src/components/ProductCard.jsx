import React from 'react'
import LazyImage from './LazyImage'

const ProductCard = ({ product, onClick }) => {
  // This makes both the image and the title clickable,
  // which is a common and accessible pattern.
  const handleClick = () => {
    onClick(product)
  }

  return (
    <div className="bg-white rounded-lg shadow-md group border border-zinc-200 transition-shadow hover:shadow-lg">
      {/* Image Container: flex-center so full image always visible */}
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex items-center justify-center bg-zinc-50 h-64 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <LazyImage
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </button>
      
      {/* Content */}
      <div className="p-4">
        <button
          onClick={handleClick}
          className="font-semibold text-base text-zinc-900 text-left hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          {product.name}
        </button>
        <p className="text-sm text-zinc-500 mt-1">{product.sizes.join(' • ')}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xl font-bold text-zinc-900">
            ₹{product.price.toFixed(2)}
          </div>
          <div className="text-xs font-medium bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full">{product.gender}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard