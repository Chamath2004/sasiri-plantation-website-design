import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Sasiri Plantation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04140a]/70 via-[#04140a]/60 to-[#04140a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04140a]/90 via-transparent to-[#04140a]/50" />
        </div>

        {/* Floating decorative leaves */}
        <div className="absolute top-20 right-10 text-6xl opacity-20 animate-float-slow hidden lg:block">🌿</div>
        <div className="absolute bottom-40 left-10 text-5xl opacity-15 animate-float hidden lg:block">🍃</div>
        <div className="absolute top-1/3 left-1/4 text-4xl opacity-10 animate-float-slow hidden lg:block">🌱</div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 pt-40 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-xs sm:text-sm font-medium text-green-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Grown in Sri Lanka's Hill Country
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
                Bring <span className="text-gradient-green italic">life</span>
                <br />
                to every
                <br />
                corner.
              </h1>

              <p className="text-lg sm:text-xl text-green-100/70 max-w-xl mb-10 leading-relaxed">
                Welcome to Sasiri Plantation — a sanctuary of lush greenery nestled in the misty hills of Sri Lanka. Discover hand-tended plants that breathe beauty into your home.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/plants"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-xl shadow-green-900/50 hover:shadow-green-500/40 hover:scale-105 transition-all"
                >
                  Explore Our Plants
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  to="/location"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Visit Plantation
                </Link>
              </div>

              {/* Stats strip */}
              <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg">
                {[
                  { n: '500+', l: 'Plant varieties' },
                  { n: '15+', l: 'Years tending' },
                  { n: '2000+', l: 'Happy homes' },
                ].map((s) => (
                  <div key={s.l} className="glass rounded-2xl p-4 text-center">
                    <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-green">
                      {s.n}
                    </div>
                    <div className="text-[11px] sm:text-xs text-green-100/60 uppercase tracking-wider mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side glass card */}
            <div className="hidden lg:block reveal" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/30 to-green-900/20 rounded-3xl blur-2xl" />
                <div className="relative glass-green rounded-3xl p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.3em] text-green-200/80">
                      Featured this week
                    </span>
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div className="font-display text-3xl font-bold">Monstera Deliciosa</div>
                  <p className="text-green-100/70 text-sm leading-relaxed">
                    The iconic Swiss Cheese plant — a statement piece for modern homes. Thrives in bright, indirect light and rewards you with dramatic, split leaves.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-green-200/10">
                    <div>
                      <div className="text-[10px] uppercase text-green-200/60">Light</div>
                      <div className="text-sm font-medium mt-1">Indirect</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-green-200/60">Water</div>
                      <div className="text-sm font-medium mt-1">Weekly</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-green-200/60">Level</div>
                      <div className="text-sm font-medium mt-1">Easy</div>
                    </div>
                  </div>
                  <Link
                    to="/plants"
                    className="block text-center w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 font-medium transition-all"
                  >
                    View in Shop →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-200/50 text-xs animate-bounce">
          <span className="tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-green-300 to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-8 overflow-hidden border-y border-green-400/10 bg-[#020905]/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {['Tropical Indoor', 'Fruit Trees', 'Flowering Shrubs', 'Rare Succulents', 'Ornamental', 'Herbal Garden', 'Bonsai'].map((t) => (
                <div key={t} className="flex items-center gap-12">
                  <span className="font-display text-3xl sm:text-4xl text-green-200/40">{t}</span>
                  <span className="text-green-400 text-2xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass-green text-xs uppercase tracking-[0.25em] text-green-200 mb-5">
              Why Sasiri
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Grown with <span className="text-gradient-green italic">passion</span>,<br />
              delivered with care.
            </h2>
            <p className="text-green-100/60 text-lg">
              From our mist-kissed highlands to your doorstep — every plant leaves our plantation with a story and a promise of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🌱',
                title: 'Hand-Tended',
                desc: 'Every plant is grown, pruned, and cared for by our experienced team in the cool hills of central Sri Lanka.',
              },
              {
                icon: '🏔️',
                title: 'Highland Grown',
                desc: "Our plantation sits in Sri Lanka's central highlands — the perfect microclimate for strong, healthy plants.",
              },
              {
                icon: '🚚',
                title: 'Island-Wide Delivery',
                desc: 'Safely packed and delivered to your doorstep across Sri Lanka with care instructions included.',
              },
              {
                icon: '💧',
                title: 'Expert Guidance',
                desc: "Not sure which plant suits your space? Our team offers free consultations to match you with the right greenery.",
              },
              {
                icon: '🌿',
                title: '500+ Varieties',
                desc: 'From rare tropicals to classic houseplants, our catalog covers every corner of your home or garden.',
              },
              {
                icon: '💚',
                title: 'Eco-Friendly',
                desc: 'Sustainable practices, biodegradable packaging, and zero-waste growing — because the earth matters.',
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className="glass-green rounded-3xl p-8 hover:bg-white/5 transition-all group plant-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-green-100/60 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.pexels.com/photos/4894424/pexels-photo-4894424.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Plant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="glass-green rounded-3xl p-6">
                  <div className="font-display text-4xl font-bold text-gradient-green">15+</div>
                  <div className="text-xs uppercase tracking-wider text-green-100/60 mt-1">
                    Years of love
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="glass-green rounded-3xl p-6">
                  <div className="font-display text-4xl font-bold text-gradient-green">500+</div>
                  <div className="text-xs uppercase tracking-wider text-green-100/60 mt-1">
                    Varieties
                  </div>
                </div>
                <div className="glass rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.pexels.com/photos/9543903/pexels-photo-9543903.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Plant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full glass-green text-xs uppercase tracking-[0.25em] text-green-200 mb-5">
              Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              From a small
              <br />
              <span className="text-gradient-green italic">seed</span> to a
              <br />
              plantation.
            </h2>
            <p className="text-green-100/70 text-lg leading-relaxed mb-6">
              Sasiri Plantation began as a humble family garden in the cool hills of Sri Lanka's central highlands. What started as a passion for greenery has blossomed into one of the region's most trusted plant nurseries.
            </p>
            <p className="text-green-100/70 text-lg leading-relaxed mb-8">
              Today, we grow over 500 varieties of indoor, outdoor, flowering, and fruit-bearing plants — all raised with sustainable practices and the patient love of our expert team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/plants"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-medium hover:scale-105 transition-all"
              >
                Browse Plants →
              </Link>
              <Link
                to="/location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
              >
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-green-500/30 via-green-700/20 to-transparent rounded-[2.5rem] blur-3xl" />
          <div className="relative glass-green rounded-[2.5rem] p-10 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 text-[200px] leading-none opacity-10 -mr-10 -mt-10">🌿</div>
            <div className="relative">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Ready to go <span className="text-gradient-green italic">green?</span>
              </h2>
              <p className="text-green-100/70 text-lg max-w-2xl mx-auto mb-10">
                Browse our catalog of over 500 carefully cultivated plant varieties. From statement floor plants to delicate windowsill friends — there's a Sasiri plant for every home.
              </p>
              <Link
                to="/plants"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-green-900 font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-green-900/50"
              >
                Shop All Plants
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
