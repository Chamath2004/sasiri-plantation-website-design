export default function Location() {
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7!2d80.4332115!3d6.9366389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a10010cca6fd%3A0x1184e49ccdfe21cb!2sSasiri%20Plantation!5e0!3m2!1sen!2slk!4v1700000000000';
  const directionsUrl =
    'https://www.google.com/maps/place/Sasiri+Plantation/@6.9366389,80.4357864,17z';

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative pt-36 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="absolute top-10 left-10 text-9xl opacity-10 animate-float">📍</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-10 animate-float-slow">🌿</div>

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full glass-green text-xs uppercase tracking-[0.25em] text-green-200 mb-5">
            Visit Us
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Find your way
            <br />
            to <span className="text-gradient-green italic">Sasiri.</span>
          </h1>
          <p className="text-green-100/70 text-lg max-w-2xl mx-auto">
            Tucked into the cool, misty hills of Sri Lanka's central highlands, our plantation welcomes visitors who want to experience greenery in its purest form.
          </p>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden glass-green glow-green aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px]">
              <iframe
                title="Sasiri Plantation Location"
                src={mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address card */}
            <div className="glass-green rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold">Address</h3>
              </div>
              <p className="text-green-100/80 leading-relaxed">
                Sasiri Plantation<br />
                Central Highlands<br />
                Sri Lanka
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-300 hover:text-green-200 transition"
              >
                Get Directions
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Contact card */}
            <div className="glass-green rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold">Contact</h3>
              </div>
              <div className="space-y-3 text-green-100/80">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-green-200/60 w-16">Phone</span>
                  <a href="tel:+94000000000" className="hover:text-green-300 transition">
                    +94 77 000 0000
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-green-200/60 w-16">Email</span>
                  <a href="mailto:hello@sasiri.lk" className="hover:text-green-300 transition break-all">
                    hello@sasiri.lk
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-green-200/60 w-16">WhatsApp</span>
                  <a
                    href="https://wa.me/94000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition"
                  >
                    Chat with us →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="glass-green rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold">Opening Hours</h3>
              </div>
              <div className="space-y-2 text-green-100/80 text-sm">
                <div className="flex items-center justify-between">
                  <span>Monday – Saturday</span>
                  <span className="font-medium">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex items-center justify-between pt-2 mt-2 border-t border-green-200/10">
                  <span className="text-green-200/60">Public Holidays</span>
                  <span className="font-medium text-green-300">By appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GETTING HERE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full glass-green text-xs uppercase tracking-[0.25em] text-green-200 mb-4">
              Getting Here
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Your journey to <span className="text-gradient-green italic">green.</span>
            </h2>
            <p className="text-green-100/60 max-w-2xl mx-auto">
              Nestled in Sri Lanka's scenic central highlands, Sasiri Plantation is a beautiful drive away from most major towns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚗',
                title: 'By Car',
                desc: 'Follow the A7 highway into the hill country. Scenic drive with tea estates on both sides. Parking available on site.',
              },
              {
                icon: '🚌',
                title: 'By Bus',
                desc: 'Regular buses from Colombo, Kandy, and nearby towns drop you close. We can arrange pickup from the nearest stop.',
              },
              {
                icon: '🚂',
                title: 'By Train',
                desc: 'Take the famous hill country train. Get off at the closest station and we can arrange transport to the plantation.',
              },
            ].map((t) => (
              <div key={t.title} className="glass-green rounded-3xl p-8 plant-card">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-3">{t.title}</h3>
                <p className="text-green-100/60 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto glass-green rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 text-[180px] opacity-10">🌿</div>
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Come see for yourself.
            </h2>
            <p className="text-green-100/70 mb-8 max-w-xl mx-auto">
              Walk among the greenery, chat with our growers, and take home a piece of the plantation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-105 transition-all shadow-xl shadow-green-900/50"
              >
                Open in Google Maps
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="tel:+94000000000"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
