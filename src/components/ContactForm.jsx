import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { productFilters } from '../data/products';

const ContactForm = ({ selectedProduct }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setMessage(`Interested in ${selectedProduct}. Please share pricing, MOQ, and lead time.`);
    }
  }, [selectedProduct]);

  return (
    <section id="contact" className="bg-charcoal px-6 py-20 text-sand md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Quote / Inquiry</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Tell us your requirement. We’ll share a buyer-ready quotation.</h2>
          <p className="mt-5 text-sand/75">Contact Person: Muhammad Ahmad</p>
          <p className="text-sand/75">Email: textiles.sma1@gmail.com</p>
          <p className="text-sand/75">Phone/WhatsApp: 03206700026</p>
          <a href="https://wa.me/923206700026" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">Chat on WhatsApp</a>
        </div>

        <form className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="input" />
            <input placeholder="Company Name" className="input" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input placeholder="Country" className="input" />
            <input type="email" required placeholder="Email" className="input" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input placeholder="WhatsApp Number" className="input" />
            <select className="input">
              {productFilters.filter((item) => item !== 'All').map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <textarea
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message / Requirement"
            className="input"
          />
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
            Submit Inquiry <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
