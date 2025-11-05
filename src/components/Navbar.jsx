import React, { useEffect, useMemo, useState, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const placeholders = ['Shirt', 'T-Shirts', 'Dress', 'Skirt', 'Blazer', 'School Shirt', 'Uniform', 'Trousers']

const Navbar = ({ onSearch, currentPath }) => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [phIndex, setPhIndex] = useState(0)
  const inputRef = useRef(null)
  const menuButtonRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const id = setInterval(() => setPhIndex(i => (i + 1) % placeholders.length), 2500)
    return () => clearInterval(id)
  }, [])

  const placeholder = useMemo(() => `Search ${placeholders[phIndex]}...`, [phIndex])

  const clear = () => {
    setText('')
    onSearch('')
    inputRef.current?.focus()
  }

  const submitSearch = (value) => {
    onSearch(value)
    navigate('/collection')
    setOpen(false) // Close mobile menu on search
  }

  // close menu on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus() // Return focus to hamburger button
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? 'text-indigo-600 bg-indigo-50'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
    } focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`

  const mobileNavLinkClasses = (path) =>
    `w-full text-left px-3 py-3 rounded-md font-medium ${
      currentPath === path
        ? 'text-indigo-600 bg-indigo-50'
        : 'text-slate-700 hover:bg-slate-100'
    }`

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Brand: left */}
          <div className="flex items-center gap-4 flex-1">
            <Link to="/" className="text-primary hover:cursor-pointer flex flex-col group rounded-md p-1 -ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
              <span className='text-lg md:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors'>SKS Mart - Barbigha</span>
              <span className='text-xs sm:text-sm text-slate-500'>1st Floor, Jagdamba Market</span>
            </Link>
          </div>

          {/* Nav: center */}
          <div className="hidden md:flex justify-center flex-1">
            <nav aria-label="Primary" className="flex gap-4 items-center">
              <NavLink to="/" end className={navLinkClasses}>Home</NavLink>
              <NavLink to="/collection" className={navLinkClasses}>Collection</NavLink>
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            </nav>
          </div>

          {/* Actions: right */}
          <div className="flex items-center gap-4 justify-end flex-1">
            {/* Search Input */}
            <div className="relative">
              <label htmlFor="site-search" className="sr-only">Search products</label>
              <button
                type="button"
                onClick={() => submitSearch(text)}
                className="absolute inset-y-0 left-2 flex items-center text-slate-400 p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Search"
                title="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" /></svg>
              </button>
              <input
                id="site-search"
                ref={inputRef}
                value={text}
                onChange={(e) => { setText(e.target.value); onSearch(e.target.value) }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    submitSearch(text)
                  }
                }}
                placeholder={placeholder}
                className="border border-slate-300 rounded-md pl-9 pr-10 py-2 w-36 md:w-56 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                aria-label="Search products"
              />
              {text && (
                <button
                  onClick={clear}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="Clear search input"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                ref={menuButtonRef}
                onClick={() => setOpen(o => !o)}
                aria-controls="mobile-menu"
                aria-expanded={open}
                aria-label="Toggle navigation menu"
                className="p-2 rounded border border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div id="mobile-menu" className="md:hidden mt-3 border-t border-slate-200 pt-3" role="menu" aria-labelledby="mobile-menu-button">
            <div className="flex flex-col space-y-1">
              <button role="menuitem" onClick={() => { navigate('/'); setOpen(false) }} className={mobileNavLinkClasses('/')}>Home</button>
              <button role="menuitem" onClick={() => { navigate('/collection'); setOpen(false) }} className={mobileNavLinkClasses('/collection')}>Collection</button>
              <button role="menuitem" onClick={() => { navigate('/about'); setOpen(false) }} className={mobileNavLinkClasses('/about')}>About</button>
              <button role="menuitem" onClick={() => { navigate('/contact'); setOpen(false) }} className={mobileNavLinkClasses('/contact')}>Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar