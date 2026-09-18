import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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

// Plant data (same as Plants.tsx for reference)
const PLANTS = [
  { id: 1, name: 'Monstera Deliciosa' },
  { id: 2, name: 'Red Rose Bush' },
  { id: 3, name: 'Snake Plant' },
  { id: 4, name: 'Purple Orchid' },
  { id: 5, name: 'Bougainvillea' },
  { id: 6, name: 'Jasmine Plant' },
  { id: 7, name: 'Red Hibiscus' },
  { id: 8, name: 'Fruit Tree Sapling' },
];

export default function App() {
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItem[]>([]);
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const addToInvoice = (plantId: number, qty: number) => {
    if (qty <= 0) return;

    const plant = PLANTS.find(p => p.id === plantId);
    if (!plant) return;

    setInvoiceItems(prev => {
      const existing = prev.find(item => item.id === plantId);
      if (existing) {
        return prev.map(item => item.id === plantId ? { ...item, qty } : item);
      } else {
        return [...prev, { id: plantId, name: plant.name, qty }];
      }
    });
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
            <Route path="/plants" element={<Plants addToInvoice={addToInvoice} />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
        <Footer />
        <InvoiceModal
          isOpen={invoiceOpen}
          onClose={() => setInvoiceOpen(false)}
          invoiceItems={invoiceItems}
        />
      </div>
    </BrowserRouter>
  );
}
