import React from 'react'

const ProductCard = ({ product, onClick }) => {
  // This makes both the image and the title clickable,
  // which is a common and accessible pattern.
  const handleClick = () => {
    onClick(product)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-zinc-200 transition-shadow hover:shadow-lg">
      {/* Image Container */}
      <div
        className="relative h-56 overflow-hidden bg-zinc-50 cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {/* Add a focus ring for keyboard accessibility */}
        <div className="absolute inset-0 rounded-t-lg focus-within:ring-2 focus-within:ring-teal-500" />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <button
          onClick={handleClick}
          className="font-semibold text-base text-zinc-900 text-left hover:text-teal-600 transition-colors focus:outline-none focus-visible:text-teal-600"
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