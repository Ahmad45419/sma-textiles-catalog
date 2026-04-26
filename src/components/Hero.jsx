import { motion, useScroll, useTransform } from 'framer-motion';

const tags = ['Hotel Programs', 'Export Ready', 'Private Label', 'Retail Collections'];

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-charcoal text-sand">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/30" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-36 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.34em] text-gold"
        >
          Textile Manufacturer &amp; Export Supplier
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-7xl"
        >
          Premium Towels, Bed Linen &amp; Home Textiles
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base text-sand/80 md:text-xl"
        >
          Quality textile products for hotels, retailers, wholesalers, and international buyers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#catalog" className="rounded-full bg-sand px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
            View Catalog
          </a>
          <a href="#contact" className="rounded-full border border-white/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-sand">
            Request Quote
          </a>
          <a
            href="https://wa.me/923206700026"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/50 bg-gold/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
          >
            WhatsApp
          </a>
        </motion.div>

        <div className="mt-14 flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.42 + i * 0.08 }}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand/90"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
