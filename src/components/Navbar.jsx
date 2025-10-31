import React, {useEffect, useMemo, useState, useRef} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const placeholders = ['Shirt','T-Shirts','Dress','Skirt','Blazer','School Shirt','Uniform','Trousers']

const Navbar = ({onSearch, currentPath}) => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [phIndex, setPhIndex] = useState(0)
    const inputRef = useRef(null)
    const menuButtonRef = useRef(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const id = setInterval(()=> setPhIndex(i => (i+1) % placeholders.length), 2500)
        return () => clearInterval(id)
    },[])

    const placeholder = useMemo(()=> `Search ${placeholders[phIndex]}...`, [phIndex])

    const clear = () => {
        setText('')
        onSearch('')
        inputRef.current?.focus()
    }

    // close menu on escape
    useEffect(()=>{
        const onKey = (e) => {
            if(e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    },[])

    return (
        <header className="bg-white shadow-sm">
            <div className="container-max mx-auto px-4 md:px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Brand: left */}
                    <div className="flex items-center gap-4 flex-1">
                        <Link to="/" className="text-2xl font-bold text-primary hover:cursor-pointer">SKS Mart</Link>
                    </div>

                    {/* Nav: center */}
                    <div className="hidden md:flex justify-center flex-1">
                        <nav aria-label="Primary" className="flex gap-8 items-center">
                                            <NavLink to="/" end className={({isActive})=> `px-3 py-2 ${isActive ? 'text-accent font-semibold' : 'text-slate-600'}`}>Home</NavLink>
                                            <NavLink to="/collection" className={({isActive})=> `px-3 py-2 ${isActive ? 'text-accent font-semibold' : 'text-slate-600'}`}>Collection</NavLink>
                        </nav>
                    </div>

                    {/* Actions: right */}
                    <div className="flex items-center gap-4 justify-end flex-1">
                        <div className="relative">
                            <label htmlFor="site-search" className="sr-only">Search products</label>
                            <span className="absolute inset-y-0 left-2 flex items-center text-slate-400" aria-hidden>
                                {/* search icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/></svg>
                            </span>
                                            <input
                                                id="site-search"
                                                ref={inputRef}
                                                value={text}
                                                onChange={(e)=>{setText(e.target.value); onSearch(e.target.value)}}
                                                placeholder={placeholder}
                                                className="border rounded-md pl-9 pr-10 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-accent"
                                                aria-label="Search products"
                                            />
                            {text ? (
                                <button onClick={clear} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500" aria-label="Clear search input">
                                    {/* clear icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                                </button>
                            ) : null}
                        </div>

                        <div className="md:hidden">
                                            <button
                                                ref={menuButtonRef}
                                                onClick={() => setOpen(o => !o)}
                                                aria-controls="mobile-menu"
                                                aria-expanded={open}
                                                aria-label="Toggle navigation menu"
                                                className="p-2 rounded border"
                                            >
                                {/* hamburger */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* mobile menu */}
                {open && (
                    <div id="mobile-menu" className="md:hidden mt-3 bg-white border rounded p-3" role="menu" aria-labelledby="mobile-menu-button">
                                    <div className="flex flex-col">
                                        <button role="menuitem" onClick={() => { navigate('/'); setOpen(false)}} className={`text-left px-2 py-2 ${currentPath==='/' ? 'text-accent font-semibold' : 'text-slate-700'}`}>Home</button>
                                        <button role="menuitem" onClick={() => { navigate('/collection'); setOpen(false)}} className={`text-left px-2 py-2 ${currentPath==='/collection' ? 'text-accent font-semibold' : 'text-slate-700'}`}>Collection</button>
                                    </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
