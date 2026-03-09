import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import ProductCard from '../components/ProductCard'

const CATEGORIES = ['All', 'Shoes', 'Jackets', 'Accessories', 'Electronics']

export default function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(data => { setProducts(data); setLoading(false) })
      .catch(async () => {
        const m = await import('../data/products.js')
        setProducts(m.default)
        setLoading(false)
      })
  }, [])

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-3">All Products</span>
          <h1 className="font-display text-5xl font-semibold text-charcoal">The Collection</h1>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (cat === 'All') {
                  setSearchParams({})
                } else {
                  setSearchParams({ category: cat })
                }
              }}
              className={`font-body text-sm px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-charcoal text-cream'
                  : 'bg-white text-stone hover:text-charcoal border border-charcoal/10 hover:border-charcoal/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Count */}
        <div className="mb-8">
          <span className="font-mono text-sm text-stone">{filtered.length} products</span>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl aspect-[3/4] animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  )
}
