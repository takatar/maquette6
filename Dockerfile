# syntax=docker/dockerfile:1

# =====================================================================
# Étape 1 : construction du site statique (React + Vite + pré-rendu)
# =====================================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Les dépendances sont copiées seules pour profiter du cache Docker
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copie des sources (node_modules et out/ exclus via .dockerignore)
COPY . .

# Génère le site complet dans /app/out
RUN npm run build

# =====================================================================
# Étape 2 : serveur web de production (nginx)
# =====================================================================
FROM nginx:1.27-alpine AS runner

# Configuration nginx dédiée (pages pré-rendues + cache des assets)
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Site statique généré
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
