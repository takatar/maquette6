import fs from 'node:fs';
import path from 'node:path';
import { build } from 'vite';

const rootDir = process.cwd();
const outDir = path.join(rootDir, 'out');
const ssrOutDir = path.join(rootDir, '.ssr-temp');

async function generateStaticSite() {
  console.log('1. Compilation client dans out/...');
  await build({
    configFile: path.join(rootDir, 'vite.config.ts'),
    build: {
      outDir: 'out',
      emptyOutDir: true,
    },
  });

  console.log('2. Compilation du moteur de pré-rendu SSR...');
  await build({
    configFile: path.join(rootDir, 'vite.config.ts'),
    build: {
      ssr: path.join(rootDir, 'src/entry-server.tsx'),
      outDir: '.ssr-temp',
      emptyOutDir: true,
    },
  });

  const rawTemplateHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');
  // Remplacer type="module" crossorigin par defer classique pour compatibilité totale file:// et http://
  const templateHtml = rawTemplateHtml
    .replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/g, '<script defer src="$1"></script>')
    .replace(/\scrossorigin(\s|>)/g, '$1');

  const ssrModulePath = path.join(ssrOutDir, 'entry-server.js');
  const { renderPage } = await import(
    `file:///${ssrModulePath.replace(/\\/g, '/').replace(/#/g, '%23')}`
  );

  const routes = [
    { url: '/', files: ['index.html'] },
    { url: '/presentation', files: ['presentation.html', 'presentation/index.html'] },
    { url: '/services', files: ['services.html', 'services/index.html'] },
    { url: '/contact', files: ['contact.html', 'contact/index.html'] },
  ];

  console.log('3. Génération des pages HTML statiques pré-rendues...');
  for (const route of routes) {
    const { html: appHtml, seo } = renderPage(route.url);

    for (const relFile of route.files) {
      const isSubfolder = relFile.includes('/');

      let pageHtml = templateHtml
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${seo.title}</title>`)
        .replace(
          /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
          `<meta name="description" content="${seo.description}" />`
        )
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // Convertir les liens internes en liens relatifs compatibles à la fois en file:// et http://
      pageHtml = pageHtml
        .replace(/href="\/"/g, 'href="index.html"')
        .replace(/href="\/presentation"/g, 'href="presentation.html"')
        .replace(/href="\/services"/g, 'href="services.html"')
        .replace(/href="\/contact"/g, 'href="contact.html"');

      if (isSubfolder) {
        pageHtml = pageHtml.replace('<head>', '<head>\n    <base href="../" />');
      }

      const targetPath = path.join(outDir, relFile);
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.writeFileSync(targetPath, pageHtml, 'utf-8');
      console.log(`   ✓ Généré : out/${relFile}`);
    }
  }

  console.log('4. Copie des photographies du dossier images/ vers out/images/...');
  const srcImagesDir = path.join(rootDir, 'images');
  const destImagesDir = path.join(outDir, 'images');
  fs.mkdirSync(destImagesDir, { recursive: true });

  const imageFiles = fs.readdirSync(srcImagesDir);
  for (const file of imageFiles) {
    const srcFile = path.join(srcImagesDir, file);
    const destFile = path.join(destImagesDir, file);
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, destFile);
    }
  }
  console.log(`   ✓ ${imageFiles.length} photographies copiées dans out/images/`);

  fs.rmSync(ssrOutDir, { recursive: true, force: true });
  console.log('✓ Version statique complète générée avec succès dans out/');
}

generateStaticSite().catch((err) => {
  console.error(err);
  process.exit(1);
});

