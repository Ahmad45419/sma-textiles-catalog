import { motion } from 'framer-motion';
import { categories } from '../data/categories';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CategorySection = () => (
  <section id="catalog" className="bg-sand px-6 py-24 md:px-10">
    <div className="mx-auto max-w-7xl">
      <p className="text-xs uppercase tracking-[0.28em] text-olive">Product Categories</p>
      <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-4xl text-3xl font-semibold text-ink md:text-5xl">Curated textile programs with immersive presentation for international buyers.</h2>
        <p className="max-w-md text-sm text-ink/65 md:text-base">From plush towel programs to complete bedding lines, each category is structured for hospitality, wholesale, and private-label sourcing.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        {categories.map((category, index) => (
          <motion.article
            key={category.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10 }}
            className={`group cinematic-card relative overflow-hidden rounded-3xl text-sand shadow-premium lg:col-span-4 ${
              index === 0 || index === 3 ? 'lg:col-span-8' : ''
            }`}
          >
            <img src={category.image} alt={`${category.title} textile category`} className="h-72 w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold">Category {String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{category.title}</h3>
              <p className="mt-2 max-w-md text-sm text-sand/80">{category.description}</p>
              <button className="mt-5 text-xs uppercase tracking-[0.2em] text-gold transition group-hover:translate-x-1">Explore Category →</button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
