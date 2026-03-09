import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const [placed, setPlaced] = useState(false)

  const handlePlace = () => {
    setPlaced(true)
    setTimeout(clearCart, 1000)
  }

  if (placed) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <svg className="w-10 h-10 text-charcoal" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </motion.div>
            <h1 className="font-display text-4xl font-semibold text-charcoal mb-4">Order Placed!</h1>
            <p className="font-body text-stone mb-8">Thank you for shopping with LUMIS. Your order is being prepared with care.</p>
            <Link to="/" className="btn-primary inline-block">Back to Home</Link>
          </motion.div>
        </div>
      </PageWrapper>
    )
  }

  if (items.length === 0) {
    return (
      <PageWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl text-charcoal mb-4">No items to checkout</h1>
            <Link to="/shop" className="btn-primary inline-block">Start Shopping</Link>
          </div>
        </div>
      </PageWrapper>
    )
  }

  const shipping = total >= 200 ? 0 : 12
  const grandTotal = total + shipping

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-3">Step 2 of 2</span>
          <h1 className="font-display text-5xl font-semibold text-charcoal">Checkout</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">Order Summary</h2>

            <div className="space-y-4 mb-8">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-charcoal/8">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone/5 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body text-sm font-medium text-charcoal">{item.name}</h4>
                    <p className="font-mono text-xs text-stone mt-0.5">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-mono text-sm text-charcoal">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="bg-stone/5 rounded-2xl p-6 space-y-3">
              <div className="flex justify-between font-body text-sm text-stone">
                <span>Subtotal</span>
                <span className="font-mono text-charcoal">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-stone">
                <span>Shipping</span>
                <span className="font-mono text-charcoal">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="border-t border-charcoal/10 pt-3 flex justify-between font-body font-medium text-charcoal">
                <span>Total</span>
                <span className="font-mono text-xl">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>

          {/* Place Order */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">Shipping Details</h2>

            <div className="space-y-4 mb-8">
              {[
                { label: 'Full Name', placeholder: 'Alex Johnson' },
                { label: 'Email', placeholder: 'alex@example.com' },
                { label: 'Address', placeholder: '123 Main Street' },
                { label: 'City', placeholder: 'New York' },
              ].map(({ label, placeholder }) => (
                <div key={label}>
                  <label className="font-body text-xs text-stone tracking-wide block mb-1.5">{label}</label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full border border-charcoal/15 rounded-xl px-4 py-3 font-body text-sm text-charcoal bg-white placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
              ))}
            </div>

            <div className="bg-gold-light/30 rounded-2xl p-5 mb-8">
              <p className="font-mono text-xs text-charcoal/60 mb-1">Demo Mode</p>
              <p className="font-body text-sm text-charcoal/70">This is a visual checkout. No real payment is processed.</p>
            </div>

            <motion.button
              onClick={handlePlace}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full btn-primary py-4 text-base"
            >
              Place Order — ${grandTotal.toFixed(2)}
            </motion.button>

            <Link to="/cart" className="block text-center font-body text-sm text-stone hover:text-gold transition-colors mt-4">
              ← Back to Cart
            </Link>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
