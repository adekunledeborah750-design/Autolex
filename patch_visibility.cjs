const fs = require('fs');
const path = require('path');

const filesToPatch = [
  'index.html',
  'builds/index.html',
  'stock/index.html',
  'contact/index.html',
];

const cssFix = `
<style id="autoluxe-visibility-fix">
  /* Force remove preloader overlay */
  .bvdQTf, [class*="bvdQTf"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    z-index: -9999 !important;
  }
  
  /* Force all headings, copy and titles to be fully visible */
  .dNaaSy, [class*="dNaaSy"],
  .dNaaSy > * {
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  /* Force header navigation, social icons, and phone buttons to be visible */
  .bXQdvq, .ghWabE, .ghwtQc, .jnltat,
  [class*="bXQdvq"], [class*="ghWabE"], [class*="ghwtQc"], [class*="jnltat"] {
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* Force vehicle pictures and backgrounds to be visible */
  picture, picture img, [class*="ihyuoH"], [class*="lhrdui"] picture {
    opacity: 1 !important;
    visibility: visible !important;
  }

  /* Force sections to be fully displayed */
  section, article, main, header, footer {
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* Remove blur on un-hydrated images */
  [data-loaded="false"] {
    filter: none !important;
  }
</style>
`;

const jsFix = `
<script id="autoluxe-runtime-fix">
  (function() {
    function removePreloader() {
      const preloaders = document.querySelectorAll('.bvdQTf, [class*="bvdQTf"]');
      preloaders.forEach(el => el.remove());
      
      const hiddenTexts = document.querySelectorAll('.dNaaSy, [class*="dNaaSy"], .bXQdvq, .ghWabE');
      hiddenTexts.forEach(el => {
        el.style.visibility = 'visible';
        el.style.opacity = '1';
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', removePreloader);
    } else {
      removePreloader();
    }
    setTimeout(removePreloader, 100);
    setTimeout(removePreloader, 500);
    setTimeout(removePreloader, 1500);
  })();
</script>
`;

for (const file of filesToPatch) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, 'utf8');

  // Insert CSS in head
  if (!html.includes('autoluxe-visibility-fix')) {
    html = html.replace('</head>', `${cssFix}\n</head>`);
  }

  // Insert JS before body close
  if (!html.includes('autoluxe-runtime-fix')) {
    html = html.replace('</body>', `${jsFix}\n</body>`);
  }

  // Also remove the preloader element markup completely so it cannot even exist in HTML!
  html = html.replace(/<div class="[^"]*bvdQTf[^"]*"[\s\S]*?<\/div><\/div><\/div>/g, '');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Patched ${file} successfully!`);
}
