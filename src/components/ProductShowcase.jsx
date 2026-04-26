import { motion } from 'framer-motion';

const pillars = ['Softness', 'Durability', 'Export Quality', 'Custom Manufacturing'];

const ProductShowcase = () => (
  <section className="relative overflow-hidden bg-charcoal px-6 py-24 text-sand md:px-10">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal" aria-hidden="true" />

    <div className="relative mx-auto max-w-7xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Immersive Product Story</p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">Crafted textures engineered for performance and premium comfort.</h2>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {pillars.map((item, index) => (
          <motion.article
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-gold">0{index + 1}</p>
            <h3 className="mt-4 text-3xl font-semibold">{item}</h3>
            <p className="mt-3 text-sand/75">
              Developed with buyer-driven specifications, controlled stitching quality, and dependable finishing standards.
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
