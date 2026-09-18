interface InvoiceItem {
  id: number;
  name: string;
  qty: number;
}

export default function InvoiceModal({
  isOpen,
  onClose,
  invoiceItems
}: {
  isOpen: boolean;
  onClose: () => void;
  invoiceItems: InvoiceItem[];
}) {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Sasiri Plantation Invoice</title>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { font-family: 'Inter', sans-serif; background: #04140a; }
            .font-display { font-family: 'Playfair Display', serif; }
            .text-gradient-green {
              background: linear-gradient(135deg, #a5dba6 0%, #6fc475 50%, #44a04e 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            @media print {
              body { background: white; }
              .glass, .glass-green { background: white !important; box-shadow: none !important; }
              .bg-gradient-to-r { background: linear-gradient(135deg, #1e5a2d, #04140a) !important; }
              .text-white, .text-green-200 { color: #04140a !important; }
              .text-green-200/70, .text-green-200/80, .text-green-200/50 { color: #4a5568 !important; }
              .text-green-300 { color: #1e5a2d !important; }
            }
          </style>
        </head>
        <body class="min-h-screen bg-gradient-to-br from-[#04140a] via-[#1e5a2d] to-[#04140a] p-8">
          <div class="max-w-2xl mx-auto space-y-6">
            <div class="flex justify-between items-center">
              <div>
                <h2 class="text-3xl font-bold font-display text-gradient-green">INVOICE</h2>
                <p class="text-green-200/70">Date: ${today}</p>
              </div>
            </div>
            
            <div class="glass-green rounded-3xl p-6">
              <div class="text-center mb-6">
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHvC4yB_PhjHSq96n1raV2FnsjtvLu0W8j2q8rCW_7n1ZuafeDDeJfCi0Bras4jowep0z0fYlZR2o1yCgWQ91bx85WH953DFhnFTnRR9WAVetSTPTnNpgbuoafz6ZPDYrbnp8Mn=w408-h288-k-no" alt="Sasiri Plantation" class="h-20 mx-auto object-contain mb-4" />
                <h3 class="font-display text-2xl font-bold text-white mb-2">Sasiri Plantation</h3>
                <p class="text-green-200/70 text-sm">Your Gateway to Green Living</p>
              </div>
            </div>

            <div class="glass rounded-2xl p-6">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-green-200/20">
                    <th class="text-left py-3 text-green-200/80 text-sm uppercase tracking-wider">Plant Name</th>
                    <th class="text-center py-3 text-green-200/80 text-sm uppercase tracking-wider">Quantity</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-green-200/10">
                  ${invoiceItems.length > 0 ? invoiceItems.map(item => `
                    <tr>
                      <td class="py-4 text-white">${item.name}</td>
                      <td class="py-4 text-center text-green-300 font-bold">${item.qty}</td>
                    </tr>
                  `).join('') : `
                    <tr>
                      <td colspan="2" class="py-8 text-center text-green-200/50">No items in invoice</td>
                    </tr>
                  `}
                </tbody>
              </table>
            </div>
          </div>
          <script>window.onafterprint = function() { window.close(); };</script>
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-[#04140a]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative glass-dark rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold font-display text-gradient-green">INVOICE</h2>
                <p className="text-green-200/70">Date: {today}</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-all"
              >
                &times;
              </button>
            </div>
            
            <div className="glass-green rounded-3xl p-6">
              <div className="text-center mb-6">
                <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHvC4yB_PhjHSq96n1raV2FnsjtvLu0W8j2q8rCW_7n1ZuafeDDeJfCi0Bras4jowep0z0fYlZR2o1yCgWQ91bx85WH953DFhnFTnRR9WAVetSTPTnNpgbuoafz6ZPDYrbnp8Mn=w408-h288-k-no" alt="Sasiri Plantation" className="h-20 mx-auto object-contain mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">Sasiri Plantation</h3>
                <p className="text-green-200/70 text-sm">Your Gateway to Green Living</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-200/20">
                    <th className="text-left py-3 text-green-200/80 text-sm uppercase tracking-wider">Plant Name</th>
                    <th className="text-center py-3 text-green-200/80 text-sm uppercase tracking-wider">Quantity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-200/10">
                  {invoiceItems.length > 0 ? (
                    invoiceItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-4 text-white">{item.name}</td>
                        <td className="py-4 text-center text-green-300 font-bold">{item.qty}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="py-8 text-center text-green-200/50">
                        No items in invoice
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {invoiceItems.length > 0 && (
              <button
                onClick={handlePrint}
                className="w-full py-4 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg hover:scale-[1.02] transition-all shadow-lg shadow-green-900/50 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Invoice
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
