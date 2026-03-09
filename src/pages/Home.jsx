import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

const CATEGORIES = ['Shoes', 'Jackets', 'Accessories', 'Electronics']

export default function Home() {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    fetch('/api/products/featured')
      .then(r => r.json())
      .then(setFeatured)
      .catch(() => {
        // fallback: use static data when backend isn't running
        import('../data/products.js').then(m => setFeatured(m.default.filter(p => p.featured)))
      })
  }, [])

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated BG */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-bl from-gold-light/40 via-cream to-transparent rounded-bl-[80px]"
          />
          <motion.div
            animate={{ scale: [1.05, 1, 1.05], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-mono text-xs tracking-widest text-gold uppercase mb-6 block">
                New Collection — 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl lg:text-7xl xl:text-8xl font-semibold text-charcoal leading-[1.05] mb-6"
            >
              Wear What
              <br />
              <em className="text-gold not-italic">Defines</em>
              <br />
              You.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-body text-lg text-stone max-w-md mb-10 leading-relaxed"
            >
              Curated essentials for the discerning modern wardrobe. Premium quality, thoughtfully designed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
              <Link to="/about" className="btn-ghost">
                Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-8 mt-14"
            >
              {[['12+', 'Premium Products'], ['4', 'Categories'], ['100%', 'Quality Assured']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-semibold text-charcoal">{n}</div>
                  <div className="font-body text-xs text-stone tracking-wide">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                  alt="Hero product"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-8 bg-white rounded-2xl p-4 card-shadow z-20"
            >
              <div className="font-mono text-xs text-stone mb-1">Trending Now</div>
              <div className="font-display text-sm font-semibold text-charcoal">Meridian Watch</div>
              <div className="font-mono text-gold text-sm mt-1">$520</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-charcoal/30 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-3">Handpicked</span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal">
              Featured Pieces
            </h2>
          </div>
          <Link to="/shop" className="btn-ghost self-start sm:self-auto">View All →</Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Divider Banner */}
      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl lg:text-4xl italic text-cream/80 leading-relaxed"
          >
            "Style is a way to say who you are without having to speak."
          </motion.blockquote>
          <div className="mt-4 font-mono text-xs text-gold/60 tracking-widest">— RACHEL ZOE</div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-3">Explore</span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal">Shop by Category</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat} category={cat} index={i} />
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
