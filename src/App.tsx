import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { PLANTS } from './data/plants';
import { loadStock, persistStock } from './utils/stock';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InvoiceModal from './components/InvoiceModal';
import Home from './pages/Home';
import Plants from './pages/Plants';
import Location from './pages/Location';

interface InvoiceItem {
  id: number;
  name: string;
  qty: number;
}

export default function App() {
  const [stock, setStock] = useState(loadStock);
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([]);
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const addToInvoice = (plantId: number, qty: number) => {
    if (!Number.isInteger(qty) || qty <= 0 || !stock[plantId]) return;

    const plant = PLANTS.find(p => p.id === plantId);
    if (!plant) return;

    setInvoiceItems(prev => {
      const existing = prev.find(item => item.id === plantId);
      if (existing) {
        return prev.map(item => item.id === plantId ? { ...item, qty: Math.min(stock[plantId], item.qty + qty) } : item);
      } else {
        return [...prev, { id: plantId, name: plant.name, qty: Math.min(stock[plantId], qty) }];
      }
    });
  };

  const saveStock = (next: Record<number, number>) => {
    if (!persistStock(next)) return false;
    setStock(next);
    setInvoiceItems(items => items.map(item => ({ ...item, qty: Math.min(item.qty, next[item.id]) })).filter(item => item.qty > 0));
    return true;
  };

  return (
    <BrowserRouter basename={import.meta.env.PROD ? '/sasiri-plantation-website-design/' : '/'}>
      <div className="min-h-screen bg-[#04140a] text-[#f7f4e9]">
        <Navbar
          invoiceItems={invoiceItems}
          openInvoice={() => setInvoiceOpen(true)}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plants" element={<Plants addToInvoice={addToInvoice} stock={stock} saveStock={saveStock} />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
        <Footer />
        <InvoiceModal
          isOpen={invoiceOpen}
          onClose={() => setInvoiceOpen(false)}
          invoiceItems={invoiceItems}
          removeItem={id => setInvoiceItems(items => items.filter(item => item.id !== id))}
          clearCart={() => setInvoiceItems([])}
        />
      </div>
    </BrowserRouter>
  );
}
