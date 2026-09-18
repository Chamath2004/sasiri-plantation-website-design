import { useState } from 'react';

interface InvoiceItem {
  id: number;
  name: string;
  qty: number;
}

type Plant = {
  id: number;
  name: string;
  category: string;
  image: string;
  light: string;
  water: string;
  level: string;
  description: string;
  tag?: string;
  quantity: number;
  selectedQty: number;
};

const PLANTS: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Indoor',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/4894424/pexels-photo-4894424.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Bright Indirect',
    water: 'Weekly',
    level: 'Easy',
    description: 'The iconic Swiss Cheese plant — a statement piece with dramatic split leaves.',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Red Rose Bush',
    category: 'Flowering',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/9839793/pexels-photo-9839793.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Full Sun',
    water: '2-3 days',
    level: 'Medium',
    description: 'Classic red roses, perfect for gardens, borders, and sunny balconies.',
  },
  {
    id: 3,
    name: 'Snake Plant',
    category: 'Indoor',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/8936404/pexels-photo-8936404.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Low to Bright',
    water: 'Bi-weekly',
    level: 'Very Easy',
    description: 'An air-purifying champion that thrives on neglect. Ideal for beginners.',
    tag: 'Beginner Friendly',
  },
  {
    id: 4,
    name: 'Purple Orchid',
    category: 'Flowering',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/20321708/pexels-photo-20321708.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Indirect',
    water: 'Weekly',
    level: 'Medium',
    description: 'Elegant purple blooms that last for months. A touch of sophistication.',
  },
  {
    id: 5,
    name: 'Bougainvillea',
    category: 'Outdoor',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/31547449/pexels-photo-31547449.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Full Sun',
    water: 'Weekly',
    level: 'Easy',
    description: 'Vibrant tropical blooms that paint your garden in bold colors all year.',
    tag: 'Garden Star',
  },
  {
    id: 6,
    name: 'Jasmine Plant',
    category: 'Flowering',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/9543903/pexels-photo-9543903.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Full Sun',
    water: '2-3 days',
    level: 'Easy',
    description: 'Fragrant white blooms that fill your home with an unforgettable scent.',
  },
  {
    id: 7,
    name: 'Red Hibiscus',
    category: 'Flowering',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/16873021/pexels-photo-16873021.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Full Sun',
    water: 'Daily',
    level: 'Easy',
    description: 'Bold, tropical blooms loved in Sri Lankan gardens and temple offerings.',
  },
  {
    id: 8,
    name: 'Fruit Tree Sapling',
    category: 'Fruit',
    quantity: 100,
    selectedQty: 0,
    image: 'https://images.pexels.com/photos/23158491/pexels-photo-23158491.jpeg?auto=compress&cs=tinysrgb&w=800',
    light: 'Full Sun',
    water: 'Regular',
    level: 'Medium',
    description: 'Healthy fruit saplings (Mango, Jack, Rambutan) — grow your own harvest.',
    tag: 'Homegrown',
  },
];

const CATEGORIES = ['All', 'Indoor', 'Outdoor', 'Flowering', 'Fruit'];

export default function Plants({
  addToInvoice
}: {
  addToInvoice: (plantId: number, qty: number) => void;
}) {
  const [active, setActive] = useState('All');
  const [plantQuantities, setPlantQuantities] = useState<Record<number, number>>(
    PLANTS.reduce((acc, plant) => ({ ...acc, [plant.id]: plant.selectedQty }), {})
  );
  const filtered = active === 'All' ? PLANTS : PLANTS.filter((p) => p.category === active);

  const updateQuantity = (plantId: number, change: number) => {
    const plant = PLANTS.find(p => p.id === plantId);
    if (plant) {
      const currentQty = plantQuantities[plantId] || 0;
      const newQty = currentQty + change;
      if (newQty >= 0 && newQty <= plant.quantity) {
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
      } else if (newQty > plant.quantity) {
        newQty = plant.quantity;
      }
      setPlantQuantities(prev => ({ ...prev, [plantId]: newQty }));
    }
  };

  return (
    <div className="relative">
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
                {p.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-[10px] uppercase tracking-widest font-bold text-white">
                    {p.tag}
                  </span>
                )}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-widest font-semibold text-green-100">
                  {p.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-green-100/60 text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="glass rounded-xl p-2">
                    <div className="text-[9px] uppercase text-green-200/60">Light</div>
                    <div className="text-[11px] font-medium mt-0.5">{p.light}</div>
                  </div>
                  <div className="glass rounded-xl p-2">
                    <div className="text-[9px] uppercase text-green-200/60">Water</div>
                    <div className="text-[11px] font-medium mt-0.5">{p.water}</div>
                  </div>
                  <div className="glass rounded-xl p-2">
                    <div className="text-[9px] uppercase text-green-200/60">Level</div>
                    <div className="text-[11px] font-medium mt-0.5">{p.level}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-green-200/10 space-y-3">
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
                      value={plantQuantities[p.id] || 0}
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
                    onClick={() => addToInvoice(p.id, plantQuantities[p.id] || 0)}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold hover:scale-[1.02] transition-all shadow-lg shadow-green-900/40 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Add to Invoice
                  </button>
                </div>
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
