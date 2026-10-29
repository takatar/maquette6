import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import fs from 'node:fs';

const rootDir = process.cwd();

function serveImagesMiddleware(req: any, res: any, next: any) {
  if (!req.url) return next();
  const cleanUrl = decodeURIComponent(req.url.split('?')[0]);
  if (cleanUrl.startsWith('/images/')) {
    const filePath = path.join(rootDir, cleanUrl);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }
  next();
}

export default defineConfig({
  base: './',
  build: {
    outDir: 'out',
    emptyOutDir: true,
  },
  plugins: [
    {
      name: 'fix-hash-in-root-path',
      enforce: 'pre',
      resolveId(source, importer) {
        if (source.startsWith('/src/')) {
          return path.join(rootDir, source);
        }
        if (importer && source.startsWith('.')) {
          const cleanImporter = importer.split('?')[0];
          const baseDir = path.dirname(cleanImporter);
          const candidateBase = path.resolve(baseDir, source);
          for (const ext of ['', '.tsx', '.ts', '.jsx', '.js', '.css']) {
            if (fs.existsSync(candidateBase + ext) && fs.statSync(candidateBase + ext).isFile()) {
              return candidateBase + ext;
            }
          }
        }
        return null;
      },
      configureServer(server) {
        server.middlewares.use(serveImagesMiddleware);
      },
      configurePreviewServer(server) {
        server.middlewares.use(serveImagesMiddleware);
      },
    },
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173,
    host: true,
  },
});



