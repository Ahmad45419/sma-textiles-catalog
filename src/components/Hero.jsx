import { motion, useScroll, useTransform } from 'framer-motion';

const tags = ['Hotel Programs', 'Export Ready', 'Private Label', 'Retail Collections'];

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const foregroundY = useTransform(scrollYProgress, [0, 0.25], [0, -40]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-charcoal text-sand">
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center opacity-35"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/35 via-charcoal/50 to-charcoal" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(198,166,103,.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(124,122,79,.2),transparent_45%)]" aria-hidden="true" />

      <motion.div style={{ y: foregroundY }} className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-36 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.34em] text-gold"
        >
          Textile Manufacturer &amp; Export Supplier
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="mt-4 max-w-5xl text-4xl font-semibold leading-[0.95] md:text-7xl"
        >
          <span className="block">Premium Towels,</span>
          <span className="block text-sand/90">Bed Linen &amp; Home Textiles</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26 }}
          className="mt-6 max-w-2xl text-base text-sand/80 md:text-xl"
        >
          Quality textile products for hotels, retailers, wholesalers, and international buyers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#catalog" className="micro-glow rounded-full bg-sand px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition hover:-translate-y-0.5">
            View Catalog
          </a>
          <a href="#contact" className="rounded-full border border-white/35 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-sand transition hover:-translate-y-0.5 hover:bg-white/10">
            Request Quote
          </a>
          <a
            href="https://wa.me/923206700026"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/50 bg-gold/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:-translate-y-0.5 hover:bg-gold/25"
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
              transition={{ delay: 0.45 + i * 0.08 }}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand/90 backdrop-blur"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-sand/70 md:flex"
      >
        Scroll
        <span className="h-6 w-px bg-sand/45" aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default Hero;
