# SMA Textiles

Premium, animated B2B textile catalog website for SMA Textiles built with **React + Tailwind CSS + Framer Motion**.

## Features
- Cinematic hero with animated intro loader.
- Sticky/floating navigation with animated mobile menu.
- Product category showcase cards.
- Searchable and filterable catalog with quote-request actions.
- Immersive product showcase storytelling.
- About, Why Choose Us, Buyer Trust, and Contact/Inquiry sections.
- Buyer-focused content for towels, bed linen, bathrobes, hotel linen, kitchen linen, and custom products.

## Tech Stack
- React (Vite)
- Tailwind CSS
- Framer Motion
- lucide-react

## Requirements
- Node.js `20.19+` (or newer LTS).
- npm `10+`.

## Local Development
```bash
npm ci
npm run dev
```

Then open: `http://localhost:5173/`.

## Production Build
```bash
npm run build
npm run preview
```


## Windows Command Prompt tip
If your prompt is on `C:` and the project is on `E:`, use:
```bat
cd /d E:\sma-textiles-catalog-main
```
Then confirm you are in the right folder before running npm:
```bat
dir package.json
npm ci
npm run dev
```

## Troubleshooting (blank page / white screen)
If you see a blank page at `localhost:5173`:
1. Stop the server.
2. Reinstall with lockfile versions:
   ```bash
   rm -rf node_modules
   npm ci
   npm run dev
   ```
   On Windows CMD:
   ```bat
   rmdir /s /q node_modules
   npm ci
   npm run dev
   ```
3. Open browser DevTools Console for runtime errors.
4. Ensure you are running the **local project Vite** from this folder, not a global Vite install.

## Deployment
### Vercel
1. Import this repository in Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy.

### Netlify
1. Import this repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.
