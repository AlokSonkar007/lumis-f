import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categoryImages = {
  Shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
  Jackets: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
  Accessories: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
  Electronics: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
}

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/shop?category=${category}`} className="block group relative overflow-hidden rounded-2xl aspect-[3/4]">
        <img
          src={categoryImages[category] || ''}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-xl font-semibold text-cream mb-2">{category}</h3>
          <div className="flex items-center gap-2">
            <span className="font-body text-sm text-cream/70 group-hover:text-gold transition-colors duration-300">
              Explore
            </span>
            <motion.span
              className="text-gold"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
