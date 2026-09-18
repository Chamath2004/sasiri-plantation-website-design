import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/40 to-[#020905]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-display text-xl font-bold text-gradient-green">
                Sasiri Plantation
              </span>
            </div>
            <p className="text-green-100/60 max-w-md text-sm leading-relaxed">
              Rooted in Sri Lanka's misty central highlands, Sasiri Plantation grows, nurtures, and delivers premium plants, saplings, and greenery to homes and gardens across the island.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-green-200">Visit Us</h4>
            <ul className="space-y-2 text-sm text-green-100/60">
              <li>Sasiri Plantation</li>
              <li>Central Highlands,</li>
              <li>Sri Lanka</li>
              <li className="pt-2">
                <a href="tel:+94000000000" className="hover:text-green-300 transition">
                  +94 77 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@sasiri.lk" className="hover:text-green-300 transition">
                  hello@sasiri.lk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-green-200">Explore</h4>
            <ul className="space-y-2 text-sm text-green-100/60">
              <li><Link to="/" className="hover:text-green-300 transition">Home</Link></li>
              <li><Link to="/plants" className="hover:text-green-300 transition">Buy Plants</Link></li>
              <li><Link to="/location" className="hover:text-green-300 transition">Location</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-green-400/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-green-100/40">
          <p>© {new Date().getFullYear()} Sasiri Plantation. Grown with care.</p>
          <p className="flex items-center gap-2">
            Made with <span className="text-green-400">🌿</span> in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
