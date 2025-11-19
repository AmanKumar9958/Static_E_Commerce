import React from 'react'
import { motion } from 'framer-motion'

const directions = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
}

const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.45,
  className = '',
}) => {
  const offset = directions[direction] || directions.up
  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
