import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-semibold tracking-widest text-cream">LUMIS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1"></span>
            </div>
            <p className="font-body text-sm leading-relaxed text-cream/50 max-w-xs">
              Curated goods for the modern aesthetic. Quality over quantity, always.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[['/', 'Home'], ['/shop', 'Shop'], ['/cart', 'Cart'], ['/about', 'About']].map(([to, label]) => (
                <Link key={to} to={to} className="font-body text-sm text-cream/50 hover:text-gold transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-5">Follow</h4>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'Pinterest'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="font-body text-sm text-cream/50 hover:text-gold transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-cream/30">© 2026 LUMIS Store. All rights reserved.</p>
          <p className="font-mono text-xs text-cream/20">Crafted with intention.</p>
        </div>
      </div>
    </footer>
  )
}
