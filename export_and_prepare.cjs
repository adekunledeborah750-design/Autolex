const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = [
  { urlPath: '/', outputPath: 'index.html' },
  { urlPath: '/builds/', outputPath: 'builds/index.html' },
  { urlPath: '/stock/', outputPath: 'stock/index.html' },
  { urlPath: '/contact/', outputPath: 'contact/index.html' },
];

function fetchRoute(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:8080${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  for (const route of routes) {
    console.log(`Fetching ${route.urlPath}...`);
    let html = await fetchRoute(route.urlPath);

    // Make asset references absolute to forgeautomotive.co.uk so they render anywhere statically
    // (e.g. GitHub Pages, Vercel, Netlify, or direct file preview)
    html = html.replace(/href="\/_next\//g, 'href="https://forgeautomotive.co.uk/_next/');
    html = html.replace(/src="\/_next\//g, 'src="https://forgeautomotive.co.uk/_next/');
    html = html.replace(/href="\/ActiveFrame\.js"/g, 'href="https://forgeautomotive.co.uk/ActiveFrame.js"');
    html = html.replace(/src="\/ActiveFrame\.js"/g, 'src="https://forgeautomotive.co.uk/ActiveFrame.js"');

    // Internal navigation links
    html = html.replace(/href="\/builds\/"/g, 'href="/builds/"');
    html = html.replace(/href="\/stock\/"/g, 'href="/stock/"');
    html = html.replace(/href="\/contact\/"/g, 'href="/contact/"');

    const outDir = path.dirname(path.join(__dirname, route.outputPath));
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(path.join(__dirname, route.outputPath), html, 'utf8');
    console.log(`Saved ${route.outputPath} (${html.length} bytes)`);
  }
  console.log('All static pages exported successfully!');
}

run().catch(console.error);
