import logo from '../assets/sasiri-logo.png';

export default function InvoiceLogo() {
  return (
    <span className="relative inline-block w-64 max-w-full mb-4">
      <img src={logo} alt="Sasiri Plantation" className="block h-auto w-full brightness-[1.65] saturate-[0.85]" />
      <img src={logo} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full brightness-0 invert" style={{ clipPath: 'inset(80% 29% 11% 36%)' }} />
    </span>
  );
}

export function printableInvoiceLogo() {
  const src = new URL(logo, window.location.href).href;
  return `<span style="position:relative;display:inline-block;width:256px;max-width:100%;margin-bottom:16px">
    <img class="invoice-logo" src="${src}" alt="Sasiri Plantation" style="display:block;height:auto;width:100%">
    <img class="invoice-logo-licence" src="${src}" alt="" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;filter:brightness(0) invert(1);clip-path:inset(80% 29% 11% 36%)">
  </span>`;
}
