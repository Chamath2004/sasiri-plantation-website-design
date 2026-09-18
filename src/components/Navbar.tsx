import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface InvoiceItem {
  id: number;
  name: string;
  qty: number;
}

export default function Navbar({
  invoiceItems,
  openInvoice
}: {
  invoiceItems: InvoiceItem[];
  openInvoice: () => void;
}) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = invoiceItems.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/plants', label: 'Buy Plants' },
    { to: '/location', label: 'Location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? 'sm:px-6' : 'sm:px-8'
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass-dark'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌿</span>
            <span className="font-display text-xl sm:text-2xl font-bold text-gradient-green">
              Sasiri Plantation
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    active
                      ? 'text-white'
                      : 'text-green-100/70 hover:text-white'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-600/40 to-green-400/30 border border-green-300/30" />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Cart button */}
          <button
            onClick={openInvoice}
            className="relative hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-semibold hover:bg-white/10 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 glass-dark rounded-2xl p-4 space-y-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium ${
                  location.pathname === l.to
                    ? 'bg-green-600/30 text-white border border-green-400/30'
                    : 'text-green-100/80 hover:bg-white/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
