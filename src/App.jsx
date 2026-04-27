import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Loader from './components/Loader';
import CategorySection from './components/CategorySection';
import ProductCatalog from './components/ProductCatalog';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const trustBadges = ['Hotel Supply', 'Wholesale Orders', 'Custom Manufacturing', 'Export Packaging', 'Private Label'];

const storyFrames = [
  {
    title: 'Visual depth for buyer confidence',
    text: 'Large-scale textile visuals and layered gradients replicate premium campaign storytelling for sourcing-first audiences.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1800&q=80',
  },
  {
    title: 'Engineered for wholesale decisions',
    text: 'Every section balances cinematic presentation with specification detail so buyers can evaluate products faster.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=80',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  const handleRequestQuote = (productName) => {
    setSelectedProduct(productName);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Loader isVisible={loading} />
      <Header />
      <main className="bg-sand">
        <Hero />

        <motion.section variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="bg-white px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-olive">Brand Statement</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl">
                SMA Textiles delivers quality towels, bed linen, bathrobes, hotel linen, and custom textile products with buyer-focused manufacturing, reliable finishing, and export-ready packaging.
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.95 }}
              whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
              viewport={{ once: true }}
              className="cinematic-panel lg:col-span-2 rounded-3xl border border-ink/20 bg-sand p-8 shadow-premium"
            >
              <p className="font-serif text-4xl text-ink">SMA Textiles</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-olive">Manufactured with care</p>
            </motion.div>
          </div>
        </motion.section>

        <CategorySection />

        <section className="bg-charcoal px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {storyFrames.map((frame, index) => (
              <motion.article
                key={frame.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="cinematic-card group relative overflow-hidden rounded-3xl text-sand"
              >
                <img src={frame.image} alt={frame.title} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                <div className="absolute bottom-0 p-7">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold">Story Frame 0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{frame.title}</h3>
                  <p className="mt-2 text-sm text-sand/80">{frame.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <span id="towels" className="relative -top-24 block" aria-hidden="true" />
        <span id="bed-linen" className="relative -top-24 block" aria-hidden="true" />
        <ProductCatalog onRequestQuote={handleRequestQuote} />
        <ProductShowcase />

        <motion.section variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <About />
        </motion.section>
        <motion.section variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <WhyChooseUs />
        </motion.section>

        <section className="bg-white px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl rounded-3xl border border-ink/10 bg-sand p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-olive">Buyer Trust</p>
            <h3 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Trusted for wholesale, hotel, retail, and export textile supply.</h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <motion.span
                  key={badge}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs uppercase tracking-[0.17em] text-ink"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        <ContactForm selectedProduct={selectedProduct} />
      </main>
      <Footer />
    </>
  );
}

export default App;
