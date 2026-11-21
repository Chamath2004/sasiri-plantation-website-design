import { useState } from 'react';

import { PLANTS } from '../data/plants';
import AdminStock from '../components/AdminStock';

const CATEGORIES = ['All', 'Native', 'Indoor', 'Outdoor', 'Flowering', 'Fruit'];

export default function Plants({
  addToInvoice, stock, saveStock
}: {
  addToInvoice: (plantId: number, qty: number) => void;
  stock: Record<number, number>;
  saveStock: (stock: Record<number, number>) => boolean;
}) {
  const [adminOpen, setAdminOpen] = useState(false);
  const [active, setActive] = useState('All');
  const [plantQuantities, setPlantQuantities] = useState<Record<number, number>>(
    PLANTS.reduce((acc, plant) => ({ ...acc, [plant.id]: plant.selectedQty }), {})
  );
  const filtered = (active === 'All' ? PLANTS : PLANTS.filter((p) => p.category === active))
    .map(plant => ({ ...plant, quantity: stock[plant.id] }));

  const updateQuantity = (plantId: number, change: number) => {
    const plant = PLANTS.find(p => p.id === plantId);
    if (plant) {
      const currentQty = Math.min(plantQuantities[plantId] || 0, stock[plantId]);
      const newQty = currentQty + change;
      if (newQty >= 0 && newQty <= stock[plantId]) {
        setPlantQuantities(prev => ({ ...prev, [plantId]: newQty }));
      }
    }
  };

  const setQuantityDirectly = (plantId: number, value: string) => {
    const plant = PLANTS.find(p => p.id === plantId);
    if (plant) {
      let newQty = parseInt(value);
      if (isNaN(newQty) || newQty < 0) {
        newQty = 0;
      } else if (newQty > stock[plantId]) {
        newQty = stock[plantId];
      }
      setPlantQuantities(prev => ({ ...prev, [plantId]: newQty }));
    }
  };

  return (
    <div className="relative">
      {adminOpen && <AdminStock stock={stock} onSave={saveStock} onClose={() => setAdminOpen(false)} />}
      {/* HERO */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute top-10 right-10 text-9xl opacity-10 animate-float-slow">🌿</div>
        <div className="absolute bottom-10 left-10 text-8xl opacity-10 animate-float">🌱</div>

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full glass-green text-xs uppercase tracking-[0.25em] text-green-200 mb-5">
            Our Collection
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Shop <span className="text-gradient-green italic">green</span>
            <br />
            treasures.
          </h1>
          <p className="text-green-100/70 text-lg max-w-2xl mx-auto">
            Browse our hand-picked selection of plants, grown with love at Sasiri Plantation. Filter by category to find your perfect match.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-24 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-dark rounded-full px-3 py-3 flex flex-wrap items-center justify-center gap-2 w-fit mx-auto">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg shadow-green-900/50'
                    : 'text-green-100/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="font-display text-2xl font-bold">Our Collection</h2>
            <button onClick={() => setAdminOpen(true)} className="px-4 py-2 rounded-full glass text-sm font-semibold">Admin Stock</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="plant-card glass-green rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04140a]/70 via-transparent to-transparent" />
                {p.imageKind === 'illustration' && (
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white/90">Illustrative image</span>
                )}

              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-2">{p.name}</h3>
                {p.description && <p className="text-green-100/60 text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>}

                {!p.catalogOnly && <div className="pt-3 border-t border-green-200/10 space-y-3">
                  <div className="text-center">
                    <span className="text-[10px] uppercase text-green-200/60">Available: </span>
                    <span className="font-display text-lg font-bold text-gradient-green">{p.quantity}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => updateQuantity(p.id, -1)}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold text-lg transition-all"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      max={p.quantity}
                      aria-label={`Quantity for ${p.name}`}
                      value={Math.min(plantQuantities[p.id] || 0, p.quantity)}
                      onChange={(e) => setQuantityDirectly(p.id, e.target.value)}
                      className="w-20 h-10 rounded-full bg-white/10 border border-white/20 text-white text-center text-xl font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => updateQuantity(p.id, 1)}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 flex items-center justify-center text-white font-bold text-lg transition-all shadow-lg shadow-green-900/50"
                    >
                      +
                    </button>
                  </div>
                  <button
                    disabled={p.quantity === 0}
                    onClick={() => addToInvoice(p.id, Math.min(plantQuantities[p.id] || 0, p.quantity))}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold hover:scale-[1.02] transition-all shadow-lg shadow-green-900/40 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {p.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                </div>}
              </div>
            </article>
          ))}
        </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-green-100/50">
              No plants found in this category yet. Check back soon!
            </div>
          )}
        </div>
      </section>

      {/* Info bar */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { icon: '🚚', title: 'Island-Wide Delivery', text: 'Safe, plant-friendly packaging shipped across Sri Lanka.' },
            { icon: '💬', title: 'Care Support', text: 'Free lifetime care advice for every plant you buy from us.' },
            { icon: '🌱', title: 'Healthy Guarantee', text: 'All plants leave our nursery in peak condition — guaranteed.' },
          ].map((b) => (
            <div key={b.title} className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="text-3xl">{b.icon}</div>
              <div>
                <div className="font-display text-lg font-bold mb-1">{b.title}</div>
                <div className="text-sm text-green-100/60">{b.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
