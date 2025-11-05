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
    let list = products.slice()
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q))
    }
    if (activeFilter !== 'All') {
      if (['Men', 'Women', 'Kids'].includes(activeFilter)) {
        list = list.filter(p => p.gender === activeFilter)
      } else {
        list = list.filter(p => p.category === activeFilter)
      }
    }
    if (sortBy === 'low') list.sort((a, b) => a.price - b.price)
    if (sortBy === 'high') list.sort((a, b) => b.price - a.price)
    return list
  }, [products, activeFilter, sortBy, searchQuery])

  const filterButtonClasses = (f) =>
    `hover:cursor-pointer px-3 py-2 rounded-md transition-all duration-150 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 ${
      activeFilter === f
        ? 'bg-slate-900 text-white shadow-sm'
        : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-100'
    }`

  const selectClasses = "px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"

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
        <label htmlFor="sort-by" className="text-sm font-medium">Sort:</label>
        <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClasses}>
          <option value="none">None</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
    </>
  )

  return (
    <div className="container-max mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Mobile: Show filters toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setFiltersOpen(o => !o)}
          aria-expanded={filtersOpen}
          aria-controls="mobile-filters"
          className="w-full flex items-center justify-between px-4 py-2 border border-slate-300 rounded-md bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="font-medium">{filtersOpen ? 'Hide filters' : 'Show filters'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
        </button>
        {filtersOpen && (
          <div id="mobile-filters" className="mt-3 p-4 bg-white rounded-md border border-slate-200 space-y-4">
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

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}

export default Collection