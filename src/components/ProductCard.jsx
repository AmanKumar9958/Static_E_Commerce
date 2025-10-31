import React from 'react'

const ProductCard = ({product, onClick}) => {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 cursor-pointer"
          onClick={() => onClick(product)}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm">{product.name}</h3>
        <p className="text-xs text-slate-500">{product.sizes.join(' • ')}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-accent font-bold">₹{product.price.toFixed(2)}</div>
          <div className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{product.gender}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
