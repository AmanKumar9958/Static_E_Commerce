import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const spinnerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const LoadingOverlay = ({ show = false }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-md"
          aria-live="polite"
          aria-busy={show}
        >
          <motion.div
            variants={spinnerVariants}
            className="flex items-center gap-3 text-neutral"
            role="status"
          >
            <span className="sr-only">Loading</span>
            <svg className="h-10 w-10 text-neutral" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity=".2"/>
              <motion.circle
                cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                strokeDasharray="56"
                strokeDashoffset="42"
                animate={{ rotate: 360 }}
                style={{ originX: '50%', originY: '50%' }}
                transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingOverlay
