import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0 }}
      layout
      className="flex gap-5 py-6 border-b border-charcoal/8"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-stone/5">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-display text-base font-semibold text-charcoal mb-1">{item.name}</h4>
        <p className="font-mono text-sm text-stone mb-3">${item.price} each</p>

        <div className="flex items-center gap-4">
          {/* Quantity Control */}
          <div className="flex items-center gap-2 bg-stone/8 rounded-full px-1 py-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-200 text-sm font-medium"
            >
              −
            </button>
            <span className="font-mono text-sm w-5 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-200 text-sm font-medium"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-stone hover:text-red-400 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-right">
        <span className="font-mono text-base font-medium text-charcoal">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </motion.div>
  )
}
