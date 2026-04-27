const Footer = () => (
  <footer className="bg-ink px-6 py-12 text-sand md:px-10">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
      <div>
        <p className="text-lg font-semibold uppercase tracking-[0.24em]">SMA Textiles</p>
        <p className="mt-3 text-sm text-sand/70">Premium Towels, Bed Linen &amp; Home Textile Supply for global buyers.</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-gold">Categories</p>
        <ul className="mt-3 space-y-2 text-sm text-sand/75">
          <li>Towels</li><li>Bed Linen</li><li>Bathrobes</li><li>Hotel Linen</li><li>Kitchen Linen</li><li>Custom Textile Products</li>
        </ul>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-gold">Contact</p>
        <p className="mt-3 text-sm text-sand/75">Email: textiles.sma1@gmail.com</p>
        <p className="text-sm text-sand/75">Phone/WhatsApp: 03206700026</p>
        <a className="text-sm text-gold" href="https://wa.me/923206700026" target="_blank" rel="noreferrer">https://wa.me/923206700026</a>
      </div>
    </div>
    <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-sand/50">© {new Date().getFullYear()} SMA Textiles. All rights reserved.</p>
  </footer>
);

export default Footer;
