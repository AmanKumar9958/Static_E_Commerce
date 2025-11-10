import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to top on every route pathname change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    // Use instant jump to avoid motion sickness when navigating
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default ScrollToTop
