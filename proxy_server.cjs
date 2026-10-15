const http = require('http');
const https = require('https');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const UPSTREAM_HOST = 'forgeautomotive.co.uk';
const UPSTREAM = `https://${UPSTREAM_HOST}`;

function transformContent(bodyStr) {
  let content = bodyStr;

  // Replace exact company and legal names
  content = content.replace(/Forge Automotive Ltd/g, 'Autoluxe Automotive Ltd');
  content = content.replace(/Forge Automotive/g, 'Autoluxe Automotive');
  content = content.replace(/FORGE AUTOMOTIVE/g, 'AUTOLUXE AUTOMOTIVE');
  content = content.replace(/forge automotive/g, 'autoluxe automotive');

  // Replace email
  content = content.replace(/builds@forgeautomotive\.co\.uk/g, 'builds@autoluxe.co.uk');

  // Replace SVG logo text: replace vector paths for "forge" with "AUTOLUXE"
  content = content.replace(
    /<g class="text" clip-path="url\(#[^"]*\)">[\s\S]*?<\/g>/g,
    '<g class="text"><text x="39" y="34" font-family="\'Plus Jakarta Sans\', Arial, sans-serif" font-weight="700" font-size="8.5" letter-spacing="1.5" fill="#FFFFFF" text-anchor="middle">AUTOLUXE</text></g>'
  );

  // Replace Title & Meta
  content = content.replace(/<title>([^<]*)Forge([^<]*)<\/title>/gi, (m, p1, p2) => `<title>${p1}Autoluxe${p2}</title>`);
  content = content.replace(/content="([^"]*)Forge([^"]*)"/gi, (m, p1, p2) => `content="${p1}Autoluxe${p2}"`);
  content = content.replace(/apple-mobile-web-app-title="Forge"/g, 'apple-mobile-web-app-title="Autoluxe"');

  // Standalone Forge words
  content = content.replace(/\bForge\b/g, 'Autoluxe');
  content = content.replace(/\bFORGE\b/g, 'AUTOLUXE');

  // Inject client-side real-time observer to ensure any React dynamic text keeps "Autoluxe"
  if (content.includes('</body>')) {
    const injection = `
    <script>
      (function() {
        function sanitize() {
          if (document.title.includes('Forge')) {
            document.title = document.title.replace(/Forge/g, 'Autoluxe');
          }
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
          let node;
          while (node = walker.nextNode()) {
            if (node.nodeValue && node.nodeValue.includes('Forge')) {
              node.nodeValue = node.nodeValue.replace(/Forge Automotive/g, 'Autoluxe Automotive').replace(/Forge/g, 'Autoluxe');
            }
          }
        }
        window.addEventListener('DOMContentLoaded', sanitize);
        setInterval(sanitize, 300);
      })();
    </script>
    </body>`;
    content = content.replace('</body>', injection);
  }

  return content;
}

const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  const targetUrl = new URL(reqUrl, UPSTREAM);

  const requestHeaders = {
    ...req.headers,
    host: UPSTREAM_HOST,
    referer: UPSTREAM,
    'accept-encoding': 'gzip, deflate',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  const proxyReq = https.request(
    targetUrl,
    {
      method: req.method,
      headers: requestHeaders,
    },
    (proxyRes) => {
      // Handle redirects if any
      if (proxyRes.statusCode >= 300 && proxyRes.statusCode < 400 && proxyRes.headers.location) {
        let loc = proxyRes.headers.location;
        if (loc.startsWith(UPSTREAM)) {
          loc = loc.replace(UPSTREAM, `http://localhost:${PORT}`);
        }
        res.writeHead(proxyRes.statusCode, { ...proxyRes.headers, location: loc });
        res.end();
        return;
      }

      const contentType = proxyRes.headers['content-type'] || '';
      const isText =
        contentType.includes('text/') ||
        contentType.includes('application/javascript') ||
        contentType.includes('application/json');

      if (isText) {
        let stream = proxyRes;
        const encoding = proxyRes.headers['content-encoding'];

        if (encoding === 'gzip') {
          stream = proxyRes.pipe(zlib.createGunzip());
        } else if (encoding === 'deflate') {
          stream = proxyRes.pipe(zlib.createInflate());
        }

        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('end', () => {
          const rawBuffer = Buffer.concat(chunks);
          let bodyStr = rawBuffer.toString('utf8');

          const transformed = transformContent(bodyStr);
          const outBuffer = Buffer.from(transformed, 'utf8');

          const responseHeaders = { ...proxyRes.headers };
          delete responseHeaders['content-encoding'];
          delete responseHeaders['transfer-encoding'];
          delete responseHeaders['content-security-policy'];
          delete responseHeaders['content-security-policy-report-only'];
          responseHeaders['content-type'] = contentType;
          responseHeaders['content-length'] = outBuffer.length;
          responseHeaders['access-control-allow-origin'] = '*';

          res.writeHead(proxyRes.statusCode, responseHeaders);
          res.end(outBuffer);
        });

        stream.on('error', (err) => {
          console.error('Stream decompression error:', err);
          res.writeHead(500);
          res.end('Error processing text stream');
        });
      } else {
        // Binary stream (images, fonts, media)
        const responseHeaders = { ...proxyRes.headers };
        delete responseHeaders['content-security-policy'];
        delete responseHeaders['content-security-policy-report-only'];
        res.writeHead(proxyRes.statusCode, responseHeaders);
        proxyRes.pipe(res);
      }
    }
  );

  proxyReq.on('error', (err) => {
    console.error('Proxy request error:', err);
    res.writeHead(502);
    res.end('Upstream gateway error');
  });

  req.pipe(proxyReq);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`🚀 Autoluxe Automotive EXACT Replica LIVE at:`);
  console.log(`   ➜ http://localhost:${PORT}/`);
  console.log(`Exact 1:1 live clone of https://forgeautomotive.co.uk/`);
  console.log(`All sections, animations, canvas & scripts intact.`);
  console.log(`Name replaced: Forge -> Autoluxe`);
  console.log(`=======================================================`);
});
