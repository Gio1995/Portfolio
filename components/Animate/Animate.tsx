import ReactNode from 'react'
import { motion } from 'framer-motion'

export default function Animate({children}) {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: .4 }}
        variants={{
            visible: { opacity:1, scale: 1},
            hidden: {opacity: 0, scale: 0.9}
        }}
    >
        {children}
    </motion.div>
  )
}
