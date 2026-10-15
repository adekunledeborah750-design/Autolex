const fs = require('fs');
const path = require('path');

const filesToPatch = [
  'index.html',
  'builds/index.html',
  'stock/index.html',
  'contact/index.html',
];

const comprehensiveFix = `
<style id="autoluxe-complete-visibility-fix">
  /* 1. Remove stuck preloader overlay completely */
  .bvdQTf, [class*="bvdQTf"], .sc-60e682e4-0 {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    z-index: -9999 !important;
  }

  /* 2. Remove black mask overlay */
  .lmcVrK:after, [class*="lmcVrK"]:after {
    display: none !important;
    opacity: 0 !important;
  }

  /* 3. Hero section background car image */
  .lmcVrK, .dKbqDu, .eOrkgz, [class*="dKbqDu"] {
    background-image: url("https://cdn.forgeautomotive.media/images/ed72g2cx/production/1ebe90ab77d2912275ef15f9ba86fe2fea1f451f-2880x3600.jpg?auto=format&fit=max&w=2880") !important;
    background-size: cover !important;
    background-position: center bottom !important;
    background-repeat: no-repeat !important;
    background-color: #0C0C0C !important;
  }

  /* 4. Force all hero headlines, titles, and text to be fully visible */
  .dpFkxc, .hflLLX, .gSwEKM, .dNaaSy, .jnltat,
  [class*="dpFkxc"], [class*="hflLLX"], [class*="gSwEKM"], [class*="dNaaSy"], [class*="jnltat"],
  .dNaaSy > * {
    visibility: visible !important;
    opacity: 1 !important;
  }

  .dpFkxc {
    color: #F2F1ED !important;
    text-shadow: 0 4px 24px rgba(0,0,0,0.9);
  }

  .hflLLX {
    color: rgba(242, 241, 237, 0.85) !important;
    text-shadow: 0 2px 14px rgba(0,0,0,0.9);
  }

  .gSwEKM {
    color: #F2F1ED !important;
    text-shadow: 0 4px 20px rgba(0,0,0,0.9);
  }

  /* 5. Force header navigation and social icons to be visible */
  .bXQdvq, .ghWabE, .ghwtQc,
  [class*="bXQdvq"], [class*="ghWabE"], [class*="ghwtQc"] {
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* 6. Force vehicle pictures and backgrounds to be visible */
  picture, picture img, [class*="ihyuoH"], [class*="lhrdui"] picture {
    opacity: 1 !important;
    visibility: visible !important;
  }

  /* 7. Force all sections to be fully displayed */
  section, article, main, header, footer {
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* 8. Make sure body can scroll naturally */
  body, html {
    overflow-x: hidden !important;
    overflow-y: auto !important;
    background-color: #0C0C0C !important;
  }

  /* 9. Remove blur on un-hydrated images */
  [data-loaded="false"] {
    filter: none !important;
  }
</style>
`;

for (const file of filesToPatch) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf8');

  // Replace old fix if present, otherwise insert before </head>
  if (html.includes('autoluxe-complete-visibility-fix')) {
    html = html.replace(/<style id="autoluxe-complete-visibility-fix">[\s\S]*?<\/style>/, comprehensiveFix);
  } else if (html.includes('autoluxe-visibility-fix')) {
    html = html.replace(/<style id="autoluxe-visibility-fix">[\s\S]*?<\/style>/, comprehensiveFix);
  } else {
    html = html.replace('</head>', `${comprehensiveFix}\n</head>`);
  }

  // Remove any preloader divs in the DOM
  html = html.replace(/<div class="[^"]*bvdQTf[^"]*"[\s\S]*?<\/div><\/div><\/div>/g, '');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Patched ${file} with comprehensive visibility fix!`);
}
