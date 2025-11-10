import React, { useEffect, useState } from 'react'

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-white w-12 h-12 shadow-lg flex items-center justify-center hover:bg-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l4.72-4.72a.75.75 0 111.06 1.06l-6 6-.02.02a.76.76 0 01-1.06-.02l-6-6a.75.75 0 111.06-1.06l4.72 4.72V4.5A.75.75 0 0112 3.75z" clipRule="evenodd" /></svg>
    </button>
  )
}

export default BackToTopButton
