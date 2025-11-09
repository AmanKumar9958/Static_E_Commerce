import React, { useEffect, useRef, useState } from 'react'

// A lightweight lazy-loading image with a skeleton placeholder and fade-in.
// Props:
// - src, alt: image source and alt text
// - className: classes applied to the <img>
// - wrapperClassName: classes applied to the wrapping div (useful for sizing)
// - placeholderClassName: classes for the skeleton placeholder
// - eager: if true, load immediately (e.g., hero image)
// - onLoad: optional callback when image finishes loading
const LazyImage = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  placeholderClassName = 'bg-zinc-200 animate-pulse',
  eager = false,
  onLoad,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(eager)
  const ref = useRef(null)

  useEffect(() => {
    if (eager || shouldLoad) return
    const node = ref.current
    if (!node || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          io.disconnect()
        }
      })
    }, { root: null, rootMargin: '200px', threshold: 0.01 })
    io.observe(node)
    return () => io.disconnect()
  }, [eager, shouldLoad])

  const handleLoaded = (e) => {
    setLoaded(true)
    onLoad && onLoad(e)
  }

  return (
    <div ref={ref} className={`relative ${wrapperClassName}`}>
      {!loaded && (
        <div className={`absolute inset-0 ${placeholderClassName}`} aria-hidden="true" />)
      }
      {shouldLoad ? (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoaded}
          loading={eager ? 'eager' : 'lazy'}
          className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          {...rest}
        />
      ) : (
        // Reserve layout space to prevent shift; consumers should size the wrapper
        <div aria-hidden="true" className={`${className}`} />
      )}
    </div>
  )
}

export default LazyImage
