import { AnimatePresence, motion } from 'framer-motion';

const Loader = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center bg-charcoal"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.2 } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-4xl font-semibold uppercase tracking-[0.3em] text-sand">SMA Textiles</p>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-sand/70">
            Premium Towels, Bed Linen &amp; Home Textiles
          </p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader;
