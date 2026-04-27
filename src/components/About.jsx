import { motion } from 'framer-motion';

const features = ['Custom sizes', 'Custom colors', 'Bulk orders', 'Export-ready packaging', 'Hotel and retail supply', 'Quality control'];

const About = () => (
  <section id="about" className="bg-white px-6 py-20 md:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs uppercase tracking-[0.3em] text-olive">About SMA Textiles</p>
      <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-ink md:text-5xl">Manufacturing reliability with export-ready discipline.</h2>
      <p className="mt-6 max-w-4xl text-base leading-relaxed text-ink/75 md:text-lg">
        SMA Textiles is a textile manufacturing business offering quality towels, bed linen, bathrobes, hotel linen, kitchen linen, and custom textile products for wholesale, hospitality, retail, and export markets. We focus on durable fabric, fine stitching, comfortable finishing, customization, and reliable order handling.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl border border-ink/10 bg-sand p-5 text-sm uppercase tracking-[0.18em] text-ink"
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
