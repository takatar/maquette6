# Le Mondrian — site vitrine (maquette6)

Site vitrine de la résidence hôtelière **Le Mondrian** à Saly Portudal (Sénégal).
React 19 + TypeScript + Vite 6 + Tailwind CSS 4, généré en **site statique pré-rendu**
(7 fichiers HTML) puis servi par **nginx** dans une image Docker.

## Prérequis

- Node.js 20+ (testé avec Node 22 dans l'image Docker)
- Docker (pour tester l'image de production en local)

## Développement local

```bash
npm ci        # installe les dépendances
npm run dev   # serveur de développement sur http://localhost:5173
```

## Build statique

```bash
npm run build
```

Cette commande :

1. compile le client dans `out/` ;
2. compile le moteur de pré-rendu SSR dans `.ssr-temp/` ;
3. génère les pages pré-rendues : `index.html`, `presentation(.html|/index.html)`,
   `services(.html|/index.html)`, `contact(.html|/index.html)` ;
4. copie les photographies de `images/` vers `out/images/`.

Le résultat final à déployer est le dossier `out/` (il n'est pas versionné).

## Docker

```bash
# Construction de l'image de production
docker build -t maquette6 .

# Lancement local sur http://localhost:8080
docker run --rm -p 8080:80 maquette6
```

L'image est multi-étapes :

| Étape     | Image de base       | Rôle                                              |
| --------- | ------------------- | ------------------------------------------------- |
| `builder` | `node:22-alpine`    | `npm ci` + `npm run build` → `/app/out`           |
| `runner`  | `nginx:1.27-alpine` | sert `/app/out` avec `nginx.conf`, écoute le port 80 |

Points de configuration :

- `Dockerfile` : construction et image finale ;
- `nginx.conf` : routage des pages pré-rendues, cache long des assets
  (`/assets/`), cache des images (`/images/`), gzip, sonde `/healthz` ;
- `.dockerignore` : exclut `node_modules`, `out`, `.git` du contexte de build.

URL servies par nginx :

| Requête              | Fichier servi             | Statut |
| -------------------- | ------------------------- | ------ |
| `/`                  | `/index.html`             | 200    |
| `/presentation`      | `/presentation/index.html`| 200    |
| `/presentation.html` | `/presentation.html`      | 200    |
| `/services`          | `/services/index.html`    | 200    |
| `/contact`           | `/contact/index.html`     | 200    |
| `/healthz`           | sonde de santé            | 200    |
| autre URL            | `/index.html` (routeur)   | 404    |

## Déploiement sur Coolify

- **Build Pack** : `Dockerfile`
- **Dockerfile Location** : `/Dockerfile`
- **Port exposé** : `80`
- **Healthcheck** : déjà défini dans le `Dockerfile` (`/healthz`)
- **Domaine** : `https://maquette6.immed-ia.com` (DNS `A` vers l'IP du VPS,
  certificat Let's Encrypt géré par Coolify, proxy Traefik)

## Structure

```
images/            Photographies sources (copiées telles quelles dans out/images)
scripts/           build-static.mjs : pré-rendu des pages + copie des images
src/
  components/      Composants React (Header, Footer, cartes, boutons WhatsApp…)
  config/          siteConfig.ts (contenus, SEO) et photosConfig.ts (catalogue photo)
  pages/           HomePage, PresentationPage, ServicesPage, ContactPage
  App.tsx          Routage React Router (BrowserRouter en prod, MemoryRouter en file://)
index.html         Gabarit HTML (fonts, meta, <div id="root">)
nginx.conf         Configuration nginx de production
Dockerfile         Image multi-étapes node → nginx
```
