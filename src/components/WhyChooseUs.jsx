import { motion } from 'framer-motion';

const reasons = [
  'Quality Fabric',
  'Custom Manufacturing',
  'Bulk Order Support',
  'Competitive Pricing',
  'Export-Friendly Packaging',
  'Timely Delivery',
  'Buyer-Focused Communication',
  'Private Label Support',
];

const WhyChooseUs = () => (
  <section className="bg-sand px-6 py-20 md:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs uppercase tracking-[0.3em] text-olive">Why Choose Us</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink md:text-5xl">Built for buyers who need consistency at scale.</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            key={reason}
            className="rounded-2xl border border-ink/10 bg-white p-5 text-sm font-medium uppercase tracking-[0.12em] text-ink"
          >
            {reason}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
