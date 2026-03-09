import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const values = [
  {
    icon: '◎',
    title: 'Intentional Curation',
    desc: 'Every item in our collection is hand-selected by our team for quality, design, and longevity.'
  },
  {
    icon: '◈',
    title: 'Timeless Design',
    desc: 'We prioritize pieces that transcend trends — investments in your wardrobe that age beautifully.'
  },
  {
    icon: '◇',
    title: 'Ethical Sourcing',
    desc: 'Partnering with manufacturers who share our commitment to responsible, sustainable production.'
  },
]

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-light/20 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-6">Our Story</span>
            <h1 className="font-display text-6xl lg:text-7xl font-semibold text-charcoal leading-tight mb-8">
              Designed for
              <br />
              <em className="not-italic text-gold">Those Who Notice</em>
            </h1>
            <p className="font-body text-xl text-stone leading-relaxed max-w-2xl mx-auto">
              LUMIS was founded on a simple belief: that the objects we surround ourselves with matter. Not just functionally, but aesthetically and emotionally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="About LUMIS"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-6">Who We Are</span>
            <h2 className="font-display text-4xl font-semibold text-charcoal mb-6">
              Born from a Passion for Beautiful Things
            </h2>
            <div className="space-y-5 font-body text-stone leading-relaxed">
              <p>
                Founded in 2023, LUMIS began as a small editorial project cataloguing the world's most beautifully designed everyday objects. What started as a personal obsession became a mission.
              </p>
              <p>
                We believe that good design isn't a luxury — it's a language. The language of care, intention, and craft. Every product we carry tells a story of materials chosen thoughtfully and processes executed with precision.
              </p>
              <p>
                Our collection spans shoes, outerwear, accessories, and technology — unified by a single curatorial standard: if we wouldn't use it ourselves every day, we won't sell it to you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-4">What Drives Us</span>
            <h2 className="font-display text-4xl font-semibold text-cream">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-cream/5 rounded-2xl p-8 border border-cream/8 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="font-mono text-3xl text-gold mb-5">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">{v.title}</h3>
                <p className="font-body text-sm text-cream/50 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs tracking-widest text-gold uppercase block mb-8">Our Mission</span>
          <blockquote className="font-display text-3xl lg:text-4xl font-semibold text-charcoal leading-snug mb-8">
            "To make excellent design accessible — and to remind the world that beauty is never incidental."
          </blockquote>
          <p className="font-body text-stone">— The LUMIS Founding Team</p>
        </motion.div>
      </section>
    </PageWrapper>
  )
}
