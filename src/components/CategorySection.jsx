import { motion } from 'framer-motion';
import { categories } from '../data/categories';

const CategorySection = () => (
  <section id="catalog" className="bg-sand px-6 py-20 md:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs uppercase tracking-[0.28em] text-olive">Product Categories</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-ink md:text-5xl">Curated textile programs for every buyer segment.</h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.article
            key={category.id}
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl bg-ink text-sand shadow-premium ${
              index % 3 === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <img src={category.image} alt={`${category.title} textile category`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-2xl font-semibold">{category.title}</h3>
              <p className="mt-2 max-w-md text-sm text-sand/80">{category.description}</p>
              <button className="mt-5 text-xs uppercase tracking-[0.18em] text-gold">Explore Category →</button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
