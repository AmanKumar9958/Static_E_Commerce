import React from 'react'

const ProductModal = ({product, onClose}) => {
  if(!product) return null
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <button onClick={onClose} className="px-3 py-1 bg-slate-100 rounded hover:cursor-pointer">Close</button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-80 overflow-hidden rounded">
            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-slate-700 mb-4">Category: <span className="font-medium">{product.category}</span></p>
            <p className="text-slate-700 mb-4">Available sizes:</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {product.sizes.map(s => (
                <div key={s} className="px-3 py-1 border rounded text-sm">{s}</div>
              ))}
            </div>
            <div className="text-2xl font-bold text-accent mb-4">₹{product.price.toFixed(2)}</div>
            <button className="bg-accent text-white px-4 py-2 rounded">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
