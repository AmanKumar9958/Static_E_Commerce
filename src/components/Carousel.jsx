import React, { useEffect, useRef, useState } from 'react'
import LazyImage from './LazyImage'

const Carousel = ({slides = [], interval = 3000}) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(()=>{
    if(paused) return
    timerRef.current = setInterval(()=>{
      setIndex(i => (i + 1) % slides.length)
    }, interval)
    return ()=> clearInterval(timerRef.current)
  },[slides.length, interval, paused])

  // navigation uses setIndex directly; keyboard handler below updates index

  useEffect(()=>{
    const onKey = (e) => {
      if(e.key === 'ArrowLeft') setIndex(i => (i - 1 + slides.length) % slides.length)
      if(e.key === 'ArrowRight') setIndex(i => (i + 1) % slides.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slides.length])

  if(!slides || slides.length === 0) return null

  return (
    <div
      className="w-full h-80 relative rounded overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.id || i}
          className={`absolute inset-0 transition-opacity duration-700 ${i===index? 'opacity-100 z-10' : 'opacity-0 z-0'} flex items-center justify-end`}
          aria-hidden={i===index? 'false' : 'true'}
        >
          {/* gradient to improve left-side text contrast */}
          <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0))'}} />
          <LazyImage src={s.image} alt={s.alt || ''} eager={i===0} className="h-full object-contain object-right" wrapperClassName="h-full w-full" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white drop-shadow-lg">
            <h3 className="text-3xl font-extrabold">{s.title}</h3>
            {s.subtitle && <p className="mt-2 text-sm">{s.subtitle}</p>}
            {s.cta && (
              <a 
                href={s.cta.href} 
                className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/80 transition-colors"
              >
                {s.cta.label}
              </a>
            )}
          </div>
        </div>
      ))}

      {/* no arrow controls: dots below handle navigation */}

      {/* indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-3">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={()=>setIndex(i)}
            aria-label={`Go to slide ${i+1}`}
            aria-current={i===index}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-transform ${i===index? 'bg-white scale-125' : 'bg-white/60 hover:scale-110'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel