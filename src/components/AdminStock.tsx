import { useEffect, useState } from 'react';
import { PLANTS } from '../data/plants';
import type { Stock } from '../utils/stock';

const STOCK_PLANTS = PLANTS.filter(plant => !plant.catalogOnly);

export default function AdminStock({ stock, onSave, onClose }: {
  stock: Stock;
  onSave: (stock: Stock) => boolean;
  onClose: () => void;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [draft, setDraft] = useState<Record<number, string>>(() => Object.fromEntries(STOCK_PLANTS.map(p => [p.id, String(stock[p.id])])));

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <section role="dialog" aria-modal="true" aria-labelledby="stock-title" className="relative glass-dark rounded-3xl p-5 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 id="stock-title" className="font-display text-2xl font-bold">Update Plant Stock</h2>
          <button onClick={onClose} aria-label="Close admin" className="w-10 h-10 rounded-full glass">✕</button>
        </div>
        {!unlocked ? (
          <form onSubmit={event => {
            event.preventDefault();
            // Preserves the local editing gate in the supplied static website.
            if (password === '1234') { setUnlocked(true); setError(''); }
            else setError('Incorrect admin password');
          }} className="space-y-4">
            <label className="block">Admin password
              <input autoFocus type="password" value={password} onChange={event => setPassword(event.target.value)} className="block mt-2 w-full rounded-xl border border-white/20 bg-white/10 p-3" />
            </label>
            {error && <p role="alert" className="text-red-300">{error}</p>}
            <button className="rounded-full bg-green-700 px-6 py-3 font-semibold">Unlock</button>
          </form>
        ) : (
          <form onSubmit={event => {
            event.preventDefault();
            const next = Object.fromEntries(STOCK_PLANTS.map(plant => [plant.id, Number(draft[plant.id])]));
            if (STOCK_PLANTS.some(plant => draft[plant.id].trim() === '' || !Number.isSafeInteger(next[plant.id]) || next[plant.id] < 0)) {
              setError('Enter a whole number of zero or more for every plant.'); return;
            }
            if (!onSave(next)) { setError('Could not save stock in this browser. Please allow browser storage and try again.'); return; }
            onClose();
          }}>
            <div className="space-y-3 max-h-[55vh] overflow-auto pr-1">
              {STOCK_PLANTS.map(plant => (
                <label key={plant.id} className="flex items-center justify-between gap-4 p-3 rounded-2xl glass">
                  <span className="min-w-0 text-sm"><span className="block font-semibold">{plant.name}</span><span className="text-green-100/60">Current stock: {stock[plant.id]}</span></span>
                  <input aria-label={`Stock for ${plant.name}, item ${plant.id}`} type="number" min="0" step="1" required value={draft[plant.id]} onChange={event => setDraft(prev => ({ ...prev, [plant.id]: event.target.value }))} className="w-24 shrink-0 rounded-xl border border-white/20 bg-white/10 p-3 text-center" />
                </label>
              ))}
            </div>
            {error && <p role="alert" className="text-red-300 mt-3">{error}</p>}
            <div className="flex gap-3 mt-5">
              <button type="button" onClick={() => { setDraft(Object.fromEntries(STOCK_PLANTS.map(p => [p.id, String(stock[p.id])]))); setError(''); }} className="flex-1 rounded-full glass py-3 font-semibold">Reset</button>
              <button className="flex-1 rounded-full bg-green-700 py-3 font-semibold">Save Stock</button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
