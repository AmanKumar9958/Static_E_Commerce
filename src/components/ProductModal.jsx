import React, { useCallback, useEffect, useRef, useState } from 'react'
import LazyImage from './LazyImage'

const ProductModal = ({ product, onClose }) => {
  const closeButtonRef = useRef(null)
  const [isClosing, setIsClosing] = useState(false)
  const closeTimerRef = useRef(null)

  // Close handler must be defined before any hook that depends on it
  const handleClose = useCallback(() => {
    if (isClosing) return
    setIsClosing(true)
    closeTimerRef.current = setTimeout(() => {
      onClose()
    }, 180)
  }, [isClosing, onClose])

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
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClose])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  if (!product) return null

  return (
    // Overlay: click to close
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 p-4 ${isClosing ? 'animate-overlay-out' : 'animate-overlay-in'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Box: stop click propagation */}
      <div
        className={`bg-white rounded-lg max-w-2xl w-full mx-4 overflow-hidden shadow-xl ${isClosing ? 'animate-pop-out' : 'animate-pop-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-200">
          <h3 className="text-xl font-bold text-heading">{product.name}</h3>
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
              <span className="font-medium bg-primary/10 text-body px-3 py-1 rounded-full text-sm border border-primary/40">{product.category}</span>
              <span className="font-medium bg-primary/10 text-body px-3 py-1 rounded-full text-sm border border-primary/40">{product.gender}</span>
            </div>
            
            <p className="text-body mb-2 font-medium">Available sizes:</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {product.sizes.map(s => (
                <div key={s} className="px-3 py-1 border border-primary/40 rounded-md text-sm text-body bg-white">{s}</div>
              ))}
            </div>

            <div className="text-3xl font-bold text-primary mb-6">
              ₹{product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal