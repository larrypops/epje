# EPJE Construction (Next.js)

Ce projet a été migré vers **Next.js App Router** (`src/app`).

## Prérequis

- Node.js 20+
- npm 10+

## Démarrage local

1. Installer les dépendances:
   ```bash
   npm install
   ```
2. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```
3. Build de production:
   ```bash
   npm run build
   ```
4. Démarrer en mode production:
   ```bash
   npm run start
   ```

## Déploiement Vercel

- **Framework preset**: `Next.js`
- **Root Directory**: `.`
- **Build Command**: `npm run build`
- **Install Command**: `npm install`

Si le projet venait d'une ancienne version Vite, faire un redeploy avec nettoyage du cache build côté Vercel.

## Assets

- Logo site: `public/images/logo.jpg`
- Favicon: basé sur le logo (`src/app/icon.jpg`)
- Icône WhatsApp flottante (SVG officiel): `public/icons/whatsapp-official.svg`
