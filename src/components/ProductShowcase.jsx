import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    title: 'Softness',
    detail: 'Plush hand-feel engineered through fiber selection, finishing control, and absorbency balance for hospitality and retail lines.',
    image: 'https://images.unsplash.com/photo-1616627455133-8b2f6f5d34a9?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Durability',
    detail: 'High-wash resilience, stitch integrity, and performance consistency designed for heavy-rotation hotel and institutional use.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Export Quality',
    detail: 'Production checks, buyer-specific specs, and packaging reliability aligned with global sourcing and shipment requirements.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Custom Manufacturing',
    detail: 'Flexible GSM, dimensions, color programs, labeling, and private-label workflows tailored to your market needs.',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1600&q=80',
  },
];

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-charcoal px-6 py-24 text-sand md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(198,166,103,.22),transparent_44%),radial-gradient(circle_at_80%_80%,rgba(124,122,79,.16),transparent_40%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Immersive Product Story</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">Macro section progression, image-led storytelling, and tactile textile narratives.</h2>

        <div className="mt-14 space-y-8">
          {pillars.map((item, index) => (
            <motion.article
              key={item.title}
              style={{ y }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.09, duration: 0.65 }}
              className="grid overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm md:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden md:h-auto">
                <img src={item.image} alt={`${item.title} quality visual`} className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="p-7 md:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-3xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sand/78">{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
