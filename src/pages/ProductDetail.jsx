import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(r => r.json())
      .then(setProduct)
      .catch(async () => {
        const m = await import('../data/products.js')
        setProduct(m.default.find(p => p.id === parseInt(id)))
      })
    window.scrollTo(0, 0)
  }, [id])

  const handleAdd = () => {
    addToCart(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
      </div>
    )
  }

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-10 font-mono text-xs text-stone"
        >
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-28"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-stone/5 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-5 left-5">
                <span className="bg-cream/90 backdrop-blur-sm text-charcoal font-mono text-xs px-3 py-1.5 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-4">
              {product.category}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal mb-4">
              {product.name}
            </h1>
            <div className="font-mono text-3xl text-charcoal mb-6">${product.price}</div>

            <p className="font-body text-base text-stone leading-relaxed mb-10 border-b border-charcoal/8 pb-10">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-body text-sm text-stone mb-3 block tracking-wide">Quantity</label>
              <div className="flex items-center gap-3 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-200 text-lg"
                >
                  −
                </button>
                <span className="font-mono text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-200 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <motion.button
                onClick={handleAdd}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`flex-1 py-4 rounded-full font-body font-medium tracking-wide text-sm transition-all duration-300 ${
                  added
                    ? 'bg-gold text-charcoal'
                    : 'bg-charcoal text-cream hover:bg-gold hover:text-charcoal'
                }`}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </motion.button>
              <Link
                to="/cart"
                className="flex-1 py-4 rounded-full font-body font-medium tracking-wide text-sm text-center border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
              >
                View Cart
              </Link>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Product ID', `#${product.id.toString().padStart(4, '0')}`],
                ['Category', product.category],
                ['Availability', 'In Stock'],
                ['Shipping', 'Free over $200'],
              ].map(([label, value]) => (
                <div key={label} className="bg-stone/5 rounded-xl p-4">
                  <div className="font-mono text-xs text-stone mb-1">{label}</div>
                  <div className="font-body text-sm font-medium text-charcoal">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
