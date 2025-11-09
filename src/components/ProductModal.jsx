import React, { useEffect, useRef } from 'react'
import LazyImage from './LazyImage'

const ProductModal = ({ product, onClose }) => {
  const closeButtonRef = useRef(null)

  // Auto-focus the close button when the modal opens
  useEffect(() => {
    if (product) {
      closeButtonRef.current?.focus()
    }
  }, [product])

  // Add listener for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!product) return null

  return (
    // Overlay: click to close
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Box: stop click propagation */}
      <div
        className="bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-200">
          <h3 className="text-xl font-bold text-zinc-900">{product.name}</h3>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            aria-label="Close product modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="w-full h-80 overflow-hidden rounded-md bg-zinc-50">
            <LazyImage src={product.image} alt={product.name} className="w-full h-full object-contain" wrapperClassName="w-full h-full" />
          </div>
          {/* Details */}
          <div>
            <div className="flex gap-2 mb-4">
              <span className="font-medium bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm">{product.category}</span>
              <span className="font-medium bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm">{product.gender}</span>
            </div>
            
            <p className="text-zinc-700 mb-2 font-medium">Available sizes:</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {product.sizes.map(s => (
                <div key={s} className="px-3 py-1 border border-zinc-300 rounded-md text-sm text-zinc-800">{s}</div>
              ))}
            </div>

            <div className="text-3xl font-bold text-teal-600 mb-6">
              ₹{product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal