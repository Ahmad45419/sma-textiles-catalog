import { motion } from 'framer-motion';

const ProductCard = ({ product, onRequestQuote }) => (
  <motion.article
    whileHover={{ y: -6 }}
    className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:shadow-premium"
  >
    <div className="relative overflow-hidden">
      <img src={product.image} alt={`${product.name} by SMA Textiles`} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/>
      <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
        {product.category}
      </span>
    </div>
    <div className="space-y-3 p-5">
      <h3 className="text-xl font-semibold text-ink">{product.name}</h3>
      <p className="text-sm text-ink/70"><strong>Material:</strong> {product.material}</p>
      {product.gsm && <p className="text-sm text-ink/70"><strong>GSM:</strong> {product.gsm}</p>}
      {product.threadCount && <p className="text-sm text-ink/70"><strong>Thread Count:</strong> {product.threadCount}</p>}
      {product.includes && <p className="text-sm text-ink/70"><strong>Includes:</strong> {product.includes}</p>}
      <p className="text-sm text-ink/70"><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
      <p className="text-sm text-ink/70"><strong>Colors:</strong> {product.colors.join(', ')}</p>
      <p className="text-sm text-ink/70"><strong>Usage:</strong> {product.usage}</p>
      <p className="text-sm text-ink/70"><strong>MOQ:</strong> {product.moq}</p>
      <button
        onClick={() => onRequestQuote(product.name, product.category)}
        className="mt-3 w-full rounded-full bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.17em] text-sand transition hover:bg-charcoal"
      >
        Request Quote
      </button>
    </div>
  </motion.article>
);

export default ProductCard;
