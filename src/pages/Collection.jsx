import React, {useMemo, useState} from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

const Collection = ({products, searchQuery}) => {
    const [genderFilter, setGenderFilter] = useState('All')
    const [categoryFilter, setCategoryFilter] = useState('All')
    const [sortBy, setSortBy] = useState('none')
    const [selected, setSelected] = useState(null)

    const filtered = useMemo(() => {
        let list = products.slice()
        if(searchQuery) {
        const q = searchQuery.toLowerCase()
        list = list.filter(p => p.name.toLowerCase().includes(q))
        }
        if(genderFilter !== 'All') list = list.filter(p => p.gender === genderFilter)
        if(categoryFilter !== 'All') list = list.filter(p => p.category === categoryFilter)
        if(sortBy === 'low') list.sort((a,b) => a.price - b.price)
        if(sortBy === 'high') list.sort((a,b) => b.price - a.price)
        return list
    }, [products, genderFilter, categoryFilter, sortBy, searchQuery])

    const genders = ['All','Men','Women','Kids']
    const categories = ['All','School dress','Readymade garments','coporate uniform']

    return (
        <div className="container-max mx-auto px-6 py-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex gap-3">
            {genders.map(g => (
                <button
                key={g}
                onClick={() => setGenderFilter(g)}
                className={`px-3 py-2 rounded transition-colors duration-150 focus:outline-none focus:ring-2 ${genderFilter===g ? 'bg-[#0f172a] text-white shadow-sm border-transparent' : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50'}`}
                >{g}</button>
            ))}
            </div>

            <div className="flex gap-3">
            {categories.map(c => (
                <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-3 py-2 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#0f172a] ${categoryFilter===c ? 'bg-[#0f172a] text-white shadow-sm border-transparent' : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50'}`}
                >{c}</button>
            ))}
            </div>

            <div className="flex items-center gap-3">
            <label className="text-sm">Sort:</label>
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="px-3 py-2 border rounded">
                <option value="none">None</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(p => (
            <ProductCard key={p.id} product={p} onClick={(prod)=>setSelected(prod)} />
            ))}
        </div>

        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
        </div>
    )
}

export default Collection
