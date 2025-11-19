import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import Reveal from '../components/Reveal'
import { motion } from 'framer-motion'

const Collection = ({ products, searchQuery }) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('none')
  const [selected, setSelected] = useState(null)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const PAGE_SIZE = 8
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [isPaging, setIsPaging] = useState(false)
  const [lastBatchStart, setLastBatchStart] = useState(0)

  const filters = ['All', 'Men', 'Women', 'Kids', 'School dress', 'Readymade garments', 'Footwear']

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
        // Handle gender filters, allowing multi-gender strings like 'Men, Women'
        list = list.filter(p => {
          const genders = p.gender.split(',').map(g => g.trim())
          return genders.includes(activeFilter)
        })
      } else {
        // Handle category filters; support legacy 'Shoes' data for Footwear
        if (activeFilter === 'Footwear') {
          list = list.filter(p => p.category === 'Footwear' || p.category === 'Shoes')
        } else {
          list = list.filter(p => p.category === activeFilter)
        }
      }
    }

    // 3. Apply sorting
    if (sortBy === 'low') list.sort((a, b) => a.price - b.price)
    if (sortBy === 'high') list.sort((a, b) => b.price - a.price)
    
    return list
  }, [products, activeFilter, sortBy, searchQuery])

  // Reset visible items when filters/search change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
    setIsPaging(false)
    setLastBatchStart(0)
  }, [activeFilter, searchQuery])

  // "Show more" button will increment visible items in batches of 8
  const showMore = () => {
    if (isPaging) return
    setIsPaging(true)
    const nextCount = Math.min(visibleCount + PAGE_SIZE, filtered.length)
    setLastBatchStart(visibleCount)
    // Simulate async/network delay so spinner is visible and future API can plug in
    setTimeout(() => {
      setVisibleCount(nextCount)
      setIsPaging(false)
    }, 350)
  }

  // **UI/UX CHANGE:** Updated inactive button style to match blue theme
  const filterButtonClasses = (f) =>
    `relative overflow-hidden hover:cursor-pointer px-4 py-2 rounded-full transition-all duration-150 text-sm font-medium
     focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
     ${activeFilter === f ? 'text-heading' : 'bg-white text-heading border border-primary/20 hover:bg-primary/10'}`

  // **UI/UX CHANGE:** Updated select style to match blue theme
  const selectClasses = "px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-heading"

  // Reusable Filter Controls component (for both mobile and desktop)
  const FilterControls = ({ layoutScope = 'default' }) => (
    <>
      <div className="flex gap-3 flex-wrap">
        {filters.map((f) => (
          <motion.button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={filterButtonClasses(f)}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.3 }}
          >
            {activeFilter === f && (
              <motion.span
                layoutId={`filterPillBg-${layoutScope}`}
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 520, damping: 34, mass: 0.3 }}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{f}</span>
          </motion.button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor="sort-by" className="text-sm font-medium text-heading">Sort:</label>
        <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClasses}>
          <option value="none">None</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
    </>
  )

  return (
    // **UI/UX CHANGE:** Changed from bg-zinc-50 to bg-page (light blue tint)
    <div className="bg-page py-6 md:py-8 min-h-screen">
      <div className="container-max mx-auto px-4 md:px-6">
        
        {/* Mobile: Show filters toggle */}
        <div className="md:hidden mb-4">
          <Reveal direction="up">
            <button
              onClick={() => setFiltersOpen(o => !o)}
              aria-expanded={filtersOpen}
              aria-controls="mobile-filters"
              className="w-full flex items-center justify-between px-4 py-2 border border-primary/20 rounded-md bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="flex items-center gap-2 font-medium text-heading">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                Filters
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform text-body/80 ${filtersOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
            </button>
          </Reveal>
          {filtersOpen && (
            <Reveal direction="up">
              <div id="mobile-filters" className="mt-3 p-4 bg-white rounded-md border border-primary/20 space-y-4">
                <FilterControls layoutScope="mobile" />
              </div>
            </Reveal>
          )}
        </div>

        {/* Desktop/Tablet: filters bar visible */}
        <Reveal direction="up">
          <div className="hidden md:flex mb-6 items-center justify-between gap-4">
            <FilterControls layoutScope="desktop" />
          </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.slice(0, visibleCount).map((p, i) => (
            <Reveal key={p.id} direction="up">
              <div className={i >= lastBatchStart ? 'animate-fade-in-up' : ''}>
                <ProductCard product={p} onClick={(prod) => setSelected(prod)} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Show more button */}
        {visibleCount < filtered.length && (
          <Reveal direction="up">
            <div className="flex justify-center pt-6">
              <button
                onClick={showMore}
                disabled={isPaging}
                className="px-5 py-2 rounded-md bg-primary text-heading font-medium hover:bg-primary/80 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center gap-2"
              >
                {isPaging && <span className="inline-block h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />}
                <span>Show more</span>
              </button>
            </div>
          </Reveal>
        )}

        {/* Product Modal */}
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </div>
    </div>
  )
}

export default Collection