import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { productFilters, products } from '../data/products';
import ProductCard from './ProductCard';

const ProductCatalog = ({ onRequestQuote }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = query.toLowerCase().trim();
    return products.filter((product) => {
      const matchesFilter = activeFilter === 'All' || product.category === activeFilter;
      const haystack = [
        product.name,
        product.category,
        product.material,
        product.gsm,
        product.threadCount,
        product.usage,
        product.includes,
        product.sizes?.join(' '),
        product.colors?.join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const matchesSearch = !q || haystack.includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <section className="bg-sand px-6 pb-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 rounded-3xl border border-ink/10 bg-white p-5 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, category, material, GSM, thread count, or usage"
            className="w-full rounded-full border border-ink/20 px-5 py-3 text-sm outline-none ring-gold/40 focus:ring md:max-w-xl"
            aria-label="Search products"
          />
          <div className="flex flex-wrap gap-2">
            {productFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                  activeFilter === filter ? 'bg-ink text-white' : 'bg-ink/5 text-ink/75 hover:bg-ink/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onRequestQuote={onRequestQuote} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalog;
