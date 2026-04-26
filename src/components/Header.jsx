import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Catalog', target: 'catalog' },
  { label: 'Towels', target: 'towels' },
  { label: 'Bed Linen', target: 'bed-linen' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl transition-all duration-500 ${
          isScrolled ? 'border-white/20 bg-charcoal/75 shadow-premium' : 'border-white/10 bg-charcoal/35'
        }`}
      >
        <button onClick={() => handleNav('home')} className="text-sm font-semibold uppercase tracking-[0.24em] text-sand">
          SMA Textiles
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.target)}
              className="text-xs uppercase tracking-[0.22em] text-sand/80 transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href="https://wa.me/923206700026"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal"
          >
            <MessageCircle size={16} /> Request Quote
          </a>
        </div>

        <button className="text-sand lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/15 bg-charcoal/95 p-5 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.target)}
                  className="text-left text-xs uppercase tracking-[0.2em] text-sand/90"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/923206700026"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
