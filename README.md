# Polo Avenue

Website for **Polo Avenue** — Lagos's house of luxury, since 2003. Authorized retail for Gucci, Bottega Veneta, Saint Laurent, Cartier, Rolex, Chopard, Piaget, Tom Ford, Loro Piana, and others.

## Stack

Static site, no build step. The browser does the work:

- **React 18 (UMD)** + **Babel-standalone** transform JSX in-browser
- `components.jsx` — atoms (Placeholder, Arrow, Reveal, SectionHead)
- `sections.jsx` — page sections (Nav, Hero, Houses, Watches, Boutique, Founder, Marquee, Gallery, CtaBanner, Footer)
- `styles.css` — full design system + responsive
- `motion.js` — vanilla JS layer: Lenis smooth-scroll, custom gold cursor, magnetic CTAs, mouse-x tilt on watch cards
- `videos/v1.mp4` · `v2.mp4` · `v3.mp4` — portrait triptych for the hero

Vercel serves these files directly. No `npm install`, no build step.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Connected to Vercel. Push to `main` auto-deploys.

## Boutique

166 Ozumba Mbadiwe, Victoria Island, Lagos
Mon–Sat 10:00–20:00 · Sun by appointment

## Contact

- Phone: +234 908 826 8200
- WhatsApp: https://wa.me/2349088268200
- Email: concierge@poloavenue.com

## v2 considerations (production phase)

- Replace browser-Babel with a Vite/esbuild compile step for ~10× faster first paint
- Real product photography per brand card (currently placeholder rectangles)
- Real boutique interior + founder portrait (currently placeholders)
- Wire footer brand-filter links to actual filtered views
- Add a private journal / press section
