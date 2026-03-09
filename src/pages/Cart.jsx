import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, total, count } = useCart()

  return (
    <PageWrapper>
      <div className="pt-28 pb-24 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-3">
            {count} {count === 1 ? 'item' : 'items'}
          </span>
          <h1 className="font-display text-5xl font-semibold text-charcoal">Your Cart</h1>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="font-display text-6xl mb-6">∅</div>
            <h2 className="font-display text-2xl text-charcoal mb-4">Your cart is empty</h2>
            <p className="font-body text-stone mb-8">Discover something you'll love.</p>
            <Link to="/shop" className="btn-primary inline-block">
              Explore the Collection
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2">
              <AnimatePresence>
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-8 card-shadow sticky top-28">
                <h2 className="font-display text-2xl font-semibold text-charcoal mb-8">Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-body text-sm text-stone">
                    <span>Subtotal ({count} items)</span>
                    <span className="font-mono text-charcoal">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm text-stone">
                    <span>Shipping</span>
                    <span className="font-mono text-charcoal">
                      {total >= 200 ? 'Free' : '$12.00'}
                    </span>
                  </div>
                  {total < 200 && (
                    <div className="bg-gold-light/40 rounded-xl p-3">
                      <p className="font-body text-xs text-charcoal/70">
                        Add ${(200 - total).toFixed(2)} more for free shipping
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-charcoal/8 pt-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="font-body font-medium text-charcoal">Total</span>
                    <span className="font-mono text-2xl font-medium text-charcoal">
                      ${(total + (total >= 200 ? 0 : 12)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link to="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full btn-primary py-4 text-center block"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>

                <Link to="/shop" className="block text-center font-body text-sm text-stone hover:text-gold transition-colors mt-4">
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}
