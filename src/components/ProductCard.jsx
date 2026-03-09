import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${product.id}`} className="block group">
        <div className="bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square bg-stone/5">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              style={{ transform: 'scale(1)' }}
              whileHover={{ scale: 1.08 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute top-3 right-3">
              <span className="bg-cream/90 backdrop-blur-sm text-charcoal font-mono text-xs px-2.5 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            <h3 className="font-display text-lg font-semibold text-charcoal mb-1 group-hover:text-gold transition-colors duration-200">
              {product.name}
            </h3>
            <p className="font-body text-sm text-stone mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="font-mono text-lg font-medium text-charcoal">
                ${product.price}
              </span>
              <div className="flex gap-2">
                <motion.button
                  onClick={handleAdd}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-xs font-body font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    added
                      ? 'bg-gold text-charcoal'
                      : 'bg-charcoal text-cream hover:bg-gold hover:text-charcoal'
                  }`}
                >
                  {added ? '✓ Added' : 'Add to Cart'}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
