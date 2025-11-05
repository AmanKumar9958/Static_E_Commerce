import React from 'react'

const ProductCard = ({ product, onClick }) => {
  // This makes both the image and the title clickable,
  // which is a common and accessible pattern.
  const handleClick = () => {
    onClick(product)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group border border-slate-200 transition-shadow hover:shadow-xl">
      {/* Image Container */}
      <div
        className="relative h-56 overflow-hidden bg-slate-50 cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {/* Add a focus ring for keyboard accessibility */}
        <div className="absolute inset-0 rounded-t-lg focus-within:ring-2 focus-within:ring-indigo-500" />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <button
          onClick={handleClick}
          className="font-semibold text-base text-slate-800 text-left hover:text-indigo-600 transition-colors focus:outline-none focus-visible:text-indigo-600"
        >
          {product.name}
        </button>
        <p className="text-sm text-slate-500 mt-1">{product.sizes.join(' • ')}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xl font-bold text-slate-900">
            ₹{product.price.toFixed(2)}
          </div>
          <div className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{product.gender}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard