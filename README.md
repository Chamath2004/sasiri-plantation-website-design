# Sasiri Plantation website

The live GitHub Pages site is built from the React application in `src/`.
`sasiri-plantation.html` is the standalone prototype; editing it alone does not update the live React catalogue.

## Develop and build

```sh
npm ci
npm run dev
npx tsc --noEmit
npm run build
```

The plant catalogue is in `src/data/plants.ts`. Local plant photos are served from `public/images/`.
The Bombu and Etamba `*-illustration.png` assets are AI-generated leaf close-ups based on the supplied photographic style reference. Their cards are labelled "Illustrative image".
These names-and-images-only entries use `catalogOnly: true`, so they show no stock quantities or ordering controls and are excluded from the stock editor. Their internal zero value is a placeholder, not a stock count.
The original invoice logo remains in `src/assets/sasiri-logo.png`; its licence number is displayed in white by the header and footer.

## Stock editor

Open **Buy Plants → Admin Stock** and use the existing prototype password (`1234`).
Save Stock updates availability, quantity limits, and the current cart. Reset restores the last saved values.
Zero stock disables adding that plant to the cart.

Stock is stored under `sasiri_admin_stock_v1` in this browser's localStorage.
It is not shared across visitors, browsers, or devices. The password is a client-side editing gate, not server authentication.
Adding plants to an invoice does not record a sale or reduce stock automatically.

## Publish

GitHub Pages serves the `gh-pages` branch. Commit source changes to `master`, build, then copy the contents of `dist/` to `gh-pages`.
Copy the built `index.html` to `404.html` too, so direct React routes load on GitHub Pages.
Push both branches and verify the Pages deployment workflow succeeds.
