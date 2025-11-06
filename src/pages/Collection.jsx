import React, { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

const Collection = ({ products, searchQuery }) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('none')
  const [selected, setSelected] = useState(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filters = ['All', 'Men', 'Women', 'Kids', 'School dress', 'Readymade garments', 'Shoes']

  const filtered = useMemo(() => {
    // Start with a copy of the full product list
    let list = products.slice()

    // 1. Apply search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q))
    }

    // 2. Apply active category/gender filter
    if (activeFilter !== 'All') {
      if (['Men', 'Women', 'Kids'].includes(activeFilter)) {
        // Handle gender filters
        list = list.filter(p => p.gender === activeFilter)
      } else {
        // Handle category filters
        list = list.filter(p => p.category === activeFilter)
      }
    }

    // 3. Apply sorting
    if (sortBy === 'low') list.sort((a, b) => a.price - b.price)
    if (sortBy === 'high') list.sort((a, b) => b.price - a.price)
    
    return list
  }, [products, activeFilter, sortBy, searchQuery])

  // Helper function for styling filter buttons
  const filterButtonClasses = (f) =>
    `hover:cursor-pointer px-3 py-2 rounded-md transition-all duration-150 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 ${
      activeFilter === f
        ? 'bg-teal-600 text-white shadow-sm' // Active state
        : 'bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-100' // Inactive state
    }`

  // Helper variable for styling the select dropdown
  const selectClasses = "px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-zinc-800"

  // Reusable Filter Controls component (for both mobile and desktop)
  const FilterControls = () => (
    <>
      <div className="flex gap-3 flex-wrap">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={filterButtonClasses(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="sort-by" className="text-sm font-medium text-zinc-800">Sort:</label>
        <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClasses}>
          <option value="none">None</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
    </>
  )

  return (
    // Page background
    <div className="bg-zinc-50 py-6 md:py-8 min-h-screen">
      <div className="container-max mx-auto px-4 md:px-6">
        
        {/* Mobile: Show filters toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setFiltersOpen(o => !o)}
            aria-expanded={filtersOpen}
            aria-controls="mobile-filters"
            className="w-full flex items-center justify-between px-4 py-2 border border-zinc-300 rounded-md bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <span className="flex items-center gap-2 font-medium text-zinc-800">
              {/* Filter Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filters
            </span>
            {/* Chevron Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform text-zinc-600 ${filtersOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
          </button>
          {filtersOpen && (
            <div id="mobile-filters" className="mt-3 p-4 bg-white rounded-md border border-zinc-200 space-y-4">
              <FilterControls />
            </div>
          )}
        </div>

        {/* Desktop/Tablet: filters bar visible */}
        <div className="hidden md:flex mb-6 items-center justify-between gap-4">
          <FilterControls />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onClick={(prod) => setSelected(prod)} />
          ))}
        </div>

        {/* Product Modal */}
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  )
}

export default Collection